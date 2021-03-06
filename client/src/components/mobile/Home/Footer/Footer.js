import React from "react";
import classes from "./Footer.module.css";

const footer = () => (
    <p className={classes.Footer}>
        <a 
            href="https://Josei29.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                textDecoration: "none",
                color: "#FF5335",
                cursor: "pointer"
            }}
        >
        Jose Jimenez  
        </a> - 2019
    </p>
);

export default footer;