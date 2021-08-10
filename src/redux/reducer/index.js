import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  addToCartReducer,
} from "./reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: addToCartReducer,
});

export default reducers;
