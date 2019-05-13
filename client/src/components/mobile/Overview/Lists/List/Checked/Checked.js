import React from "react";
import CheckedSVG from "../../../../Icons/Checked";
import classes from "./Checked.module.css";

const checkedItem = (props) => {
    let priceStyle = {
        fontSize: "1.75rem",
        fontFamily: "'Julius Sans One', sans-serif",
        color: "#FF5335",
    };

    let crossedStyle = {
        textDecoration: "line-through",
        textDecorationColor: "#FF5335"
    };

    return (
        <div className={classes.Checked} onClick={() => props.click(props.id)} >
            <CheckedSVG />
            <span style={crossedStyle}>{props.name}</span>
            <span style={priceStyle}>$</span>
            <span style={crossedStyle}>{props.price}</span>
        </div>
    );
};

export default checkedItem;