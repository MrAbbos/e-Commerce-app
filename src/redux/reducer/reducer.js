import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProduct = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
