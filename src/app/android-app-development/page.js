
import React from "react";
import Breadcrum from "@/components/breadCrum";
// import PortCard from "../../components/portfolio/PortCard";

// import MetaData from "../../layout/MetaData";

export const metadata = {
  title:
    "Android App Development in Hyderabad | Android App Development Company in Hyderabad- Dexterous Technology",
  description:
    "Dexterous Technology is a premier Android app development company in Hyderabad, providing cutting-edge solutions for businesses. Reach out to us for expert services.",
  keywords:
    "Android App Development in Hyderabad, Android App Development Company in Hyderabad",
};
const MobileApps = () => {
  return (
    <>
      {/* <MetaData title="Our Latest work" /> */}
      <Breadcrum title="Portfolio" cls="about" />

      <div className="container-fluid mt-5 mb-5">
        <div className="container">
          <h3 className="headingmain mb-5">Mobile Apps</h3>
          <div className="row m-auto">
            <div className="col m-auto p-0">
              <div className="row mt-3">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    image="assets/images/salesbeez.jpg"
                    app="https://play.google.com/store/search?q=salesbeez&c=apps"
                    web="https://play.google.com/store/search?q=salesbeez&c=apps"
                    className="sri"
                    title="Salesbeez"
                    description="Salesbeez is one of the best online shopping stores in India. Buy grocery and food ."
                  /> */}
                  <img
                    src="/styles/assets/images/project1.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    className="images"
                    image="assets/images/kiranaworld.jpg"
                    app="https://play.google.com/store/apps/details?id=kalyan.example.KiranaWorld"
                    web="https://www.kiranaworld.in/online-grocery-in-jamshedpur"
                    title="Kiranaworld"
                    description="kiranaworld.in (a Unit of Shanti Retails) is Jamshedpur’s online food and grocery store. With over 5,000 products and over 500 brands."
                  /> */}
                  <img
                    src="/styles/assets/images/project2.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    image="assets/images/ewshopping.jpg"
                    app="https://play.google.com/store/apps/details?id=com.EwShopping.EwShopping"
                    web="https://www.ewshopping.com/"
                    title="EW Shopping"
                    description="EwShopping is one of the best online shopping stores in India. Buy mobiles, laptops, books, watches, apparel, shoes, and e-Gift Cards."
                  /> */}
                  <img
                    src="/styles/assets/images/project3.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    image="assets/images/oyebusy.jpg"
                    app="https://play.google.com/store/apps/details?id=com.oyebusy.oyebusy_customer"
                    web="https://play.google.com/store/apps/details?id=com.oyebusy.oyebusy_customer"
                    className="sri"
                    title="OyeBusy"
                    description="OyeBusy is India's most usable online platform for providing top-notch home services."
                  /> */}
                  <img
                    src="/styles/assets/images/project4.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    image="assets/images/tgpay.jpg"
                    app="https://play.google.com/store/apps/details?id=in.tgpay.in"
                    web="https://play.google.com/store/apps/details?id=in.tgpay.in"
                    className="sri"
                    title="Tg Pay"
                    description="This is the best application Payment app allow them to connect and load an e-wallet with money from their bank or credit card."
                  /> */}
                  <img
                    src="/styles/assets/images/project5.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    image="assets/images/oyeorder.jpg"
                    app="https://play.google.com/store/apps/details?id=com.onisol.oyeorder"
                    web="https://play.google.com/store/apps/details?id=com.onisol.oyeorder"
                    title="OyeOrder"
                    description="OyeOrder is an online Food Delivery Company in Gwalior. Oye Order provide order food online from Restaurant, Bakery shop, Sweets shop and Namkeens shop."
                  /> */}
                  <img
                    src="/styles/assets/images/project6.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  {/* <BlogCard
                    image="assets/images/portfolio/25.png"
                    app="https://play.google.com/store/apps/details?id=com.kipp.app"
                    web="https://play.google.com/store/apps/details?id=com.kipp.app"
                    title="Kippee"
                    description="Buy or sell Second Hand Cars & Bikes easily and securely with KIPPEE, India largest online local marketplace."
                  /> */}
                  <img
                    src="/styles/assets/images/project7.webp"
                    className="card-img-top"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApps;
