import { SET_SELECTED_PRODUCT, CLEAR_SELECTED_PRODUCT } from "./actions";

const initialState = {
  cart: [],
  cartItemCount: 0,
  selectedProduct: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartItemCount: state.cartItemCount + 1,
      };
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case CLEAR_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
