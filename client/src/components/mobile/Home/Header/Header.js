import React from "react";
import "./Header.css";
import Login from "./Buttons/Login/Login";
import Signup from "./Buttons/Signup/Signup";

const header = (props) => {
    return(
        <div className="Header">
            <Login />
            <Signup />
        </div>
    );
};

export default header;