import axios from "axios";


import { SET_COLLECTION_TYPE, CREAT_COLLECTION_TYPE, SET_ACTIVE_COLLECTION_TYPE } from "../_actionTypes";

const ORIGIN = "/api/v1/collections";



export const getAllCollections = () => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.get(`${ORIGIN}/getAll`, {
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        }
        );
        dispatch({ type: SET_COLLECTION_TYPE, payload: res.data.data.collections })

    } catch (err) {
        console.log(err)
    }
}

export const getSingleCollection = (collectionId) => async dispatch => {

    try {
        const token = localStorage.getItem('secret');
        const res = await axios.get(`${ORIGIN}/getSingle/${collectionId}`, {
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch({ type: SET_ACTIVE_COLLECTION_TYPE, payload: res.data.data })
    } catch (err) {
        console.log({ err })
    }

}

export const createCollection = ({ title, description }) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.post('/api/v1/collections/create', { title, description }, {
            headers: {
                'content-type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        }
        );
        dispatch({ type: CREAT_COLLECTION_TYPE, payload: res.data.data.collection })
    } catch (err) {
        console.log(err);
    }
}