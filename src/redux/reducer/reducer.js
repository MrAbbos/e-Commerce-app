import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

export function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
}

export function selectedProductReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
}
