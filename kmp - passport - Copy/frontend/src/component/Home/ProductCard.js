import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    // whenever someone clicks on single product. It will fetch the data from id.
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} loading="lazy" alt={product.name + " image"} />
      <p>{product.name}</p>
      <p style={{fontSize:"14px"}} 
        className={
          product.packaging == null
            ? "productInfo_notAvailable"
            : "productInfo_available"
        }
      >
        <b style={{color:"#051B4C"}}>Packaging</b> :&nbsp; 
        {product.packaging == null ? "" : product.packaging}
      </p>
      <div className="productCard__price">
        <small>₹{Math.ceil(product.price + 12)}</small>
        <span>{`₹${product.price}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
