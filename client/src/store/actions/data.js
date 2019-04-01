import * as actionTypes from "./actionTypes";
import Api from "../../Api/Api";

export const getUserList = (data) => {
    return {
        type: actionTypes.GET_LIST,
        userList: data
    };
};

export const getList = (userId) => {
    return dispatch => {

        Api.getList(userId).then((res) => {
            //console.log(res);
            dispatch(getUserList(res.data));
        }); 

    };
};

export const createList = (userId, listName) => {
    return () => {
        Api.createList(userId, listName)
    };
};

export const deleteList = (listId) => {
    return () => {
        Api.deleteList(listId)
    };
};

export const dataSuccess = (listData) => {
    return {
        type: actionTypes.GET_LIST_DATA,
        listData: listData
    };
};

export const getListData = (listId) => {
    return dispatch => {
        Api.getListData(listId).then((res) => {
            dispatch(dataSuccess(res.data[0]));
        });
    };
};

export const clearListData = () => {
    return {
        type: actionTypes.CLEAR_LIST_DATA
    };
};

export const reloadList = () => {
    return {
        type: actionTypes.RELOAD_LIST
    };
};

export const newItem = (itemData) => {
    return dispatch => {
        Api.newItem(itemData).then((res) => {
            //console.log("data.js", res);
            dispatch(reloadList());
        });
    };
};

export const updateItem = (itemId) => {
    return dispatch => {
        Api.updateItem(itemId).then((res) => {
            //console.log("data.js", res);
            dispatch(reloadList());
        });
    };
};