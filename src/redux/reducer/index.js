import { combineReducers } from "redux";
import { reducer, selectedProduct } from "./reducer";

const reducers = combineReducers({
  allProducts: reducer,
  product: selectedProduct,
});

export default reducers;
