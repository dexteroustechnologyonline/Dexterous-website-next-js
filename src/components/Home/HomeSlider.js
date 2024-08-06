"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={60}
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode]}
      className="mySwiper"
      breakpoints={{
        250: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        470: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        580: {
          slidesPerView: 1,
          spaceBetween: 4,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 4,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
      }}
    >
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/03.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-text text-center"> Educational Website</h5> */}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/02.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-text text-center"> Tea Moment Website </h5> */}
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/05.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-text text-center">Real Estate Website</h5> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/04.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-text text-center">Brides Website</h5> */}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
