import React from "react";
import { Fragment } from "react";
import deleteImage from "../../images/delete.png";
import AdminNav from "../layouts/AdminNav";

const AddEvent = () => {
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Fragment>
      <div className="admin">
        <AdminNav addEvent={true} />
        <div className="admin-content pb-50">
          <div className="add-event"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddEvent;
