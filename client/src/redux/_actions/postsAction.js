import axios from "axios";

import { SET_POSTS_TYPE } from "../_actionTypes";

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
        console.log(err)
    }
}