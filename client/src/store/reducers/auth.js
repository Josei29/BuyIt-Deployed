import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

let initialState = {
    isAuth: false,
    userId: null,
    error: null,
    loading: false
};

const authStart = (state) => updateObject(state, {error: null, loading: true});

const createUser = (state, action) => {
    return updateObject(state, {isAuth: true, userId: action.userId});
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        isAuth: action.isAuth,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state) => updateObject(state, initialState);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state);

        case actionTypes.CREATE_USER: return createUser(state, action);

        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);

        case actionTypes.AUTH_FAIL: return authFail(state, action);

        case actionTypes.AUTH_LOGOUT: return authLogout(state);

        default: return state;
    };
};

export default reducer;