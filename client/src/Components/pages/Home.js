import React, { Fragment } from "react";
import Card from "./Card";
import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";

const Home = ({ events }) => {
   console.log(events);
   return (
      <Fragment>
         <Navbar />
         <div className="home">
            <div className="banner">
               <div className="banner-overlay">
                  <div className="container pt-173 pb-203">
                     <h1 className="text-center f-700 fs-34">
                        I grow by helping people in need.
                     </h1>
                     <form action="" className="form text-center mt-26">
                        <div className="form-group">
                           <div className="form-item">
                              <input
                                 type="text"
                                 className="p-15 w-33 fs-16 f-500"
                                 placeholder="Search...."
                              />
                              <input
                                 type="submit"
                                 className="p-15 w-10 fs-16 f-500 bg-3f90fc"
                                 value="Search"
                              />
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="card-container">
                  {events &&
                     events.map((event) => (
                        <Card key={event._id} event={event} />
                     ))}
               </div>
            </div>
         </div>
      </Fragment>
   );
};

const mapstatetoprops = (state) => ({
   events: state.event.events,
});

export default connect(mapstatetoprops, {})(Home);
