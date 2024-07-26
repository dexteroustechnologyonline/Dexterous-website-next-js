"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

// import "./styles.css";

import { Autoplay, FreeMode } from "swiper/modules";

const HomeSliderGeneral = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      freeMode={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode]}
      className="mySwiper"
      breakpoints={{
        250: {
          slidesPerView: 1,
          spaceBetween: 40,
          centeredSlides: true,
        },
        470: {
          slidesPerView: 1,
          spaceBetween: 15,
          centeredSlides: true,
        },
        580: {
          slidesPerView: 1,
          spaceBetween: 4,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 4,
          centeredSlides: true,
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
            src="/styles/assets/images/portfolio/dexterous/01.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/07.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"></div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/08.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            src="/styles/assets/images/portfolio/dexterous/06.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSliderGeneral;
