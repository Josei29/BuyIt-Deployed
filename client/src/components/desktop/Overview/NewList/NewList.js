import React, { useState } from "react";
import AddSVG from "../../Icons/AddList";
import classes from "./NewList.module.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

const newList = (props) => {
    let [listName, setListName] = useState("");

    let inputStyle = {
        border: "none",
        borderBottom: "2px solid #707070",
        width: "30%",
        marginLeft: "10px",
        fontSize: "1.5rem",
        outline: "none",
        textAlign: "center",
        color: "#3E92A3"
    };  

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (listName.trim().length > 0) {
            props.createList(props.userId, listName);  
            console.log(props.history) 
            props.history.goForward();
        };
    };
    
    const inputChangedHandler = (e) => setListName(e.target.value);

    return(
        <div>
            <form onSubmit={formSubmitHandler} className={classes.Form}>
                CREATE NEW LIST 
                <span onClick={formSubmitHandler}> <AddSVG /> </span>
                <input 
                    type="text"
                    placeholder="Name"
                    name="listName"
                    style={inputStyle}
                    onChange={inputChangedHandler}
                />
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(newList);