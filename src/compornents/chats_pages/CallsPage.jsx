// import React from 'react';

// function CallsPage(){
//     return(
//         <div style={{display: "flex"}}>
//                 <div style={{width: "60px",height:" 60px", backgroundColor: "#05AB85", margin: "10px",borderRadius: "60px"}}></div>
//                 <div style={{textAlign: "left"}}>
//                     <p>Create a call link</p>
//                     <p>Share a link for your WhatsApp call</p>
//                 </div>
//                 <br/>
//         </div>
//     );
// }
// export default CallsPage;

import React from 'react';

function CallsPage() {
    const containerStyle = {
        display: "flex",
        alignItems: "center", // Center items vertically
        padding: "15px", // Add some padding around the container
        border: "1px solid #B0B0B0", // Optional: add a border for separation
        borderRadius: "8px", // Rounded corners for the container
        backgroundColor: "#f9f9f9", // Light background for contrast
        margin: "10px", // Space between cards
    };

    const iconStyle = {
        width: "60px",
        height: "60px",
        backgroundColor: "#05AB85", // Green color
        marginRight: "15px", // Space between icon and text
        borderRadius: "50%", // Make it circular
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Text color for the icon
        fontSize: "24px", // Size of the icon text (if any)
    };

    const textStyle = {
        textAlign: "left",
        color: "#333", // Darker text color for readability
    };

    return (
        <div style={containerStyle}>
            <div style={iconStyle}>📞</div> {/* Optional: Add an icon or emoji */}
            <div style={textStyle}>
                <p style={{ fontWeight: "bold", margin: "0" }}>Create a call link</p>
                <p style={{ margin: "5px 0 0 0" }}>Share a link for your WhatsApp call</p>
            </div>
        </div>
    );
}

export default CallsPage;
