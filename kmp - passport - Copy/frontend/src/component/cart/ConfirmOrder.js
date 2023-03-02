import React, { Fragment } from "react";
import "./ConfirmOrder.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../../store";
import axios from "axios";
import { createOrder } from "../../actions/order";
import MetaData from "../layout/MetaData";
import toast from "react-hot-toast";
import { emptyCart } from "../../actions/cartAction";


const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const { message, error } = useSelector((state) => state.order);


  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
  
    const calculateDiscount = (price) => {
      let discount = 0;
      if (price >= 0 && price <= 200) {
        discount = 5;
      } else if (price > 200 && price <= 500) {
        discount = Math.min(10, Math.floor(price / 50) * 5);
      } else {
        discount = 15;
      }
      return discount;
    };
    
    const grossTotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    
    const discountAmount = calculateDiscount(grossTotal);
    
    const cartGrossTotal = grossTotal - (grossTotal * (discountAmount / 100));  
  
    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo, 
          cartItems,
          paymentMethod,
          cartGrossTotal
        )
      );
    }
  }

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch(emptyCart());
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <Fragment>
    <MetaData title="orderConfirmation" />
  <div className="confirmOrder">
    <h2>confirm order</h2>
    <form onSubmit={submitHandler}>
        <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("COD")}
              required
            />
        </div>
        <div>
            <label>Pay Online</label>
            <input
              type="radio"
              required
              name="payment"
              onChange={() => setPaymentMethod("Online")}
            />
        </div>


        <button disabled={disableBtn} type="submit">
            Place Order
          </button>
    </form>
  </div>
  </Fragment>
  )
};

export default ConfirmOrder;
