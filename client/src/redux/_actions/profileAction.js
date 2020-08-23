import axios from 'axios';

import { SET_PROFILE_TYPE } from "../_actionTypes";

const ORIGIN = (path) => `/api/v1/profile${path}`;

export const createProfile = (profileData) => async dispatch => {
    try {
        console.log("createProfile called")
        const token = localStorage.getItem('secret');
        const res = await axios.post(ORIGIN('/create'), profileData, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        await dispatch({ type: SET_PROFILE_TYPE, payload: res.data.data.profile })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (profileData) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.post(ORIGIN('/update'), profileData, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        await dispatch({ type: SET_PROFILE_TYPE, payload: res.data.data.profile })
    } catch (error) {
        console.log(error)
    }
}

export const uploadProfileImg = (data) => async dispatch => {
    try {
        const opt = {
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": "Bearer " + localStorage.getItem("secret"),
            },
        };

        const res = await axios.post(ORIGIN(`/upload-profile-img`), data, opt);

        await dispatch({ type: SET_PROFILE_TYPE, payload: res.data.data });
        return res.data.data.profileImg

    } catch (error) {

    }
}