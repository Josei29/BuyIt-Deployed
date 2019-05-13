import React from "react";
import classes from "./Footer.module.css";

const footer = () => (
    <div className={classes.Footer} >
        <p>JOSE JIMENEZ - 2019</p>
        <a
            href="https://Josei29.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                textDecoration: "none",
                color: "#FFFFFF",
                cursor: "pointer"
            }}
        >
            PORTFOLIO
        </a>
    </div>
);

export default footer;