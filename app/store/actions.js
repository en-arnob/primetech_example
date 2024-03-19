export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
export const CLEAR_SELECTED_PRODUCT = "CLEAR_SELECTED_PRODUCT";

export const setSelectedProduct = (product) => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});

export const clearSelectedProduct = () => ({
  type: CLEAR_SELECTED_PRODUCT,
});
