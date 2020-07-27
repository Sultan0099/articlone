import { REGISTER_USER_TYPE, AUTH_ERR_TYPE, SET_USER_TYPE } from "../_actionTypes"

const initialState = {
    accessToken: null,
    user: null,
    errors: {},
    profile: null
};

const testReducer = (state = initialState, action) => {

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
                user: action.payload.user,
                accessToken: action.payload.jwtToken,
                profile: action.payload.user.profile ? action.payload.user.profile : null
            }
        default:
            return state;
    }

};

export default testReducer;