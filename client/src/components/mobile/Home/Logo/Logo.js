import React from "react";
import LogoSVG from "./LogoSVG";
import "./Logo.css";

const logo = (props) => {
    return(
        <div className="Logo">
            <LogoSVG />
        </div>
    );
};

export default logo;