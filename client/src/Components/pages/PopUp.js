import React from "react";
import moment from "moment";

import card from "../../images/card.png";

const PopUp = ({ banner, title, description, onClick }) => {
   return (
      <div className="popup position-relative">
         <div className="popup-container middle">
            <img src={banner} alt="" />
            <p className="title">
               <span className="f-500 mr-7 fs-18">Tittle :</span> {title}
            </p>
            <p className="my-10">
               <span className="f-500 mr-7 fs-18">Description :</span>
               {description}
            </p>
            <p className=" fs-16 date">
               <span className="f-500 mr-7 fs-18">Created At : </span>
               {moment(new Date()).format("DD-MM-YY")}
            </p>
            <div className="flex">
               <button
                  onClick={onClick}
                  className="br-5 p-15 f-500 fs-16 bg-3f90fc border-none wpx-100"
               >
                  Submit
               </button>
               <button
                  onClick={onClick}
                  className="br-5 p-15 f-500 ml-20 fs-16 bg-ff444a border-none wpx-100"
               >
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
};

export default PopUp;
