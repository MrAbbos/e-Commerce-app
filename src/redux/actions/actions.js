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

export function addToCart(
  productId,
  title,
  selectedOption,
  quantity,
  price,
  image,
  category
) {
  return {
    type: actionTypes.ADDTOCART,
    payload: {
      id: productId,
      title,
      type: selectedOption,
      quantity,
      price,
      image,
      category,
    },
  };
}

export function updateCart(...payload) {
  return {
    type: actionTypes.UPDATE_CART,
    payload,
  };
}
