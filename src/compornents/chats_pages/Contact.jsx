// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// function Contact() {
//     const [contacts, setContacts] = useState([]);
//     const loggedInUserName = localStorage.getItem("loggedInUserName");

//     const containerStyle = {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh", // Full height
//         backgroundColor: "#f9f9f9",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//         overflowY: "auto", // Enable scrolling if content overflows
//     };

//     const headingStyle = {
//         fontSize: "2rem",
//         color: "#333",
//         marginBottom: "20px",
//         textAlign: "center", // Center the heading
//     };

//     const textStyle = {
//         fontSize: "1.2rem",
//         color: "#666",
//         textAlign: "center",
//         maxWidth: "600px",
//         marginBottom: "20px", // Space below the paragraph
//     };

//     const contactListStyle = {
//         width: "100%", // Full width for the list
//         maxWidth: "600px", // Limit width for larger screens
//         listStyleType: "none", // Remove default list styles
//         padding: 0,
//     };

//     const contactItemStyle = {
//         padding: "15px",
//         borderBottom: "1px solid #e0e0e0",
//         backgroundColor: "#fff",
//         marginBottom: "10px",
//         borderRadius: "5px",
//         cursor: "pointer",
//         transition: "background-color 0.3s",
//     };

//     const handleHover = (event) => {
//         event.currentTarget.style.backgroundColor = "#f1f1f1";
//     };

//     const handleLeave = (event) => {
//         event.currentTarget.style.backgroundColor = "#fff";
//     };

//     useEffect(() => {
//         const fetchContacts = async () => {
//             try {
//                 const response = await fetch("http://localhost:5000/api/contacts");
//                 const data = await response.json();
//                 // Filter out the logged-in user
//                 const filteredContacts = data.filter(contact => contact.name !== loggedInUserName);
//                 setContacts(filteredContacts);
//             } catch (error) {
//                 console.error("Error fetching contacts:", error);
//             }
//         };

//         fetchContacts();
//     }, [loggedInUserName]);

//     const chat=(e)=>{
//         navigate("/chatting");
//     }

//     return (
//         <div style={containerStyle}>
//             <h1 style={headingStyle}>Contacts</h1>
//             <p style={textStyle}>
//                 Here you can manage your contacts. Click on a contact to chat with them.
//             </p>
//             <ul style={contactListStyle}>
//                 {contacts.length > 0 ? (
//                     contacts.map(contact => (
//                         <li 
//                             key={contact._id} 
//                             style={contactItemStyle} 
//                             onMouseEnter={handleHover} 
//                             onMouseLeave={handleLeave}
//                             onClick={chat}
//                         >
//                             {contact.name}
//                         </li>
//                     ))
//                 ) : (
//                     <p>No contacts available.</p>
//                 )}
//             </ul>
//             <div>
//                 {/* Additional content can go here */}
//                 <p>Manage your contacts efficiently. Add or edit contacts as needed.</p>
//             </div>
//         </div>
//     );
// }

// export default Contact;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [contacts, setContacts] = useState([]);
    const loggedInUserName = localStorage.getItem("loggedInUserName");
    const navigate = useNavigate();

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        overflowY: "auto",
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "#333",
        marginBottom: "20px",
        textAlign: "center",
    };

    const textStyle = {
        fontSize: "1.2rem",
        color: "#666",
        textAlign: "center",
        maxWidth: "600px",
        marginBottom: "20px",
    };

    const contactListStyle = {
        width: "100%",
        maxWidth: "600px",
        listStyleType: "none",
        padding: 0,
    };

    const contactItemStyle = {
        padding: "15px",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        marginBottom: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    };

    const handleHover = (event) => {
        event.currentTarget.style.backgroundColor = "#f1f1f1";
    };

    const handleLeave = (event) => {
        event.currentTarget.style.backgroundColor = "#fff";
    };

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/contacts");
                const data = await response.json();
                const filteredContacts = data.filter(contact => contact.name !== loggedInUserName);
                setContacts(filteredContacts);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        fetchContacts();
    }, [loggedInUserName]);

    const chat = (contactName) => {
        navigate("/messagePlace", { state: { contactName } });
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contacts</h1>
            <p style={textStyle}>
                Here you can manage your contacts. Click on a contact to chat with them.
            </p>
            <ul style={contactListStyle}>
                {contacts.length > 0 ? (
                    contacts.map(contact => (
                        <li 
                            key={contact._id} 
                            style={contactItemStyle} 
                            onMouseEnter={handleHover} 
                            onMouseLeave={handleLeave}
                            onClick={() => chat(contact.name)}
                        >
                            {contact.name}
                        </li>
                    ))
                ) : (
                    <p>No contacts available.</p>
                )}
            </ul>
            <div>
                <p>Manage your contacts efficiently. Add or edit contacts as needed.</p>
            </div>
        </div>
    );
}

export default Contact;
