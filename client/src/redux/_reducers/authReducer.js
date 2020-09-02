import { REGISTER_USER_TYPE, AUTH_ERR_TYPE, SET_USER_TYPE } from "../_actionTypes"

const initialState = {
    accessToken: null,
    user: null,
    errors: {},
    isAuthenticated: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_ERR_TYPE:
            return {
                ...state,
                errors: {
                    ...action.payload
                }
            };
        case REGISTER_USER_TYPE:
            console.log(action.payload)
            return {
                ...state,
                errors: {},
            };
        case SET_USER_TYPE:
            return {
                ...state,
                errors: {},
                isAuthenticated: true,
                user: action.payload.user,
                accessToken: action.payload.jwtToken,

            }
        default:
            return state;
    }

};

export default authReducer;