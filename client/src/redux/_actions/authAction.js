import axios from 'axios';
import { AUTH_ERR_TYPE, REGISTER_USER_TYPE, SET_USER_TYPE } from "../_actionTypes"


const options = {
    headers: {
        'content-type': "application/json"
    }
}

const grabStatusFromError = (err) => err.response.data.error.status;
const grabMessageFromError = (err) => err.response.data.error.message;

export const register = (registerData, history) => async dispatch => {
    try {
        const res = await axios.post("/api/v1/register", registerData, options);
        await dispatch({ type: REGISTER_USER_TYPE })
        if (res) { setTimeout(() => { history.push(`/signup/check_email/${registerData.email}`) }, 500) }
    } catch (err) {
        const status = grabStatusFromError(err);
        const message = grabMessageFromError(err);
        if (status === 403) {
            if (message.search("username") !== -1) {
                dispatch({ type: AUTH_ERR_TYPE, payload: { username: "username is already taken" } })
            } else if (message.search("email") !== -1) {
                dispatch({ type: AUTH_ERR_TYPE, payload: { email: "Email is already registered : Try login" } })
            }
        } else if (status === 500) {
            history.push('/something-went-wrong');
        }

    }

}

export const login = (loginData, history) => async dispatch => {
    try {
        const res = await axios.post("/api/v1/login", loginData, options);
        localStorage.setItem('secret', res.data.data.jwtToken);
        await dispatch({ type: SET_USER_TYPE, payload: res.data.data });

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
            if (message === 'user is not verified') {
                setTimeout(() => { history.push(`/signup/check_email/${loginData.email}`) }, 500)
            }
        } else if (status === 500) {
            history.push('/something-went-wrong')
        }
    }
}

export const getUserByToken = (token) => async dispatch => {
    try {
        const res = await axios.get('/api/v1/get-user-token', {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        localStorage.setItem('secret', res.data.data.jwtToken);
        await dispatch({ type: SET_USER_TYPE, payload: res.data.data })
    } catch (err) {
        console.log(err)
        localStorage.removeItem('secret');
    }
}

export const verifyEmailToken = (token) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/confirm-email', { token }, options);
        localStorage.setItem('secret', res.data.data.jwtToken)
        await dispatch({ type: SET_USER_TYPE, payload: res.data.data });
    } catch (err) {
        console.log(err)
        localStorage.removeItem('secret');
    }
}

