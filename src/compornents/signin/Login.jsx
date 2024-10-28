import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [details, setDetails] = useState({ name: '', password: '' });
    const [error, setError] = useState(''); // State for error messages

    const assignDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const showDetails = async () => {
        const { name, password } = details;

        // Clear previous error message
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("loggedInUserName", data.user.name);
                // Navigate to the chat page on successful login
                navigate("/chat");
            } else {
                // Display error message
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }

        // Clear the input fields after the request
        setDetails({ name: '', password: '' });
    };

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <form>
            <p>Login Page</p>
            <div className='container'>
                <label htmlFor="name">Name</label><br />
                <input 
                    type="text" 
                    placeholder="Enter your name" 
                    onChange={assignDetails} 
                    name="name" 
                    id="name" 
                    value={details.name}
                    required 
                /><br />
                
                <label htmlFor="password">Password</label>
                <div className="password-container">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                        value={details.password}
                        onChange={assignDetails}
                        required
                    />
                   <span className="toggle-btn" onClick={togglePassword}>
                        {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
                    </span>
                </div>
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                <button type="button" onClick={showDetails}>Login</button>
                <p>or</p>
                <Link to="/register">
                    <button type="button" style={{ backgroundColor: "#ff0000ba" }}>Register</button>
                </Link>
            </div>
        </form>
    );
}

export default Login;
