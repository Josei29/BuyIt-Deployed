import React from "react";
import Logo from "../../Icons/Logo";
import LogoutSVG from "../../Icons/Logout";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

const header = (props) => {
    const logoutHandler = () => props.logout();
 
    return(
        <div className={classes.Header}>
            <Logo />
            <div onClick={logoutHandler} style={{cursor: "pointer"}}>
                <LogoutSVG />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(header);