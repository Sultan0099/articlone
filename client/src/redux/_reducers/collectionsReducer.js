import {
    SET_COLLECTION_TYPE,
    CREAT_COLLECTION_TYPE,
    SET_ACTIVE_COLLECTION_TYPE,
    UPLOAD_COLLECTION_IMG_TYPE,
    DELETE_COLLECTION_TYPE,
    UPDATE_COLLECTiON_TYPE
} from "../_actionTypes";

const initialState = {
    collections: [],
    active: null,
    error: {}
}
const filterCollectionWithId = (arr = [], collectionId) => arr.filter(item => item._id !== collectionId);
const updateCollectionWithId = (arr = [], collectionId, data) => arr.map(item => {
    if (item._id === collectionId) {
        item = { ...item, ...data };
        return item;
    }
    return item;
})
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
        case UPLOAD_COLLECTION_IMG_TYPE:
            return {
                ...state,
                collections: updateCollectionWithId(state.collections, action.payload._id, action.payload),
                active: { ...state.active, ...action.payload }
            };
        case DELETE_COLLECTION_TYPE:
            return {
                ...state,
                collections: filterCollectionWithId(state.collections, action.payload),
                active: null
            }
        case UPDATE_COLLECTiON_TYPE:
            console.log(action.payload)

            return {
                ...state,
                collections: updateCollectionWithId(state.collections, action.payload._id, action.payload),
                active: { ...state.active, ...action.payload }
            }
        default:
            return state;
    }
}

export default collectionReducer; 