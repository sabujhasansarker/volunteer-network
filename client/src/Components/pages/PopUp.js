import React from "react";
import moment from "moment";

import card from "../../images/card.png";

const PopUp = ({ banner, title, description, setPopup }) => {
   return (
      <div className="popup position-relative">
         <div className="popup-container middle">
            <img src={card} alt="" />
            <p className="title">
               <span className="f-500 mr-7 fs-18">Tittle :</span> title
            </p>
            <p className="my-10">
               <span className="f-500 mr-7 fs-18">Description :</span>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
               odio asperiores voluptatibus laudantium architecto saepe mollitia
               consectetur, delectus eligendi commodi perspiciatis, doloremque
               aliquid omnis a blanditiis quidem molestiae velit. Sit!
            </p>
            <p className=" fs-16 date">
               <span className="f-500 mr-7 fs-18">Created At : </span>
               {moment(new Date()).format("DD-MM-YY")}
            </p>
            <button className="br-5 p-15 f-500 fs-16 bg-3f90fc border-none wpx-100">
               Submit
            </button>
         </div>
      </div>
   );
};

export default PopUp;
