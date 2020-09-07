import axios from "axios";


import {
    SET_COLLECTION_TYPE,
    CREAT_COLLECTION_TYPE,
    SET_ACTIVE_COLLECTION_TYPE,
    UPLOAD_COLLECTION_IMG_TYPE,
    DELETE_COLLECTION_TYPE,
    UPDATE_COLLECTiON_TYPE
} from "../_actionTypes";

const ORIGIN = (path) => `/api/v1/collections${path}`;



export const getAllCollections = () => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.get(ORIGIN('/getAll'), {
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
        const res = await axios.get(ORIGIN(`/getSingle/${collectionId}`), {
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
        const res = await axios.post(ORIGIN('/create'), { title, description }, {
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

export const uploadCollectionImg = (collectionId, data) => async dispatch => {
    try {
        const opt = {
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": "Bearer " + localStorage.getItem("secret"),
            },
        };

        const res = await axios.post(ORIGIN(`/upload-collection-img/${collectionId}`), data, opt);
        dispatch({ type: UPLOAD_COLLECTION_IMG_TYPE, payload: { _id: collectionId, collectionImg: res.data.data.collectionImg } })
        return res.data.data.collectionImg;
    } catch (error) {
        console.log(error)
    }
}

export const deleteCollection = (collectionId) => async dispatch => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.delete(ORIGIN(`/delete/${collectionId}`), {
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        console.log(res);
        return res;
        // dispatch({ type: DELETE_COLLECTION_TYPE, payload: collectionId })

    } catch (error) {
        console.log({ error })
    }
}


export const updateCollection = (collectionId, data) => async dispatch => {
    try {
        console.log("called update Collection")
        const token = localStorage.getItem('secret');
        const res = await axios.patch(ORIGIN(`/update/${collectionId}`), data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        console.log("res", res);
        dispatch({ type: UPDATE_COLLECTiON_TYPE, payload: { _id: res.data.data.collectionId, ...data } })

    } catch (error) {
        console.log(error)
    }
}

export const getVisitedUser = async (collectionId) => {
    try {
        const token = localStorage.getItem('secret');
        const res = await axios.get(ORIGIN(`/get-visited-users/${collectionId}`), {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        console.log(res);

        return res.data.data.cmsUsers
    } catch (err) {
        console.log(err)
    }
}