import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import { connect } from "react-redux";

const Navbar = ({ auth: { isAuth, user } }) => {
  const [scrollPosition, setSrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setSrollPosition(window.pageYOffset)
    );
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`pt-2 p-fixed ${scrollPosition > 100 ? "stick-nav" : ""}`}
    >
      <div className="container">
        <nav className="py-20">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <div className="menu-container">
            <div
              className={`responsive ${toggle && "toggle"}`}
              onClick={() => setToggle(!toggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`responsive-desktop ${toggle && "responsive-toggle"}`}
            >
              <ul className="menu">
                <li className="ml-40 f-500">
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </li>
                <li className="ml-40 f-500">
                  <Link to="#" className="text-black">
                    Donation
                  </Link>
                </li>
                <li className="ml-40 f-500">
                  <Link to="/events" className="text-black">
                    Event
                  </Link>
                </li>
                <li className="ml-40 f-500">
                  <Link to="#" className="text-black">
                    Blog
                  </Link>
                </li>
                <li className="ml-40 f-500">
                  <Link to="/registration" className=" bg-3f90fc p-13 br-4">
                    Registration
                  </Link>
                </li>
                {isAuth && (
                  <li className="ml-20 f-500">
                    <Link
                      to="/admin"
                      className=" bg-434141 pt-13 pb-13 pl-30 pr-30 br-4"
                    >
                      {user && user.displayName}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapstatetoprops = (state) => ({
  auth: state.auth,
});
export default connect(mapstatetoprops, {})(Navbar);
