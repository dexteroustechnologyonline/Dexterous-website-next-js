import React from "react";
import HomeSliderGeneral from "./HomeSliderGeneral";

const HomeSlidePortfolioGeneral = () => {
  return (
    <>
      <div className="bg">
        <h1
          className=" text-center mt-lg-5 text-white"
          style={{ marginBottom: "38px", fontFamily: "Poppins, sans-serif" }}
        >
          General Website Development
        </h1>
        <div className="container-fluid">
          <div className="container">
            <div className="row m-auto">
              <div className="col m-auto p-0">
                <HomeSliderGeneral />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlidePortfolioGeneral;
