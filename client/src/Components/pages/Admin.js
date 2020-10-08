import React from "react";
import { Fragment } from "react";
import deleteImage from "../../images/delete.png";
import AdminNav from "../layouts/AdminNav";

const Admin = () => {
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Fragment>
      <div className="admin">
        <AdminNav />
        <div className="admin-content pb-50">
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
