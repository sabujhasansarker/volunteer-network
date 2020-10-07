import React from "react";
import { Link } from "react-router-dom";

// logo
import logo from "../../images/logo.png";

const Registration = () => {
  return (
    <div className="py-50 login text-center">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="login-container w-40 p-relative p-36">
          <div className="login-content w-100 ">
            <h1 className="heading text-left f-700 fs-24">
              Register as a Volunteer
            </h1>
            <form className="form text-left">
              <div className="form-group mt-40">
                <div className="form-item">
                  <input
                    className="w-100 py-10 f-500 fs-16 border-bottom"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="form-group mt-40">
                <div className="form-item">
                  <input
                    className="w-100 py-10 f-500 fs-16 border-bottom"
                    type="email"
                    name="email"
                    placeholder="Username or Email"
                  />
                </div>
              </div>
              <div className="form-group mt-40">
                <div className="form-item">
                  <input
                    className="w-100 py-10 f-500 fs-16 border-bottom"
                    type="date"
                    name="date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="form-group mt-40">
                <div className="form-item">
                  <input
                    className="w-100 py-10 f-500 fs-16 border-bottom"
                    type="text"
                    name="fullName"
                    placeholder="Desicription"
                  />
                </div>
              </div>
              <div className="form-group mt-40">
                <div className="form-item">
                  <input
                    className="w-100 py-10 f-500 fs-16 border-bottom"
                    type="text"
                    name="fullName"
                    placeholder="Organize books at the library."
                  />
                </div>
              </div>
              <div className="form-group mt-40">
                <div className="form-item">
                  <input
                    type="submit"
                    className="button d-block w-100 text-center p-12 f-500 fs-16 border-none bg-3f90fc"
                    value="Registration"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
