import React from "react";
import { Link } from 'react-router-dom';
import "./Login.css";
import LoginSVG from "./LoginSVG"; 

const login = (props) => {
    return(
        <div className="login__mobile">
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