import { combineReducers } from "redux";
import { reducer } from "./reducer";

const reducers = combineReducers({
  allProducts: reducer,
});

export default reducers;
