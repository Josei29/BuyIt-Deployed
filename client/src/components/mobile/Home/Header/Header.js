import React from "react";
import classes from "./Header.module.css"
import Login from "./Buttons/Login/Login";
import Signup from "./Buttons/Signup/Signup";

const header = (props) => {
    return(
        <div className={classes.Header}>
            <Login />
            <Signup />
        </div>
    );
};

export default header;