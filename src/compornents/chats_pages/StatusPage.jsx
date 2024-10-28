import React from "react";

function StatusPage() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh", // Center the content vertically
        backgroundColor: "#f9f9f9", // Light background for contrast
        padding: "20px",
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        textAlign: "center", // Center text alignment
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "#333", // Darker text color for better readability
        marginBottom: "20px",
    };

    const statusStyle = {
        fontSize: "1.5rem",
        color: "#05AB85", // Green color for status indication
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Call Status</h1>
            <p style={statusStyle}>
                <span role="img" aria-label="phone" style={{ fontSize: "2rem" }}>
                    📞
                </span> 
                It is in progress...
            </p>
        </div>
    );
}

export default StatusPage;
