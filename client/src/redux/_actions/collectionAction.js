import axios from "axios";


import { SET_COLLECTION_TYPE, CREAT_COLLECTION_TYPE } from "../_actionTypes";

const ORIGIN = "/api/v1/collections";

const token = localStorage.getItem('secret')
const options = {
    headers: {
        'content-type': "application/json",
        'Authorization': `Bearer ${token}`
    }
}

// export const getAllCollections = () => dispatch => {
//     try {
//         const res = await axios.get(`${ORIGIN}/getAll`, options);
//         console.log(res)
//     } catch (err) {
//         console.log(err)
//     }
// }

export const getAllCollections = () => async dispatch => {
    try {
        const res = await axios.get(`${ORIGIN}/getAll`, options);
        dispatch({ type: SET_COLLECTION_TYPE, payload: res.data.data.collections })

    } catch (err) {
        console.log(err)
    }
}

export const createCollection = ({ title, description }) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/collections/create', { title, description }, options);
        dispatch({ type: CREAT_COLLECTION_TYPE, payload: res.data.data.collection })
    } catch (err) {
        console.log(err);
    }
}