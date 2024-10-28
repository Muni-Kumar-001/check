import React, { useState } from "react";
import Header from '../Header';
import CallsPage from "./CallsPage";
import StatusPage from "./StatusPage";
import Contact from "./Contact";

function Head() {
    const [det, setDet] = useState("Contacts");

    const change = (value) => {
        setDet(value);
    };

    const buttonStyle = {
        flex: 1, // Allows buttons to grow and fill available space
        height: "50px",
        cursor: "pointer",
        backgroundColor: "#3f83f8", // Soft blue background
        color: "#FFFFFF", // White text color
        border: "none",
        borderRadius: "5px", // Slightly rounded corners
        margin: "5px", // Space between buttons
        transition: "background-color 0.3s", // Smooth background transition
    };

    const buttonHoverStyle = {
        backgroundColor: "#2c65b2", // Darker blue on hover
    };

    return (
        <>
            <Header />
            <div style={{ width: "100vw", display: "flex", padding: "10px", boxSizing: "border-box" }}>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    onClick={() => change("Contacts")}
                >
                    Contacts
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    onClick={() => change("Status")}
                >
                    Status
                </button>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    onClick={() => change("Calls")}
                >
                    Calls
                </button>
            </div>
            <div style={{ padding: "20px", width: "100vw", boxSizing: "border-box" }}>
                {det === "Calls" ? <CallsPage /> :
                 det === "Status" ? <StatusPage /> :
                 det === "Contacts" ? <Contact /> : null}
            </div>
        </>
    );
}

export default Head;
