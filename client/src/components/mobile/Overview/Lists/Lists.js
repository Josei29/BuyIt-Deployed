import React from "react";
import DeleteSVG from "../../Icons/Close";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";

const lists = (props) => {
    let deleteStyle = {
        position: "absolute",
        top: "-15px",
        right: "8px"
    };

    let nameStyle = {
        margin: "0 auto"
    };

    const displayListHandler = (id) => props.history.push("/list/" + id);

    const deleteListHandler = (id) => {
        props.deleteList({_id: id});
        props.history.goBack();
    };

    return(
        <div className="lists__mobile" >
            <p 
                style={nameStyle}
                onClick={() => displayListHandler(props.list._id)} 
            >
                {props.list.name}
            </p>
            <span 
                onClick={() => deleteListHandler(props.list._id)} 
                style={deleteStyle}
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

export default connect(null, mapDispatchToProps)(lists);