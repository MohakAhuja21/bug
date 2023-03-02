import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import profileImg from "../User/Profile.png";
import { Button } from "@mui/material";
import { logout } from "../../actions/user";

function Profile() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="profile">
            <div>
              <img
                src={user?.photo || profileImg}
                onError={(event) => (event.target.src = profileImg)}
                alt="User Profile Image"
              />
            </div>
            <div>
              <div>
                <h4>Name</h4>
                <p>{user?.name}</p>
              </div>
              <div>
                <h4>User since</h4>
                <p>{String(user?.createdAt).split("T")[0]}</p>
              </div>
              <div>
                {user?.role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    style={{ textDecoration: "none", marginBottom: "20px" }}
                  >
                    <Button variant="outlined">dashboard</Button>
                  </Link>
                )}
                <br></br>
                <Button
                  style={{ backgroundColor: "#051B4C" }}
                  variant="contained"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Profile;
