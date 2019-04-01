import React from "react";
import "./Backdrop.css";

const backdrop = (props) => {
    return (
        <React.Fragment>
        {props.show ? 
            <div 
                onClick={props.remove}
                className="Backdrop"
            ></div> 
        : null}
        </React.Fragment>
    );
};

export default backdrop;