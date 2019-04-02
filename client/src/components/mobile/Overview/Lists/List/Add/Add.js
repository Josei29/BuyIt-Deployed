import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../../store/actions";

const add = (props) => {
    let [itemName, setItemName] = useState("");
    let [itemPrice, setItemPrice] = useState(""); 

    let inputStyle = {
        border: "none",
        borderBottom: "2px solid #3E92A3",
        width: "25%",
        margin: "20px auto",
        marginLeft: "10px",
        fontSize: "1rem",
        outline: "none"
    };

    const addItemHandler = () => {
        // console.log("Added", itemName, itemPrice)
        if (itemName.trim().length > 0) {
            let itemData = {
                listId: props.listId,
                name: itemName,
                price: itemPrice || 0
            }; 

            props.newItem(itemData);
        }; 
    };

    const inputChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        if (e.target.name === "name") setItemName(e.target.value);
        if (e.target.name === "price") setItemPrice(e.target.value);
    };

    return (
        <div>
            <form className="add__form__mobile" >
                <span onClick={addItemHandler}>
                +
                </span>
                <input 
                    type="text" 
                    placeholder="Water" 
                    style={inputStyle}
                    name="name"
                    onChange={inputChangeHandler}
                /> $
                <input 
                    type="number" 
                    placeholder="10.00" 
                    style={inputStyle} 
                    name="price"
                    onChange={inputChangeHandler}
                />
            </form>
        </div>
    ); 
};

const mapDispatchToProps = dispatch => {
    return {
        newItem: (itemData) => dispatch(actions.newItem(itemData))
    };
};

export default connect(null, mapDispatchToProps)(add);