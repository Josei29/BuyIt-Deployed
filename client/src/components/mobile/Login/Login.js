import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../Icons/LogoMd";
import Form from "./Form/Form";
import classes from "./Login.module.css";

const login = (props) => {
    return(
        <div>
            <div className={classes.Logo}>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <Form {...props} />
        </div>
    );
};

export default login;