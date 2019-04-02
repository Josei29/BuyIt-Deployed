import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddSVG from "../Icons/Add";
import LogoSmSVG from "../Icons/LogoSm";
import Lists from "./Lists/Lists";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Modal from "./Modal/Modal";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const overview = (props) => {
    let [showBackdrop, setShowBackdrop] = useState(false);

    let headerStyle = {
        margin: "20px",
        display: "inline-block"
    };

    useEffect(() => {
        //console.log("Use effect", props.userId)
        props.getList(props.userId);
    }, []);

    const addNewListHandler = () => setShowBackdrop(true);

    const removeBackdrop = () => setShowBackdrop(false);

    const logout = () => props.logout();

    let noListFound = false;

    if (props.userList.length === 0) noListFound = true;

    return(
        <div>
            <header className="overview__header__mobile">
                <Link 
                    to="/"
                    style={headerStyle}
                    onClick={logout}
                >
                    <LogoSmSVG />
                </Link>
                <div 
                    onClick={addNewListHandler}
                    style={headerStyle}
                >
                    <AddSVG />
                </div>
            </header>
            {noListFound ? <p className="overview__noitems__mobile" >Start Adding Some Lists!</p> : null}
            {showBackdrop ? <Backdrop show={showBackdrop} remove={removeBackdrop} /> : null}
            {showBackdrop ? <Modal {...props} click={removeBackdrop} /> : null}
            {props.userList.map(list => {
                return <Lists key={list._id} {...props} list={list} />
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        userList: state.data.userList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        getList: (userId) => dispatch(actions.getList(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(overview);