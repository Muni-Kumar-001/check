import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './MessagePlace.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

function MessagePlace() {
    const location = useLocation();
    const navigate = useNavigate();
    const { contactName } = location.state || {};
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const userId = localStorage.getItem("loggedInUserName");
    const contactId = contactName;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/fetch_messages?id=${contactId}&userid=${userId}`);
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessages();
        const interval = setInterval(fetchMessages, 2000);
        return () => clearInterval(interval);
    }, [userId]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!message) return;

        console.log("Sending message:", { id: contactId, userid: userId, msg: message });

        try {
            await fetch("http://localhost:5000/api/insert_message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: contactId,
                    userid: userId,
                    msg: message,
                }),
            });
            setMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const deleteMessages = async () => {
        if (window.confirm("Are you sure you want to delete all messages with this contact?")) {
            try {
                await fetch("http://localhost:5000/api/delete_messages", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: contactId, userid: userId }),
                });
                setMessages([]); // Clear messages from state
            } catch (error) {
                console.error("Error deleting messages:", error);
            }
        }
    };

    const formatMessageTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getDateString = (dateString) => {
        const date = new Date(dateString);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const yy = date.getFullYear();
    
        return `${dd}/${mm}/${yy}`;
    };
    

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.profImg}></div>
                <div style={styles.profName}>{contactName.toUpperCase()}</div>
                <div style={styles.deleteIcon} onClick={deleteMessages} title="Delete Conversation">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
            <div style={styles.chatContainer}>
                <div style={styles.messageList}>
                    {messages.map((msg, index) => {
                        const currentDate = new Date(msg.time).toDateString();
                        const isFirstMessageOfDate = index === 0 || currentDate !== new Date(messages[index - 1].time).toDateString();

                        return (
                            <div key={index}>
                                {isFirstMessageOfDate && (
                                    <div style={styles.dateSeparator}>
                                        {getDateString(msg.time)}
                                    </div>
                                )}
                                <div style={{ textAlign: msg.toId === contactId ? "right" : "left" }}>
                                    <div style={{
                                        ...styles.messageBubble,
                                        backgroundColor: msg.toId === contactId ? "#d1e7dd" : "#f8d7da",
                                        alignSelf: msg.toId === contactId ? "flex-end" : "flex-start",
                                    }}>
                                        {msg.msg}
                                        <br />
                                        <sub style={styles.messageTime}>{formatMessageTime(msg.time)}</sub>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div style={styles.footer}>
                <form onSubmit={sendMessage} style={styles.form}>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        style={styles.input}
                    />
                    <button type="submit" style={styles.sendButton}>Send</button>
                </form>
            </div>
        </div>
    );
}

// Styles
const styles = {
    container: {
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        height: "99vh",
        backgroundColor: "#f9f9f9",
        padding: "10px",
    },
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: "8px",
    },
    profImg: {
        width: "42px",
        height: "42px",
        backgroundImage: "url('../../Images/profile.jpg')",
        backgroundSize: "cover",
        borderRadius: "50%",
        backgroundColor: "white",
        marginRight: "10px",
    },
    profName: {
        fontWeight: "bold",
        fontSize: "1.2rem",
        flexGrow: 1,
    },
    deleteIcon: {
        cursor: "pointer",
        fontSize: "30px",
        color: "white",
    },
    chatContainer: {
        flexGrow: 10,
        overflowY: "auto",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
        height: "50vh"
    },
    messageList: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxHeight: "calc(100% - 50px)",
        overflowY: "scroll",
        paddingRight: "10px",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
    },
    messageBubble: {
        display: "inline-block",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "75%",
        wordBreak: "break-word",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    messageTime: {
        fontSize: "0.8rem",
        color: "#555",
        marginTop: "5px",
    },
    dateSeparator: {
        textAlign: "center",
        margin: "10px 0",
        fontWeight: "bold",
        fontSize: "1rem",
        color: "#777",
    },
    footer: {
        // marginTop: "10px",
        // height:"10px"
    },
    form: {
        position: "absolute",
        bottom: "5px",
        padding: "0px 30px 0px 44px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    input: {
        position: "relative",
        top: "10px",
        width: "80vw",
        flexGrow: 1,
        padding: "10px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        marginRight: "10px",
        fontSize: "1rem",
    },
    sendButton: {
        position: "relative",
        width: "10vw",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "20px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s",
    },
};

export default MessagePlace;
