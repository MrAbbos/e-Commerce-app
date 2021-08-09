import { actionTypes } from "../actionTypes/actionTypes";

export function setProducts(product) {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: product,
  };
}

export function selectedProduct(product) {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
}
