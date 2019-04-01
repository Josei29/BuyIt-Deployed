import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

let initialState = {
    userList: [],
    listData: null,
    reloadList: false
};

const getUserList = (state, action) => updateObject(state, {userList: action.userList});

const getListData = (state, action) => updateObject(state, {listData: action.listData, reloadList: false});

const clearListData = (state) => updateObject(state, {listData: null});

const reloadList = (state) => updateObject(state, {reloadList: true});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST: return getUserList(state, action);

        case actionTypes.GET_LIST_DATA: return getListData(state, action);
        
        case actionTypes.CLEAR_LIST_DATA: return clearListData(state);

        case actionTypes.RELOAD_LIST: return reloadList(state);

        default: return state;
    };
};

export default reducer;