import { SET_POSTS_TYPE } from "../_actionTypes";

const initialState = {
    totalPages: 0,
    currentPage: 0,
    totalPosts: 0,
    postPerPage: 0,
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
                posts: action.payload.posts,
                published: action.payload.posts.filter(post => post.state === "published"),
                unPublished: action.payload.posts.filter(post => post.state === "unpublished"),
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                totalPosts: action.payload.totalPosts,
                postPerPage: action.payload.postPerPage,
            };
        default:
            return state
    }
}

export default postsReducer;