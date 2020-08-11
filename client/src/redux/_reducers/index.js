import { combineReducers } from "redux";

import testReducer from "./testReducer";
import authReducer from "./authReducer";
import collectionReducer from "./collectionsReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer,
    collections: collectionReducer,
    posts: postsReducer
});

export default rootReducer;