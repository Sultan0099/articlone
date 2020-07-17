import { REGISTER_ERR_TYPE, REGISTER_USER_Type } from "../_actionTypes"

const initialState = {
    accessToken: null,
    user: null,
    errors: {}
};

const testReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_ERR_TYPE:
            return {
                ...state,
                errors: {
                    ...action.payload
                }
            };
        case REGISTER_USER_Type:
            console.log(action.payload)
        // return {
        //     ...state,
        //     errors: {},
        //     user: action.payload.user,
        //     accessToken: action.payload.jwtToken
        // }
        default:
            return state;
    }

};

export default testReducer;