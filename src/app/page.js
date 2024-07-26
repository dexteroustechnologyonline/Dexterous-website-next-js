import React from "react";
import "../../public/styles/assets/css/style-starter.css";
import Link from "next/link";
import HomeAbout from "../components/Home/about";
import MainSlider from "@/components/Home/MainSlider";
import Services from "../components/Home/Services";
import Indexe from "../components/Home/Indexe";
import OpenBlog from "../components/Home/OpenBlog";
import HomeSliderPortfolioApp from "../components/Home/HomeSliderPortfolioApp";
import HomeSlidePortfolio from "../components/Home/HomeSlidePortfolio";
import HomeSlidePortfolioEducational from "@/components/Home/HomeSlidePortfolioEducational";
import Testimonal from "../components/Home/Testimonal";
import Services2 from "../components/Home/Services2";
import Team from "../components/Home/Team";
import News from "../components/Home/News";

const page = () => {
  return (
    <>
      <MainSlider />
      <HomeAbout />
      <Services />
      <OpenBlog />
      <Indexe />
      <HomeSliderPortfolioApp />
      <HomeSlidePortfolio />
      <HomeSlidePortfolioEducational />
      <Testimonal />
      <Services2 />
      <Team />
      <News />
    </>
  );
};

export default page;
