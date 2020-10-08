import React from "react";
import { Fragment } from "react";
import AdminNav from "../layouts/AdminNav";

import upload from "../../images/upload.png";

const AddEvent = () => {
  return (
    <Fragment>
      <div className="admin ">
        <AdminNav addEvent={true} />
        <div className="admin-content pb-100">
          <form action="" className="">
            <div className="form-container br-15 p-24">
              <div className="form-group">
                <div className="form-item mb-20">
                  <label htmlFor="title" className="f-500 fs-16 mb-10">
                    Event Title
                  </label>
                  <input
                    className="wpx-450 border p-10 br-4 f-400 fs-16"
                    type="text"
                    id="title"
                    placeholder="Enter title"
                  />
                </div>
                <div className="form-item mb-20 ml-49">
                  <label className="f-500  fs-16 mb-10" htmlFor="date">
                    Event Date
                  </label>
                  <input
                    className="wpx-450 p-10 border br-4 f-400 fs-16"
                    type="date"
                    id="date"
                  />
                </div>
              </div>
              <div className="form-group ">
                <div className="form-item mb-20">
                  <label className="f-500 fs-16 mb-10" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="wpx-450 p-10 border br-4 f-400 fs-16"
                    name="description"
                    id="description"
                    placeholder="Enter Designation"
                  />
                </div>
                <div className="form-item mb-20 ml-49">
                  <h3 className="f-500 fs-16 mb-10" htmlFor="banner">
                    Banner
                  </h3>
                  <label
                    htmlFor="banner"
                    className="banner br-5 border wpx-137 "
                  >
                    <img src={upload} alt="" />
                    <h3 className="f-400 ml-10 fs-16">Upload image</h3>
                  </label>
                  <input
                    className="wpx-450 p-10 br-4 f-400 fs-16"
                    type="file"
                    name="banner"
                    id="banner"
                  />
                </div>
              </div>
            </div>
            <div className=" fo-right mt-20">
              <input
                type="submit"
                value="Submit"
                className=" border-none p-12 pl-30 pr-30 text-center f-500 fs-16 br-5 bg-3f90fc"
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddEvent;
