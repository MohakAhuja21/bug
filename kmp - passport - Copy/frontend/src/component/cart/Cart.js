import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
// import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ProductionQuantityLimitsTwoToneIcon from "@mui/icons-material/ProductionQuantityLimitsTwoTone";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const increaseQuantity = (id, quantity, stock) => {
    const newqty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newqty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newqty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newqty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

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

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <ProductionQuantityLimitsTwoToneIcon />
          <Typography>Looks like there is no item in your cart yet.</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>

            {cartItems &&
              cartItems.map((item, index) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${(
                    item.price * item.quantity
                  ).toFixed(2)}`}</p>
                </div>
              ))}

            <div className="cartGrossTotal">
              <div></div>
              <div className="cartGrossTotalBox">
                <p>
                  Discount
                  <b className="cartGrossTotal__discount">
                    {discountAmount > 0 && `- ₹${discountAmount}`}
                  </b>
                </p>
                <hr />
                Gross Total:
                <p>{`₹${cartGrossTotal.toFixed(2)}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Order Now</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
