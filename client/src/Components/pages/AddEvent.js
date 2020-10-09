import React, { Fragment, useState } from "react";

import { connect } from "react-redux";

import AdminNav from "../layouts/AdminNav";

import upload from "../../images/upload.png";

import { addEvent } from "../../action/event";
import moment from "moment";
import PopUp from "./PopUp";

const AddEvent = ({ addEvent }) => {
   const [formData, setFormData] = useState({
      title: "",
      description: "",
      date: new Date(),
      banner: null,
   });
   const [popUp, setPopUp] = useState(false);
   const { title, description, date, banner } = formData;
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const fileChange = (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = (e) => {
         setFormData({ ...formData, banner: reader.result });
      };
   };

   const onSubmit = (e) => {
      e.preventDefault();
      if (title && banner && description && date) {
         setPopUp(true);
      }
   };

   return (
      <Fragment>
         {!popUp && (
            <PopUp
               banner={banner}
               tittle={title}
               description={description}
               setPopUp={setPopUp}
            />
         )}
         <div className="admin ">
            <AdminNav addEvent={true} />
            <div className="admin-content pb-100">
               <form onSubmit={(e) => onSubmit(e)}>
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
                              name="title"
                              placeholder="Enter title"
                              onChange={(e) => onChange(e)}
                              value={title}
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
                              name="date"
                              value={moment(date).format("YYYY-MM-DD")}
                              disabled
                           />
                        </div>
                     </div>
                     <div className="form-group ">
                        <div className="form-item mb-20">
                           <label
                              className="f-500 fs-16 mb-10"
                              htmlFor="description"
                           >
                              Description
                           </label>
                           <textarea
                              className="wpx-450 p-10 border br-4 f-400 fs-16"
                              name="description"
                              id="description"
                              placeholder="Enter Designation"
                              onChange={(e) => onChange(e)}
                              value={description}
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
                              <h3 className="f-400 ml-10 fs-16">
                                 Upload image
                              </h3>
                           </label>
                           <input
                              className="wpx-450 p-10 br-4 f-400 fs-16"
                              type="file"
                              name="banner"
                              id="banner"
                              onChange={(e) => fileChange(e)}
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

export default connect(null, { addEvent })(AddEvent);
