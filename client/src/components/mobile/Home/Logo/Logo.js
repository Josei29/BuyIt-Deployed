import React from "react";
import LogoSVG from "./LogoSVG";
import classes from "./Logo.module.css";

const logo = (props) => {
    return(
        <div className={classes.Logo}>
            <LogoSVG />
        </div>
    );
};

export default logo;