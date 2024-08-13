"use client";
// components/Testimonal.js
import ClientCard from "./ClientCard";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Testimonal = () => {
  return (
    <section className="w3l-testimonials" id="testimonials">
      <div className="customers-6-content py-5">
        <div className="container py-lg-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">Client’s Speak</h3>
            <p className="my-3 head">
              Don’t just take our word for it, read below to see what our
              clients have to say about our approach and skills.
            </p>
          </div>
          {/* <div
            id="customerhnyCarousel"
            className="carousel slide"
            data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#customerhnyCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customerhnyCarousel" data-slide-to={1} />
            </ol> */}
          {/* Carousel items */}

          {/* <div className="carousel-inner pb-5">
              <div className="carousel-item active">
                <div className="customer row py-5 mt-3">
                  <div className="col-lg-4 col-md-6">
                    <ClientCard
                      img="styles/assets/images/men1.png"
                      Name="Veer Singh"
                      Profile="Cofounder"
                      review="We have been working with Dexterous for the last year, we are really happy with the support we get from Dexterous and the resources they provide."
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 off-testi-2">
                    <ClientCard
                      img="styles/assets/images/men4.png"
                      Name="Indy Batra"
                      Profile="Cofounder"
                      review="The best part of Dexterous is its dedicated team of experts. They pay the utmost attention to your requirements and deliver you a perfect solution."
                    />
                  </div>
                  <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                    <ClientCard
                      img="styles/assets/images/men5.png"
                      Name="Sham Prakash"
                      Profile="Cofounder"
                      review="I had a fantastic experience working with Dexterous. They are great experts in creating the most appealing websites for you. I got the perfect delivery of my projects."
                    />
                  </div>
                </div>
              </div>
            
              <div className="carousel-item">
                <div className="customer row py-5 mt-3">
                  <div className="col-lg-4 col-md-6">
                    <ClientCard
                      img="styles/assets/images/men3.png"
                      Name="Vikash Gupta"
                      Profile="Cofounder"
                      review="Very talented, very attentive, polite, communicative, integrated well with my team, an absolute expert, and a top-tier iOS developer."
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 off-testi-2">
                    <ClientCard
                      img="styles/assets/images/men2.png"
                      Name="Amir Lahav"
                      Profile="Cofounder"
                      review="Great time working with dexterous for my business needs. I will definitely be using Dexterous again. Great service, trustworthy, and effective."
                    />
                  </div>
                  <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                    <ClientCard
                      img="styles/assets/images/women1.png"
                      Name="Priya Gupta"
                      Profile="Cofounder"
                      review="I have worked with the Dexterous team many times and I will hire them again for all my next projects. All work done 100% and very talented team!"
                    />
                  </div>
                </div>
              </div>
            </div> */}

          {/*.carousel-inner*/}
          {/* </div> */}
        </div>
        <Swiper
          // slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, FreeMode]}
          className="mySwiper changemarginSwiper"
          breakpoints={{
            280: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              autoplay: true,
            },
            599: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            999: {
              slidesPerView: 3,
              autoplay: true,
              slidesPerGroup: 3,
            },
          }}
        >
          <SwiperSlide className="SwipeCard23">
            {" "}
            {/* <div className="col-lg-4 col-md-6"> */}
            <ClientCard
              img="styles/assets/images/men1.png"
              Name="Veer Singh"
              Profile="Cofounder"
              review="We have been working with Dexterous for the last year, we are really happy with the support we get from Dexterous and the resources they provide."
            />
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide className="SwipeCard23">
            {" "}
            <ClientCard
              img="styles/assets/images/men4.png"
              Name="Indy Batra"
              Profile="Cofounder"
              review="The best part of Dexterous is its dedicated team of experts. They pay the utmost attention to your requirements and deliver you a perfect solution."
            />
          </SwiperSlide>
          <SwiperSlide className="SwipeCard23">
            <ClientCard
              img="styles/assets/images/men5.png"
              Name="Sham Prakash"
              Profile="Cofounder"
              review="I had a fantastic experience working with Dexterous. They are great experts in creating the most appealing websites for you. I got the perfect delivery of my projects."
            />
          </SwiperSlide>
          <SwiperSlide className="SwipeCard23">
            <ClientCard
              img="styles/assets/images/men3.png"
              Name="Vikash Gupta"
              Profile="Cofounder"
              review="Very talented, very attentive, polite, communicative, integrated well with my team, an absolute expert, and a top-tier iOS developer."
            />
          </SwiperSlide>
          <SwiperSlide className="SwipeCard23">
            <ClientCard
              img="styles/assets/images/men2.png"
              Name="Amir Lahav"
              Profile="Cofounder"
              review="Great time working with dexterous for my business needs. I will definitely be using Dexterous again. Great service, trustworthy, and effective."
            />
          </SwiperSlide>
          <SwiperSlide className="SwipeCard23">
            <ClientCard
              img="styles/assets/images/women1.png"
              Name="Priya Gupta"
              Profile="Cofounder"
              review="I have worked with the Dexterous team many times and I will hire them again for all my next projects. All work done 100% and very talented team!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/*//customers */}
    </section>
  );
};

export default Testimonal;
