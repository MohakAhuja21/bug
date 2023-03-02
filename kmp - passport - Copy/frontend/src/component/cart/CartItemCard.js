import React from "react";
import { Link } from "react-router-dom";
import "./CartItemCard.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="Product_Image" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <p onClick={() => deleteCartItems(item.product)}>remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;