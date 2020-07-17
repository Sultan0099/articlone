import { combineReducers } from "redux";

import testReducer from "./testReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    test: testReducer,
    auth: authReducer
});

export default rootReducer;