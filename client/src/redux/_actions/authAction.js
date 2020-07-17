import axios from 'axios';
import { REGISTER_ERR_TYPE, REGISTER_USER_Type } from "../_actionTypes"

export const register = (registerData) => async dispatch => {
    try {
        await axios.post("/api/v1/register", registerData, {
            headers: {
                'content-type': "application/json"
            }
        });
    } catch (err) {
        const status = err.response.data.error.status;
        const message = err.response.data.error.message;
        if (status === 403) {
            if (message.search("username") !== -1) {
                dispatch({ type: REGISTER_ERR_TYPE, payload: { username: "username is already taken" } })
            } else if (message.search("email") !== -1) {
                dispatch({ type: REGISTER_ERR_TYPE, payload: { email: "Email is already registered : Try login" } })
            }
        }

    }

}