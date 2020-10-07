import React from "react";
import Card from "./Card";

const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
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
          {cards.map((c, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
