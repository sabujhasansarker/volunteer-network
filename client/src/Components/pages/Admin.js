import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import user from "../../images/user.png";
import add from "../../images/add.png";
import userActive from "../../images/userActive.png";
import addActive from "../../images/addActive.png";
import deleteImage from "../../images/delete.png";

const Admin = () => {
  const [activeHover, setActiveHover] = useState(false);
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
        <div className="admin-content">
          <table className="br-13 w-100 p-10 pb-50">
            <thead>
              <tr className="br-13 pt-18 pb-18 pl-33 pr-33">
                <th>Name</th>
                <th>Email ID</th>
                <th>Registating date</th>
                <th>Volunteer list</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {table.map((t, i) => (
                <tr key={i} className=" pt-21  pl-33 pr-33">
                  <td>Sufi Ahmed Hamim</td>
                  <td>sufi@gmail.com</td>
                  <td>22-10-2020</td>
                  <td>Organize books at the library.</td>
                  <td className="bg-ff444a br-4 wpx-30 cursor-pointer">
                    <img src={deleteImage} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
