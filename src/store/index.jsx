import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
