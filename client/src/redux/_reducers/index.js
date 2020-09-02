import { combineReducers } from "redux";

import testReducer from "./testReducer";
import authReducer from "./authReducer";
import collectionReducer from "./collectionsReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer,
    collections: collectionReducer,
    posts: postsReducer,
    profile: profileReducer,
});

export default rootReducer;