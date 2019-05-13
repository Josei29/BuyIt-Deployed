import React from "react";
import DeleteSVG from "../../../Icons/Delete";
import classes from "./List.module.css";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions";

const list = (props) => {
    let deleteStyle = {
        position: "absolute",
        top: "2px",
        right: "2px"
    };

    let nameStyle = {
        width: "80%",
        margin: "0 auto",
        overflow: "auto"
    };

    const displayListHandler = (id) => props.history.push("/list/" + id);

    const deleteListHandler = (id) => {
        props.deleteList({_id: id});
        props.history.goBack();
    };

    return(
        <div className={classes.List}>
            <p 
                style={nameStyle}
                onClick={() => displayListHandler(props.list._id)}
            >
                {props.list.name}
            </p>
            <span 
                style={deleteStyle}
                onClick={() => deleteListHandler(props.list._id)}
            >
                <DeleteSVG />
            </span>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteList: (listId) => dispatch(actions.deleteList(listId))
    };
};

export default connect(null, mapDispatchToProps)(list);