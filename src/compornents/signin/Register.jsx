// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login';

// function Register() {
//     const navigate = useNavigate(); // Use useNavigate hook
//     const condStyle = {
//         color: "red",
//         width: "400px",
//         maxWidth: "400px",
//         textAlign: "left",
//         padding: "10px"
//     };

//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     const [details, setDetails] = useState({ name: '', password: '' });

//     const assignDetails = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//     };

//     const showDetails = () => {
//         const { name, password } = details;

//         // Check for name length
//         if (name === '') {
//             alert('Name should not be empty');
//             return;
//         }

//         // Validate password
//         if (password.length < 8) {
//             alert('Password must be at least 8 characters long');
//             return;
//         }

//         if (!/^[A-Za-z]/.test(password)) {
//             alert("Password must start with an alphabet");
//             return;
//         }

//         if (!/[A-Z]/.test(password)) {
//             alert('Password must contain at least one capital letter');
//             return;
//         }

//         if (!/[a-z]/.test(password)) {
//             alert('Password must contain at least one lowercase letter');
//             return;
//         }

//         if (!/\d/.test(password)) {
//             alert('Password must contain at least one digit');
//             return;
//         }
        
//         if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             alert('Password must contain at least one special character (e.g., !@#$%^&*(),.?":{}|<>)');
//             return;
//         }

//         // Log details and reset
//         console.log(details);
//         setDetails({ name: '', password: '' });
//         navigate("/"); // Use navigate for redirection
//     };

//     const togglePassword = () => {
//         setIsPasswordVisible(!isPasswordVisible);
//     };

//     return (
//         <form>
//             <p>Register Page</p>
//             <div className='container'>
//                 <label htmlFor="name">Name</label><br />
//                 <input 
//                     type="text" 
//                     placeholder="Enter your name" 
//                     onChange={assignDetails} 
//                     name="name" 
//                     id="name" 
//                     value={details.name}
//                     required 
//                 /><br />
                
//                 <label htmlFor="password">Password</label>
//                 <div className="password-container">
//                     <input
//                         type={isPasswordVisible ? "text" : "password"}
//                         placeholder="Enter your password"
//                         name="password"
//                         id="password"
//                         value={details.password}
//                         onChange={assignDetails}
//                         required
//                     />
//                     <span className="toggle-btn" onClick={togglePassword}>
//                         {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
//                     </span>
//                 </div>
//                 <br />
                
//                 <button type="button" onClick={showDetails}>Register</button>
//                 <p>or</p>
//                 <Link to="/">
//                     <button type="button" style={{ backgroundColor: "#3f730dba" }}>Login</button>
//                 </Link>
//             </div>
//             <div style={condStyle}>
//                 <p>The password must be minimum 8 characters</p>
//                 <p>The password must contain at least one special character{" Ex., !@#$%^&*(),.?:{}|<></>"}</p>
//                 <p>The password must include at least one digit</p>
//                 <p>The password must include at least one capital letter</p>
//                 <p>The password must include at least one small letter</p>
//                 <p>The password must start with an alphabet</p>
//             </div>
//         </form>
//     );
// }

// export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login';

function Register() {
    const navigate = useNavigate();
    const condStyle = {
        color: "red",
        width: "400px",
        maxWidth: "400px",
        textAlign: "left",
        padding: "10px"
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [details, setDetails] = useState({ name: '', password: '' });

    const assignDetails = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const validatePassword = (password) => {
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return false;
        }
        if (!/^[A-Za-z]/.test(password)) {
            alert("Password must start with an alphabet");
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            alert('Password must contain at least one capital letter');
            return false;
        }
        if (!/[a-z]/.test(password)) {
            alert('Password must contain at least one lowercase letter');
            return false;
        }
        if (!/\d/.test(password)) {
            alert('Password must contain at least one digit');
            return false;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            alert('Password must contain at least one special character');
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        const { name, password } = details;

        if (name === '') {
            alert('Name should not be empty');
            return;
        }

        if (!validatePassword(password)) {
            return; // Exit if password validation fails
        }

        // Send data to backend
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Registration successful!');
                navigate("/"); // Redirect to login page
            } else {
                alert(result.message); // Show error message from the server
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }

        // Reset details
        setDetails({ name: '', password: '' });
    };

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <form>
            <p>Register Page</p>
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
                
                <button type="button" onClick={handleRegister}>Register</button>
                <p>or</p>
                <Link to="/">
                    <button type="button" style={{ backgroundColor: "#3f730dba" }}>Login</button>
                </Link>
            </div>
            <div style={condStyle}>
                <p>The password must be minimum 8 characters</p>
                <p>The password must contain at least one special character {" Ex., !@#$%^&*(),.?:{}|<></>"}</p>
                <p>The password must include at least one digit</p>
                <p>The password must include at least one capital letter</p>
                <p>The password must include at least one small letter</p>
                <p>The password must start with an alphabet</p>
            </div>
        </form>
    );
}

export default Register;
