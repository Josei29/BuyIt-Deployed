import React, { useState } from "react";
import classes from "./Modal.module.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

const modal = (props) => {
    let [name, setName] = useState("");

    let addStyle = {
        fontSize: "5rem",
        color: "#FF5335",
        fontFamily: "'Julius Sans One', sans-serif"
    };

    let inputStyle = {
        border: "none",
        borderBottom: "2px solid #3E92A3",
        fontSize: "1.2rem",
        outline: "none",
        fontFamily: "'Archivo Narrow Regular', sans-serif"
    };

    const inputChangeHandler = (e) => setName(e.target.value);

    const addListHandler = () => {

        if (name.trim().length > 0) {
            props.createList(props.userId, name);
            props.history.goBack();
            props.click();
        } else {
            props.click();
        };
    };

    return (
        <div className={classes.Modal}>
            <span 
                onClick={addListHandler}
                style={addStyle}
            >+
            </span>
            <input 
                type="text" 
                placeholder="My List" 
                style={inputStyle}
                name="name"
                onChange={inputChangeHandler}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createList: (userId, listName) => dispatch(actions.createList(userId, listName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(modal);