import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { saveShippingInfo } from "../../actions/cartAction";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(saveShippingInfo({ address, location, phoneNo }));

    navigate("/confirmorder");
  };

  return (
    <Fragment>
      <MetaData title="Shipping Details" />

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <div>
              <AddLocationAltOutlinedIcon />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Location</option>
                <option value="West Patel Nagar">West Patel Nagar</option>
                <option value="East Patel Nagar">East Patel Nagar</option>
              </select>
            </div>

            <div>
              <AddHomeOutlinedIcon />
              <input
                type="text"
                placeholder="House Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                size="30"
              />
            </div>

            <div>
              <LocalPhoneOutlinedIcon />
              <input
                type="tel"
                placeholder="Contact Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <input type="submit" value="Continue" className="shippingBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
