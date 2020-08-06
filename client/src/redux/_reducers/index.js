import { combineReducers } from "redux";

import testReducer from "./testReducer";
import authReducer from "./authReducer";
import collectionReducer from "./collectionsReducer";

const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer,
    collections: collectionReducer
});

export default rootReducer;