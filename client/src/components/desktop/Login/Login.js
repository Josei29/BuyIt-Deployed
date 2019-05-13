import React, { useState } from "react";
import MailSVG from "../Icons/Mail";
import PasswordSVG from "../Icons/Password";
import classes from "./Login.module.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const login = (props) => {
    let [userEmail, setUserEmail] = useState("");
    let [userPassword, setUserPassword] = useState("");
    let [missingInfo, setMissingInfo] = useState(false);

    let inputStyle = {
        border: "none",
        borderBottom: "2px solid #3E92A3",
        width: "55%",
        marginLeft: "10px",
        fontSize: "1.5rem",
        outline: "none"
    };

    let submitStyle = {
        display: "block",
        padding: "10px",
        width: "59%",
        margin: "20px auto",
        borderRadius: "5px",
        borderColor: "transparent",
        backgroundColor: "#FF5335",
        color: "white",
        fontSize: "1.5rem",
        cursor: "pointer"
    };

    let errorStyle = {
        color: "red",
        margin: "0 auto",
        textAlign: "center",
        fontSize: "1.2rem"
    };

    let formContainerStyle = {
        zIndex: "100",
        width: "60%",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        position: "fixed",
        left: "18%",
        top: "20%",
        height: "40%"
    };

    let formStyle = {
        marginTop: "20px"
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        //console.log("Submitted");
        if (userEmail.trim().length > 0 && userPassword.trim().length > 0) {
            setMissingInfo(false);
            
            let userData = {
                email: userEmail.trim(),
                password: userPassword.trim()
            };

            props.login(userData);

        } else {
            setMissingInfo(true);
        };
        //props.history.push("/overview");
    };

    if (props.isAuth) {
        props.history.push("/overview");
    }

    const inputChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        if (e.target.name === "email") setUserEmail(e.target.value);
        if (e.target.name === "password") setUserPassword(e.target.value);
    };

    return(
        <div style={formContainerStyle}>
            {missingInfo ? <p style={errorStyle}>Information Missing!</p> : null}
            {props.error ? <p style={errorStyle}>Wrong Username/Password!</p> : null}
            <form onSubmit={formSubmitHandler} style={formStyle}>
                <label className={classes.Label}>
                    <MailSVG />
                    <input
                        type="email"
                        placeholder="email@email.com"
                        style={inputStyle}
                        name="email"
                        onChange={inputChangeHandler}
                    />
                </label>
                <label className={classes.Label}>
                    <PasswordSVG />
                    <input
                        type="password"
                        placeholder="*******"
                        style={inputStyle}
                        name="password"
                        onChange={inputChangeHandler}
                    />
                </label>
                <input
                    type="submit"
                    value="LOGIN"
                    style={submitStyle}
                />
            </form>
        </div>
    ); 
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth === true,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (userData) => dispatch(actions.login(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);