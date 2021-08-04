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
