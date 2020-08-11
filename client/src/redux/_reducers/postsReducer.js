import { SET_POSTS_TYPE } from "../_actionTypes";

const initialState = {
    posts: [],
    published: [],
    unPublished: [],
    active: null,
    errors: {}
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS_TYPE:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state
    }
}

export default postsReducer;