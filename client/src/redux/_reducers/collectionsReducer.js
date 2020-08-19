import { SET_COLLECTION_TYPE, CREAT_COLLECTION_TYPE, SET_ACTIVE_COLLECTION_TYPE } from "../_actionTypes";

const initialState = {
    collections: [],
    active: null,
    error: {}
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION_TYPE:
            return {
                ...state,
                collections: action.payload,
                error: {}
            }
        case CREAT_COLLECTION_TYPE:
            return {
                ...state,
                collections: [...state.collections, action.payload],
                error: {}
            }
        case SET_ACTIVE_COLLECTION_TYPE:
            return {
                ...state,
                active: action.payload.collection,
                apiKey: action.payload.apiKey
            }
        default:
            return state;
    }
}

export default collectionReducer; 