import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props) => {
    return (
        <React.Fragment>
        {props.show ? 
            <div 
                onClick={props.remove}
                className={classes.Backdrop}
            ></div> 
        : null}
        </React.Fragment>
    );
};

export default backdrop;