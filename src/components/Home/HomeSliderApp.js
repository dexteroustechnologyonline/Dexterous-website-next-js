"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";

const HomeSliderApp = () => {
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
          centeredSlides: true,
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
            // src="/styles/assets/images/design1.jpg"
            src="/styles/assets/images/project1.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/graphics.png"
            src="/styles/assets/images/project2.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/portfolio/dexterous/app6.png"
            // src="/styles/assets/images/design2.jpg"
            src="/styles/assets/images/project3.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/portfolio/dexterous/app8.jpg"
            // src="/styles/assets/images/design3.jpg"
            src="/styles/assets/images/project4.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/portfolio/dexterous/app1.png"
            // src="/styles/assets/images/design4.jpg"
            src="/styles/assets/images/project5.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/portfolio/dexterous/app3.png"
            // src="/styles/assets/images/design5.jpg"
            src="/styles/assets/images/project6.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/portfolio/dexterous/app7.png"
            // src="/styles/assets/images/design6.jpg"
            src="/styles/assets/images/project7.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card" style={{ width: "22rem" }}>
          <img
            // src="/styles/assets/images/portfolio/dexterous/app2.jpg"
            // src="/styles/assets/images/design7.jpg"
            src="/styles/assets/images/project8.webp"
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSliderApp;
