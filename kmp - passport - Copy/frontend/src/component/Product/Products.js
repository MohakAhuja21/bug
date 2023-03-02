import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import Search from "./Search";
import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Rating,
} from "@mui/material";

const categories = [
  "himalaya wellness",
  "dabur india",
  "Johnson"
];

function Products({ match }) {
  const dispatch = useDispatch();
  // const alert = useAlert();
  // from productAction.js //for search box functionality.
  const { keyword } = useParams();
  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  // modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 335,
    bgcolor: "whitesmoke",
    border: "none",
    borderRadius: "5px",
    boxShadow: 24,
    p: 3.5,
    outline: "none",
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    // using in productAction also ->keyword(for displaying search results).
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  let count = filteredProductsCount;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Products" />
          <h2 className="productsHeading">Products</h2>

          {/* modal */}
          <div className="product__modal">
            <Button
              style={{ backgroundColor: "whitesmoke", padding: "8px" }}
              onClick={handleOpen}
            >
              Apply filter
            </Button>
            <Modal
              closeAfterTransition
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {/* all filter section goes here. */}
                <div className="filterBox">
                  <Typography
                    style={{
                      marginBottom: "5px",
                      textAlign: "center",
                      fontSize: "large",
                    }}
                  >
                    Price                   
                  </Typography>
                  <Slider
                    style={{ color: "#051B4C", width: "fitContent" }}
                    value={price}
                    onChange={priceHandler}
                    // change below from on to auto. If we don't want to show the price in filter always.
                    valueLabelDisplay="on"
                    size="small"
                    getAriaLabel={() => "Temperature range"}
                    min={0}
                    max={5000}
                  />

                  <FormControl
                    variant="filled"
                    fullWidth
                    style={{ marginTop: "10px" }}
                  >
                    <InputLabel
                      id="category-items-label"
                      style={{ fontSize: "large" }}
                    >
                      Categories
                    </InputLabel>
                    <Select style={{ overflowY: "auto", overflowX: "hidden" }}>
                      {categories.map((cat) => (
                        <MenuItem key={cat} onClick={() => setCategory(cat)}>
                          {cat}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <fieldset>
                    <Typography
                      style={{ fontSize: "large" }}
                      component="legend"
                    >
                      Ratings Above
                    </Typography>
                    <Rating
                      style={{ color: "#FFBF00" }}
                      name="simple-controlled"
                      value={ratings}
                      onChange={(e, newRating) => {
                        setRatings(newRating);
                      }}
                      min={0}
                      max={5}
                    />
                  </fieldset>
                </div>
              </Box>
            </Modal>
          </div>

          {/* search box component */}
          <Search />

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {/* made some changes for pagination in backend>productController.js and productReducer.js(frontend) */}
          {/* matlab agar page par sare prodcust display ho rahe hai toh neeche pagination nahi show karega. */}
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Products;
