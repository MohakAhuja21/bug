import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ isAuthenticated = false }) {
  const { cartItems } = useSelector((state) => state.cart);

  // mobile navbar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <Link style={{ textDecoration: "none" }} to="/">
        <img className="header__logo" src="https://res.cloudinary.com/db4oba9mb/image/upload/v1676805963/website%20assets%20kmp/logo_white_ucaayf.png" alt="Kamal Medicos Pharma" />
      </Link>
      {/* adding mobile navbar functionality to header nav */}
      <div className={`header__nav ${isOpen && "open"}`}>
        {/* option 1-> sign in */}
        <Link style={{ textDecoration: "none" }} to="/products">
          <div className="header__option">
            <span
              className="header__optionLineOne"
              style={{ textTransform: "none" }}
            >
              Shop all
            </span>
            <span className="header__optionLineTwo">Products</span>
          </div>
        </Link>
        {/* option 2 -> user profile/login/signup */}
        <Link style={{ textDecoration: "none" }} to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? (
            <div className="header__option header_optionAccount">
              <span className="header__optionLineOne header_optionLineOneIcon">
                <AccountCircleIcon />
              </span>
              <span className="header__optionLineTwo header__optionLineTwoText">your profile</span>
            </div>
          ) : (
            <div className="header__option">
              <span className="header__optionLineOne">hello guest</span>
              <span className="header__optionLineTwo">Login</span>
            </div>
          )}
        </Link>
        {/* option 3-> order history */}
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">returns &</span>
            <span className="header__optionLineTwo">Order</span>
          </div>
        </Link>

        {/* option 5-> Cart/basket */}
        <Link style={{ textDecoration: "none" }} to="/cart">
          <div className="header_optionCart">
            <ShoppingBasketRoundedIcon style={{ fontSize: "26px" }} />
            <span className="header_optionLineTwo header_CartCount">
            {cartItems.length === 0 ? '' : <span className="flexCenter">{cartItems.length}</span>}
            </span>
          </div>
        </Link>
      </div>

      {/* // mobile navbar */}
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>

      <Link style={{ textDecoration: "none" }} to="/cart">
        <div className="header_optionCartMobile">
          <ShoppingBasketRoundedIcon style={{ fontSize: "28px" }} />
          <span className="header_optionLineTwo header_CartCount">
          {cartItems.length === 0 ? '' : <span className="flexCenter">{cartItems.length}</span>}
          </span>
        </div>
      </Link>
    </div>
  );
}

const header = document.querySelector('.header');

export default Header;
