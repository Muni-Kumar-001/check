import React from "react";
import { useNavigate } from "react-router-dom";

const loggedInUserName = localStorage.getItem("loggedInUserName");

function Header() {
    const navigate = useNavigate();

    const head = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#121212",
        color: "#FFFFFF",
        width: "100vw",
        height: "15vh",
        padding: "0 20px",
        boxSizing: "border-box",
    };

    const imgStyle = {
        height: "60px",
        width: "60px",
        backgroundColor: "#FFFFFF",
        border: "2px solid #B0B0B0",
        borderRadius: "50%",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
    };

    const nameStyle = {
        flex: "4",
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
    };

    const settingsStyle = {
        cursor: "pointer",
        fontSize: "24px",
        color: "#3f83f8",
        transition: "color 0.3s",
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedInUserName");
        navigate("/");
    };

    return (
        <div style={head}>
            <div className="img" style={imgStyle}>👤</div>
            <div className="name" style={nameStyle}>{loggedInUserName}</div>
            <div
                className="settings"
                style={settingsStyle}
                title="logout"
                onMouseEnter={(e) => e.currentTarget.style.color = "#FFFFFF"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#3f83f8"}
                onClick={handleLogout}
            >
                <span dangerouslySetInnerHTML={{ __html: "&#128682;" }} />
            </div>
        </div>
    );
}

export default Header;
