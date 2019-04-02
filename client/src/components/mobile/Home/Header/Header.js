import React from "react";
import Login from "./Buttons/Login/Login";
import Signup from "./Buttons/Signup/Signup";

const header = (props) => {
    return(
        <div className="header__mobile">
            <Login />
            <Signup />
        </div>
    );
};

export default header;