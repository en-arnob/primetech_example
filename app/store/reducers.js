const initialState = {
  cart: [],
  cartItemCount: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartItemCount: state.cartItemCount + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
