import React, { useState } from "react";
import Logo from "../../Icons/Logo";
import LoginSVG from "../../Icons/Login";
import SignupSVG from "../../Icons/Signup";
import classes from "./Header.module.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import LoginModal from "../../Login/Login";
import SignUpModal from "../../Signup/Signup";
 
const header = (props) => {
    let [showBackdrop, setShowBackdrop] = useState(false);
    let [showLogin, setShowLogin] = useState(false);
    let [showSignUp, setShowSignUp] = useState(false);

    let modalStyle = {
        color: "#FFFFFF",
        textDecoration: "none",
        fontSize: "1.8rem",
        fontFamily: "'Julius Sans One', sans-serif",
        cursor: "pointer"
    };

    let linksStyle = {
        width: "30%",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between"
    };

    const removeBackdrop = () => {
        setShowBackdrop(false);
        setShowLogin(false);
        setShowSignUp(false);
    };

    const loginHandler = () => {
        setShowBackdrop(true);
        setShowLogin(true);
    };

    const signUpHandler = () => {
        setShowBackdrop(true);
        setShowSignUp(true);
    };

    return(
        <div className={classes.Header} >
            <Logo />
            <div style={linksStyle} >
                <div onClick={loginHandler} style={modalStyle}>
                    <LoginSVG /> LOGIN
                </div>
                <div onClick={signUpHandler} style={modalStyle}>
                    <SignupSVG /> SIGN UP
                </div>
            </div>
            <Backdrop show={showBackdrop} remove={removeBackdrop} />
            {showLogin ? <LoginModal {...props} /> : null}
            {showSignUp ? <SignUpModal {...props} /> : null}
        </div>
    );
};

export default header;