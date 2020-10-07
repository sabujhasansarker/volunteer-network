import React from "react";
import { Link } from "react-router-dom";

// logo
import logo from "../../images/logo.png";
import google from "../../images/google.png";

const Login = () => {
  return (
    <div className="py-50 login text-center">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="login-container w-40 p-relative p-20">
          <div className="login-content w-100 middle">
            <h1 className="heading">Login With</h1>
            <div className="google flex w-85 p-5 mt-50 mb-30">
              <img src={google} alt="Google" />
              <p className="text-center w-100 f-500">Continue with Google</p>
            </div>
            <p className="text-center">
              Don’t have an account?{" "}
              <Link to="/registration">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
