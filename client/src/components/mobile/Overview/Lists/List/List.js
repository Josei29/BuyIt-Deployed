import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoSmSVG from "../../../Icons/LogoSm";
import GoBackSVG from "../../../Icons/Back";
import AddItem from "./Add/Add";
import Item from "./Item/Item";
import CheckedItem from "./Checked/Checked";
import CartSVG from "../../../Icons/Cart";
import "./List.css";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions";


const list = (props) => {

    let headerStyle = {
        margin: "20px",
        display: "inline-block"
    };

    let listNameStyle = {
        margin: "0 auto",
        fontFamily: '"Julius Sans One", sans-serif',
        fontSize: "3rem",
        textAlign: "center",
        color: "#3E92A3"
    };

    let cartStyle = {
        textAlign: "center",
        margin: "0 auto",
        width: "100%",
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "#FF5335",
        position: "fixed",
        bottom: "0px",
        backgroundColor: "white"
    };

    let noItemsStyle = {
        width: "100%",
        fontSize: "1.8rem",
        margin: "20px auto",
        color: "#FF5335",
        textAlign: "center"
    };

    useEffect(() => {
        // Call to get the data
        // TO GET THE ID (props.match.params)
        let listId = {_id: props.match.params.id}
        props.getListData(listId);
    }, [props.reloadList]);

    const goBack = () => {
        props.clearListData();
        props.history.goBack();
    };

    //if (props.listData) console.log("Got List Data", props.listData);
    const uncheckedItemHandler = (itemId) => {
        //console.log("Unchecked", itemId);
        props.updateItem({_id: itemId, update: {checked: true}});
    };
    
    const checkedItemHandler = (itemId) => {
        //console.log("Checked", itemId);
        props.updateItem({_id: itemId, update: {checked: false}});
    };

    let noListData = false;

    for(let key in props.listData) {
        if (key === "items") {
            if(props.listData[key].length === 0) {
                noListData = true;
            };
        }
    }

    let total = 0;

    return (
        <div>
            <header className="Header" >
                <Link 
                    to="/"
                    style={headerStyle}
                >
                    <LogoSmSVG />
                </Link>
                <div
                    style={headerStyle} 
                    onClick={goBack}
                >
                    <GoBackSVG />
                </div>
            </header>
            <p style={listNameStyle} >
                {props.listData ? props.listData.name : <span>Loading...</span>}
            </p>
            <AddItem {...props} listId={props.match.params.id} />
            {noListData === true ? <p style={noItemsStyle}>Start Adding Some Items!</p> : null}
            <div style={{ paddingBottom: "80px" }}>
                {props.listData ? props.listData.items.map((item) => {
                    let displayItem = null;

                    if (!item.checked) {
                        displayItem = <Item 
                                        click={uncheckedItemHandler} 
                                        key={item._id} 
                                        name={item.name} 
                                        price={item.price} 
                                        id={item._id} 
                                        />
                    } else {
                        total += item.price;
                        displayItem = <CheckedItem 
                                        click={checkedItemHandler} 
                                        key={item._id} 
                                        name={item.name} 
                                        price={item.price} 
                                        id={item._id} 
                                        />
                    }
                    return displayItem;

                }) : null}
            </div>
            <div style={cartStyle} >
                <CartSVG />  ${total}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        listData: state.data.listData,
        reloadList: state.data.reloadList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getListData: (listId) => dispatch(actions.getListData(listId)),
        clearListData: () => dispatch(actions.clearListData()),
        updateItem: (itemId) => dispatch(actions.updateItem(itemId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(list);