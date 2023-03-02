import "./App.css";
import React from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products";
import { ProtectedRoute } from "protected-route-react";
import Profile from "./component/User/Profile.js";
import toast, { Toaster } from "react-hot-toast";
import Cart from "./component/cart/Cart";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import PaymentSuccess from "./component/cart/PaymentSuccess";
import Login from "./component/User/Login";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import Users from "./component/Admin/Users";
import Orders from "./component/Admin/Orders";
import NotFound from "./component/layout/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./actions/user";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);
  

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        {/* <Route exact path="/orders" element={<MyOrders />} /> */}
        {/* <Route path="/order/:id" element={<OrderDetails />}></Route> */}
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
        {/* <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route> */}
        {/* <Route exact path="/shipping" element={<Shipping />} /> */}
        {/* <Route exact path="/confirmorder" element={<ConfirmOrder />} /> */}
        <Route exact path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route exact path="/products" element={<Products />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />
         <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>
        {/* <Route exact path="/me" element={<Profile />} /> */}
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
