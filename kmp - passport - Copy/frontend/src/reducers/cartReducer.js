import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO, EMPTY_CART } from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const cartItems = state.cartItems;
      const isItemExist = cartItems.find((i) => i.product === item.product);
      return {
        ...state,
        cartItems: isItemExist
          ? cartItems.map((i) => (i.product === isItemExist.product ? item : i))
          : [...cartItems, item],
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: {
          address: action.payload.address,
          location: action.payload.location,
          phoneNo: action.payload.phoneNo,
        },
      };

      case EMPTY_CART:
        return { cartItems: [], shippingInfo: {} };
      default:
        return state;
  }
};
