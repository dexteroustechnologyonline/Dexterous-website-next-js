"use client";

// import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const MainSlider = () => {
  return (
    <>
      <section className="w3l-main-slider" id="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <li>
                <div
                  className="slider-info banner-view banner-top2 bg bg2"
                  data-selector=".bg.bg2"
                >
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mx-auto text-center">
                        {/* <h5>Mobile app development company</h5> */}
                        <h5>Best Mobile App Development Company</h5>
                        <Link
                          className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                          href="/services"
                        >
                          Read More
                        </Link>
                        <div className="scroll-button">
                          <Link href="#about" className="scroll">
                            <div className="icon-scroll">
                              <div className="mouse">
                                <div className="wheel" />
                              </div>
                              <div className="icon-arrows">
                                <span />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <li>
                <div
                  className="slider-info banner-view bg bg2"
                  data-selector=".bg.bg2"
                >
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mx-auto text-center">
                        <h5>
                          {/* 6x Faster And 70% Cheaper Simple & Fast App
                          Development */}
                          Dexterous Technology is the Best Mobile App
                          Development Company
                        </h5>
                        <Link
                          className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                          href="/services"
                        >
                          Read More
                        </Link>
                        <div className="scroll-button">
                          <Link href="#about" className="scroll">
                            <div className="icon-scroll">
                              <div className="mouse">
                                <div className="wheel" />
                              </div>
                              <div className="icon-arrows">
                                <span />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <li>
                <div
                  className="slider-info  banner-view banner-top1 bg bg2"
                  data-selector=".bg.bg2"
                >
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mx-auto text-center">
                        <h5>
                          Find skilled talents faster for your app development
                        </h5>
                        <Link
                          className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                          href="/services"
                        >
                          Read More
                        </Link>
                        <div className="scroll-button">
                          <Link href="#about" className="scroll">
                            <div className="icon-scroll">
                              <div className="mouse">
                                <div className="wheel" />
                              </div>
                              <div className="icon-arrows">
                                <span />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <li>
                <div
                  className="slider-info banner-view banner-top3 bg bg2"
                  data-selector=".bg.bg2"
                >
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mx-auto text-center">
                        <h5>Mobile App Development Services </h5>
                        <Link
                          className="btn btn-secondary btn-theme2 mt-md-5 mt-4"
                          href="/services"
                        >
                          Read More
                        </Link>
                        <div className="scroll-button">
                          <Link href="#about" className="scroll">
                            <div className="icon-scroll">
                              <div className="mouse">
                                <div className="wheel" />
                              </div>
                              <div className="icon-arrows">
                                <span />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MainSlider;
