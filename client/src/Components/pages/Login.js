import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { googleLogin } from "../../action/auth";
// logo
import logo from "../../images/logo.png";
import google from "../../images/google.png";

const Login = ({ googleLogin, isAuth }) => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  if (isAuth) {
    history.replace(from);
  }
  return (
    <div className="py-50 login text-center">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="login-container w-40 p-relative p-20">
          <div className="login-content w-100 middle">
            <h1 className="heading">Login With</h1>
            <div
              onClick={() => googleLogin()}
              className="google flex w-85 p-5 mt-50 mb-30"
            >
              <img src={google} alt="Google" />
              <p className="text-center w-100 f-500">Continue with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { googleLogin })(Login);
