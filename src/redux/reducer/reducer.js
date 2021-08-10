import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

const initialStateForCart={
  cart: [{ id: 1, quantity: 2, type: "small" }],
}

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

export function addToCartReducer(state = initialStateForCart, { type, payload }) {
  switch (type) {
    case actionTypes.ADDTOCART:
      return { ...state, cart: [...state.cart, payload] };
    // case actionTypes.UPDATE_CART:
    //   return{...state, cart:[...state.cart, id:payload.productId, quantity: payload.] }
    default:
      return state;
  }
}

