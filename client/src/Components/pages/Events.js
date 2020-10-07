import React from "react";

import event from "../../images/event.png";

const Events = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="event py-30">
      <div className="container">
        <div className="event-container">
          {arr.map((a, i) => (
            <div className="event-single p-24 br-10" key={i}>
              <img src={event} alt="" />
              <div className="event-content w-100 ml-23 p-relative">
                <h2 className="f-900 fs-24 ">Humanity More</h2>
                <p className="f-500 mt-10">29 sep, 2020</p>
                <p className="pt-13 pb-13 pl-41 pr-41 text-center br-5 bg-e3e3e3 cursor-pointer wpx-131  p-absolute bpx-0 rpx-0 ">
                  Cancel
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
