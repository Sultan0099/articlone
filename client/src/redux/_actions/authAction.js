import axios from 'axios';
import { AUTH_ERR_TYPE, REGISTER_USER_TYPE, LOGIN_USER_TYPE } from "../_actionTypes"

const options = {
    headers: {
        'content-type': "application/json"
    }
}

const grabStatusFromError = (err) => err.response.data.error.status;
const grabMessageFromError = (err) => err.response.data.error.message;

export const register = (registerData) => async dispatch => {
    try {
        await axios.post("/api/v1/register", registerData, options);
        await dispatch({ type: REGISTER_USER_TYPE })
    } catch (err) {
        const status = grabStatusFromError(err);
        const message = grabMessageFromError(err);
        if (status === 403) {
            if (message.search("username") !== -1) {
                dispatch({ type: AUTH_ERR_TYPE, payload: { username: "username is already taken" } })
            } else if (message.search("email") !== -1) {
                dispatch({ type: AUTH_ERR_TYPE, payload: { email: "Email is already registered : Try login" } })
            }
        }

    }

}

export const login = (loginData) => async dispatch => {
    try {
        const res = await axios.post("/api/v1/login", loginData, options);
        console.log(res)
        await dispatch({ type: LOGIN_USER_TYPE, payload: res.data.data });
    } catch (err) {
        console.log({ err });
        const status = grabStatusFromError(err);
        const message = grabMessageFromError(err);
        if (status === 401) {
            if (message === 'user not found') {
                dispatch({ type: AUTH_ERR_TYPE, payload: { usernameOrEmail: 'you have not registered' } })
            } else if (message === 'password is not valid') {
                dispatch({ type: AUTH_ERR_TYPE, payload: { password: "password is invalid" } })
            }
        }
    }
}