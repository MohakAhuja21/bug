import axios from "axios";
import { server } from "../store";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${server}/product/${id}`);
    const { product } = data;

    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
        stock: product.stock,
        quantity,
      },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log(error);
  }
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log(error);
  }
};

// Save Shipping Info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

export const emptyCart = () => async (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });

  localStorage.removeItem("cartItems");
};