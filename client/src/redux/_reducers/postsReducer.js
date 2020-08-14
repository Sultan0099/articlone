import { SET_POSTS_TYPE, DELETE_POSTS_TYPE, PUBLISH_POSTS_TYPE, UNPUBLISH_POSTS_TYPE } from "../_actionTypes";

const initialState = {
    totalPages: 0,
    currentPage: 0,
    totalPosts: 0,
    postPerPage: 0,
    posts: [],
    published: [],
    unPublished: [],
    filteredPosts: [],
    active: null,
    errors: {}
}

const filterPostsWithId = (arr = [], postId) => arr.filter(item => item._id !== postId);


const postsReducer = (state = initialState, action) => {
    let updatedPosts = [];
    switch (action.type) {
        case SET_POSTS_TYPE:
            return {
                ...state,
                posts: action.payload.posts,
                published: action.payload.posts.filter(post => post.state === "published"),
                unPublished: action.payload.posts.filter(post => post.state === "unpublished"),
                filteredPosts: action.payload.posts,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                totalPosts: action.payload.totalPosts,
                postPerPage: action.payload.postPerPage,
            };
        case DELETE_POSTS_TYPE:
            return {
                ...state,
                posts: filterPostsWithId(state.posts, action.payload.postId),
                filteredPosts: filterPostsWithId(state.posts, action.payload.postId),
                published: filterPostsWithId(state.published, action.payload.postId),
                unPublished: filterPostsWithId(state.unPublished, action.payload.postId),

                totalPosts: action.payload.totalPosts,
                totalPages: Math.ceil(action.payload.totalPosts / state.postPerPage)

            };
        case PUBLISH_POSTS_TYPE:
            updatedPosts = state.posts.map(post => {
                if (post._id === action.payload._id) {
                    post = action.payload;
                    return post;
                }
                return post;
            })
            return {
                ...state,
                posts: updatedPosts,
                filteredPosts: updatedPosts,
                published: updatedPosts.filter(post => post.state === "published"),
                unPublished: updatedPosts.filter(post => post.state === "unpublished"),
            };
        case UNPUBLISH_POSTS_TYPE:
            updatedPosts = state.posts.map(post => {
                if (post._id === action.payload._id) {
                    post = action.payload;
                    return post;
                }
                return post;
            })
            return {
                ...state,
                posts: updatedPosts,
                filteredPosts: updatedPosts,
                published: updatedPosts.filter(post => post.state === "published"),
                unPublished: updatedPosts.filter(post => post.state === "unpublished"),
            }
        default:
            return state
    }
}

export default postsReducer;