import React from "react";
import { Link } from 'react-router-dom';
import classes from "./Login.css";
import LoginSVG from "./LoginSVG"; 

const login = (props) => {
    let loginStyle = {
        display: "inline - block",
        height: "48px",
        width: "35 %",
        padding: "10px",
        margin: "0 auto",
        marginLeft: "41px",
        textAlign: "center",
        fontFamily: "'Julius Sans One', sans - serif",
        fontSize: "0.75rem",
        color: "white",
        backgroundColor: "#FF5335",
        borderRadius: "5px",
        borderColor: "transparent",
        cursor: "pointer"
    }

    return(
        <div style={loginStyle}>
            <Link 
                to="/login"
                style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    display: "inline-block"
                }}
            >
            <LoginSVG /> LOGIN
            </Link>
        </div>
    );
};

export default login;