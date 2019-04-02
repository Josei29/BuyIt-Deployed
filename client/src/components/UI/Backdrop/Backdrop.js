import React from "react";

const backdrop = (props) => {
    return (
        <React.Fragment>
        {props.show ? 
            <div 
                onClick={props.remove}
                className="backdrop__mobile"
            ></div> 
        : null}
        </React.Fragment>
    );
};

export default backdrop;