import React from "react";
import Logo from "../../Icons/Logo";
import LogoutSVG from "../../Icons/Logout";
import GoBackSVG from "../../Icons/GoBack";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

const header = (props) => {
    let linksStyle = {
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer"
    };

    const logoutHandler = () => props.logout();

    return(
        <div>
            <div className={classes.Header}>
                <Logo />
                <div style={linksStyle}>
                    <div onClick={props.goBack}>
                        <GoBackSVG />
                    </div>
                    <div onClick={logoutHandler}>
                        <LogoutSVG />
                    </div>
                </div>
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