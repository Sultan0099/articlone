import { SET_PROFILE_TYPE } from "../_actionTypes";

const initialState = {
    profile: null,
    error: {}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_TYPE:
            return {
                ...state,
                profile: { ...state.profile, ...action.payload }
            }
        default:
            return state
    }
}

export default profileReducer;