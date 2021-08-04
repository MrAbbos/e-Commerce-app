import { actionTypes } from "../actionTypes/actionTypes";

export const setProducts = (product) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: {
      product,
    },
  };
};
