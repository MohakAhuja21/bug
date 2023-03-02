import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { server } from "../../store";
import "./Login.css";
import medicineBanner from "./medicines.webp";

const Login = () => {
  const loginHandler = () => {
    window.open(`${server}/googlelogin`, "_self");
  };
  return (
    <div>
      <h2>Login</h2>
      <p>To quickly find your saved address, prescriptions and much more.</p>
      <ul></ul>
      <img src={medicineBanner}></img>
      <GoogleLoginButton
        onClick={loginHandler}
        style={{ width: "350px", height: "60px" }}
      />
      <p>
        By continuing, you agree that you have read and accepted our
        <br></br>
        <b>T&C</b> and <b>privacy policies</b>
      </p>
    </div>
  );
};


export default Login;
