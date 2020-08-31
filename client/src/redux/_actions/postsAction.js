import axios from "axios";

import { SET_POSTS_TYPE, DELETE_POSTS_TYPE, PUBLISH_POSTS_TYPE, UNPUBLISH_POSTS_TYPE, SET_ACTIVE_POSTS_TYPE } from "../_actionTypes";

const ORIGIN = (path) => `/api/v1/posts${path}`;

export const getAllPosts = (collectionId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.get(ORIGIN(`/getAll/${collectionId}`), {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({ type: SET_POSTS_TYPE, payload: res.data.data.posts });

        console.log(res);
    } catch (err) {
        console.log({ err })
    }
}

export const getPaginatedPost = ({ page = 1, limit = 10, filter = "posts", collectionId }) => async dispatch => {
    try {
        const applyFilter = filter === "posts" ? "all" : filter;
        const token = localStorage.getItem('secret');
        const res = await axios.get(ORIGIN(`/paginatedPost/${collectionId}/${applyFilter.toLowerCase()}?page=${page}&limit=${limit}`), {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        dispatch({ type: SET_POSTS_TYPE, payload: res.data.data });
        console.log(res);
    } catch (err) {
        console.log({ err })
    }
}

export const deletePosts = (postId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.delete(ORIGIN(`/delete/${postId}`), {
            headers: {
                authorization: `Bearer ${token}`
            }
        });


        await dispatch({ type: DELETE_POSTS_TYPE, payload: res.data.data })
    } catch (err) {
        console.log(err)
    }
}

export const publishPosts = (postId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.patch(ORIGIN(`/update/${postId}`), { state: 'published' }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });



        await dispatch({ type: PUBLISH_POSTS_TYPE, payload: res.data.data })
    } catch (err) {
        console.log({ err })
    }
}

export const unPublishPosts = (postId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.patch(ORIGIN(`/update/${postId}`), { state: 'unpublished' }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });



        await dispatch({ type: UNPUBLISH_POSTS_TYPE, payload: res.data.data })
    } catch (err) {
        console.log({ err })
    }
}

export const createPost = ({ title, description, body, collectionId }) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        await axios.post(ORIGIN('/create'), { title, description, body, collectionId }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

    } catch (err) {
        console.log({ err })
    }

}
export const updatePosts = (data, postId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.patch(ORIGIN(`/update/${postId}`), data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    } catch (err) {
        console.log(err)
    }
}

export const getSinglePost = (postId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.get(ORIGIN(`/getSingle/${postId}`), {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: SET_ACTIVE_POSTS_TYPE, payload: res.data.data });
        return res.data.data;
    } catch (err) {
        console.log(err)
    }
}