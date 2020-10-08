import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import user from "../../images/user.png";
import add from "../../images/add.png";
import userActive from "../../images/userActive.png";
import addActive from "../../images/addActive.png";

const Admin = () => {
  const [activeHover, setActiveHover] = useState(false);
  return (
    <Fragment>
      <div className="admin">
        <div className="admin-nav">
          <div className="admin-nav-top">
            <h2 className="f-500 fs-22">Volunteer register list</h2>
          </div>
          <div className="admin-nav-left ">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
            <ul>
              <li className="f-400 fs-16 mt-49 active">
                <img src={userActive} alt="" className="mr-10" /> Volunteer
                register list
              </li>
              <li className="f-400 fs-16 mt-30">
                <Link
                  to="add-event"
                  onMouseEnter={() => setActiveHover(true)}
                  onMouseLeave={() => setActiveHover(false)}
                >
                  <img
                    src={activeHover ? addActive : add}
                    className="mr-10"
                    alt=""
                  />{" "}
                  Add event
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h1>Admin</h1>
      </div>
    </Fragment>
  );
};

export default Admin;
