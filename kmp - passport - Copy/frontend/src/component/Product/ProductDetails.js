import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";

import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";

import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";
import { toast } from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) {
      toast.error(
        `We currently have ${product.Stock} in stock.\n If you want more, please wait. Sorry for the inconvenience !`
      );
      return;
    }

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item Added to Cart");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Products/${product.name}`} />
          <div className="ProductDetails">
            <Carousel className="productDetails_img_con">
              {/* {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))} */}
              {product.images &&
                product.images.map((item, i) => (
                  <LazyLoad once key={i}>
                    <img
                      className="CarouselImage"
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  </LazyLoad>
                ))}
            </Carousel>
            <div className="productDetails_con">
              <div className="detailsBlock-1">
                <h2 style={{ marginTop: "15px" }}>{product.name}</h2>
                <p>Product # {product._id}</p>

                <p
                  className={
                    product.manufacturer == null
                      ? "productInfo_notAvailable"
                      : "productInfo_available"
                  }
                >
                  <b>Manufacturer</b>&nbsp;:{" "}
                  {product.manufacturer == null ? "" : product.manufacturer}
                </p>

                <p
                  className={
                    product.salt_composition == null
                      ? "productInfo_notAvailable"
                      : "productInfo_available"
                  }
                >
                  <b>Composition</b>&nbsp;:{" "}
                  {product.salt_composition == null
                    ? ""
                    : product.salt_composition}
                </p>

                <p
                  className={
                    product.packaging == null
                      ? "productInfo_notAvailable"
                      : "productInfo_available"
                  }
                >
                  <b>Packaging</b>&nbsp;:{" "}
                  {product.packaging == null ? "" : product.packaging}
                </p>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type="number" value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    className="addToCart_btn"
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  {/* added css in app.css for this. */}
                  <b
                    style={{ marginLeft: "6px", fontSize: "18px" }}
                    className={product.Stock < 1 ? "redColor" : "greenColor"}
                  >
                    {product.Stock < 1 ? "Temporarily OutOf Stock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                <b
                  style={{
                    borderBottom: "2px solid #FFBF00",
                    fontSize: "21px",
                  }}
                >
                  Description
                </b>{" "}
                :{" "}
                <p style={{ marginTop: "8px", fontSize: "19px" }}>
                  {product.description}
                </p>
              </div>

              <div className="detailsBlock-5" style={{ marginTop: "15px" }}>
                <b
                  className={
                    product.common_side_effect == null
                      ? "productInfo_notAvailable"
                      : "productInfo_available"
                  }
                  style={{
                    borderBottom: "2px solid #FFBF00",
                    fontSize: "20px",
                  }}
                >
                  Common Side Effect :
                </b>
                <br></br>
                <p
                  className={
                    product.common_side_effect == null
                      ? "productInfo_notAvailable"
                      : "productInfo_available"
                  }
                  style={{ marginTop: "8px", fontSize: "18px" }}
                >
                  {product.common_side_effect == null
                    ? "N/A"
                    : product.common_side_effect}
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductDetails;
