import React, { Fragment } from "react";

import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";

import moment from "moment";

const Events = ({ volunteer }) => {
   console.log(volunteer);
   return (
      <Fragment>
         <Navbar />
         <div className="event py-30 pt-150">
            <div className="container">
               <div className="event-container">
                  {volunteer &&
                     volunteer.map((event, i) => (
                        <div className="event-single p-24 br-10" key={i}>
                           <img src={event.banner} alt={event.title} />
                           <div className="event-content w-100 ml-23 p-relative">
                              <h2 className="f-900 fs-24 ">{event.title}</h2>
                              <p className="f-500 mt-10">
                                 {moment(event.date).format("ll")}
                              </p>
                              <p className="pt-13 pb-13 pl-41 pr-41 text-center br-5 bg-e3e3e3 cursor-pointer wpx-131  p-absolute bpx-0 rpx-0 ">
                                 Cancel
                              </p>
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </Fragment>
   );
};

const mapstatetoprops = (state) => ({
   volunteer: state.volunteer.volunteer,
});

export default connect(mapstatetoprops, {})(Events);
