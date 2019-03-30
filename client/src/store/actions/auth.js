import * as actionTypes from "./actionTypes";
import Api from "../../Api/Api";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const createUser = (newUser) => {
    return dispatch => {
        dispatch(authStart());

        Api.create(newUser).then((res) => {
            console.log(res);
            if (res.data.code === 11000) {
                dispatch(authFail("Already Exists"));
            } else {
                // RETURN userId from DB TO OUR REDUCER
                // isAuth, userId
                dispatch(authSuccess(true, res.data._id));
            };
        });

    };
};

export const authSuccess = (isAuth, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        isAuth: isAuth,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("expirationDate");
    // localStorage.removeItem("userId");

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const login = (userData) => {
    return dispatch => {
        dispatch(authStart());

        Api.login(userData).then((res) => {
            //console.log("Login", res);
            if (res.data === "Not Found") {
                dispatch(authFail("Wrong Username/Password"));
            } else dispatch(authSuccess(true, res.data[0]._id));
        });

        // axios.post(url, authData).then(res => {
        //     // console.log(res);
        //     let expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
        //     localStorage.setItem("token", res.data.idToken);
        //     localStorage.setItem("expirationDate", expirationDate);
        //     localStorage.setItem("userId", res.data.localId);

        //     dispatch(authSuccess(res.data.idToken, res.data.localId));
        // }).catch(err => {
        //     // console.log(err);
        //     dispatch(authFail(err.response.data.error));
        // });
    };
};