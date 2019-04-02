import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../Icons/LogoMd";
import Form from "./Form/Form";

const signup = (props) => {
    return(
        <div>
            <div className="md__logo__mobile">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <Form {...props} />
        </div>
    );
};

export default signup;