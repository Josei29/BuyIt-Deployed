import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./List/List";
import classes from "./Lists.module.css";
import * as actions from "../../../../store/actions";

const lists = (props) => {
    let listContainerStyle = {
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap"
    };

    useEffect(() => {
        props.getList(props.userId);
    }, []);

    let noListFound = false;

    if (props.userList.length === 0) noListFound = true;

    return(
        <div style={listContainerStyle}>
            {noListFound ? <p className={classes.Text} >Start Adding Some Lists!</p> : null}
            {props.userList.map(list => {
                return <List key={list._id} {...props} list={list} />
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
        getList: (userId) => dispatch(actions.getList(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(lists);