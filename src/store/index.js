import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
