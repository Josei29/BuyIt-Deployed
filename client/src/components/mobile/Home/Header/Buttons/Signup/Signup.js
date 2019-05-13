import React from "react";
import { Link } from 'react-router-dom';
import classes from "./Signup.module.css";
import SignupSVG from "./SignupSVG";

const signup = (props) => {
    return(
        <div className={classes.Signup}>
            <Link 
                to="/signup"
                style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    display: "inline-block"
                }}
            >
            <SignupSVG /> SIGN UP
            </Link>
        </div>
    );
};

export default signup;