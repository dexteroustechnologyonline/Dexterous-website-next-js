import React from "react";
import Breadcrum from "../../components/breadCrum";
import Testimonal from "@/components/Home/Testimonal";
import Link from "next/link";

const MobileAppDevelopment = (props) => {
  return (
    <>
      {/* <MetaData title="Dexterous | Mobile app developmrnt company" /> */}
      <Breadcrum title="Mobile App Development" cls="about" id="aboutPage" />
      <section className="w3l-content-with-photo-4" id="about">
        <div id="content-with-photo4-block" className="py-5">
          <div className="container py-md-3">
            <div className="cwp4-two row">
              <div className="cwp4-image col-lg-6">
                <img
                  src="/styles/assets/images/Mobile App Development.webp"
                  className="img-fluid"
                  alt
                />
              </div>
              <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <h3 style={{ fontSize: "25px", lineHeight: "34px" }}>
                  Custom Mobile App Development Services Tailored to Your
                  Business Needs
                </h3>
                <p>
                  Our exceptional custom mobile app development services are
                  designed to assist organizations in discovering new prospects.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Clients can obtain premium mobile app development services
                  from Dexterous Technologies. With our Android Mobile App
                  development and iOS app development services, we thrive in
                  delivering excellent user experiences.{" "}
                </p>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  Dexterous Technologies, one of the best mobile app development
                  firms, offers innovative, dependable, and secure mobile
                  solutions. Get mobile app development services from
                  professionals who understand the newest trends and strategies
                  in the industry. Our licensed app developers.{" "}
                </p>
              </div>
              <div className="container">
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  Have created a wide range of scalable and secure mobile apps
                  for our specialized and international clientele. With over 13+
                  years of extensive expertise, we are the top mobile app
                  development business, and our in-house iOS app developers are
                  skilled at producing top-notch mobile applications.
                </p>
                <p className="mt-lg-4" style={{ textAlign: "justify" }}>
                  Our Android app developers in India and the USA work with us
                  to create robust, scalable Android solutions. Our extensive
                  experience in creating RIA applications complements our
                  proficiency in JavaScript development. We also offer SaaS
                  development and assist you in creating intuitive, clever
                  solutions. Our highly skilled designers produce user-friendly
                  user interfaces (UIs) for flawless cross-platform user
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-services2" id="stats">
        <div className="features-with-17_sur py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head text-white">
                {" "}
                Our Mobile App Development Services
              </h3>
            </div>
            <div className="row pt-5 mt-3">
              <div className="col-lg-5 features-with-17-left_sur">
                <h4 className="lft-head">iOS App Development Company</h4>
                <p style={{ textAlign: "justify" }}>
                  We are a full-stack iOS app development business, and the apps
                  we've created have achieved great success. Our team of highly
                  qualified and experienced iOS app developers offers custom
                  iPhone application development services.
                </p>
                <div className="stats-1">
                  <div className="stats-1-left">
                    <h4>2300+</h4>
                    <h6>Clients</h6>
                  </div>
                  <div className="stats-1-left">
                    <h4>16+</h4>
                    <h6>Awards</h6>
                  </div>
                  <div className="stats-1-left">
                    <h4>2536+</h4>
                    <h6>Projects</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 my-lg-0 my-5 align-self-center features-with-17-right_sur">
                <div className="features-with-17-right-tp_sur">
                  <div className="features-with-17-left1">
                    <span className="fa fa-laptop s4" />
                  </div>
                  <div className="features-with-17-left2">
                    <h6>
                      <Link href="/mobileapps" style={{ fontSize: "18px" }}>
                        Android App Development Company
                      </Link>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      We serve both small and medium-sized enterprises (SMEs)
                      and well-established firms with our Android development
                      services. Our company's Android app developers provide
                      dependable and efficient custom Android apps.
                    </p>
                  </div>
                </div>
                <div className="features-with-17-right-tp_sur">
                  <div className="features-with-17-left1">
                    <span className="fa fa-database s5" />
                  </div>
                  <div className="features-with-17-left2">
                    <h6>
                      <Link href="/mobileapps">
                        Cross-platform App Development
                      </Link>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      We have a great deal of expertise developing web
                      experiences and cross-platform mobile applications for
                      various industries. We employ approaches for responsive
                      and adaptive app design together with technologies like
                      HTML5, CSS3, and JavaScript.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w3l-open-block-services py-5" id="services">
        <div className="container py-lg-5 pt-4">
          <div className="heading text-center mx-auto">
            <h3 className="head">Our Web Development Tech-stack</h3>
            {/* <p className="my-3 head">
      {" "}
      Dexterous is the best web and mobile app development company, we are dedicated to engineering best-in-class IT solutions that improve your business growth. Our development team is expert in handling projects of diverse complexities, so you can stay assured of getting secured, scalable, and high-performance solutions.
    </p> */}
          </div>
          <div className="row pt-5 mt-3">
            <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-money service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 style={{ fontSize: "18px" }} className="mission">
                  React Native
                </h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-ravelry service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">ReactJs</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-md-0 mt-3 pt-md-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-send-o service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">NodeJs</h4>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-clock-o service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">WordPress</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-send-o service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">ASP .Net</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-ravelry service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">MongoDB</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w3l-index6">
        <div className="features py-5 " id="features">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head" style={{ color: "white" }}>
                Why Choose Us
              </h3>
              <p className="my-3 head">
                {" "}
                <b style={{ color: "white" }}>
                  Leverage unparalleled experience with our Mobile Development
                  Services
                </b>
              </p>
            </div>
            <div className="fea-gd-vv row mt-5 pt-3">
              <div className="float-lt feature-gd col-md-6">
                <div className="icon" style={{ color: "white" }}>
                  {" "}
                  <span className="fa fa-handshake-o" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="#" style={{ color: "white" }}>
                      Confidentiality & transparency
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    Being one of the leading providers of mobile app development
                    services, Dexterous Technology makes sure that all of its
                    developers and procedures adhere to confidentiality
                    guidelines. To promote openness and truthfulness in
                    partnerships, we work to establish a reliable working
                    relationship.
                  </p>
                </div>
              </div>
              <div className="float-mid feature-gd col-md-6 mt-md-0 mt-5">
                <div className="icon" style={{ color: "white" }}>
                  {" "}
                  <span className="fa fa-mobile" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="#" style={{ color: "white" }}>
                      Quality Solutions
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    At Dexterous Technologies, we put in a lot of effort to make
                    sure that the finished mobile app solution surpasses the
                    customer's expectations. We do this by regularly upgrading
                    the product and performing several quality checks, which
                    ensures that the client is completely satisfied.
                  </p>
                </div>
              </div>
              <div className="float-rt feature-gd col-md-6 mt-5">
                <div className="icon" style={{ color: "white" }}>
                  {" "}
                  <span className="fa fa-gg" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="#" style={{ color: "white" }}>
                      Source code ownership
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    We guarantee the ownership and control of intellectual
                    property and source code by our clients. We respect our
                    clients' independence and provide them the tools they need
                    to decide what's best for their company.
                  </p>
                </div>
              </div>
              <div className="float-lt feature-gd col-md-6 mt-5">
                <div className="icon" style={{ color: "white" }}>
                  {" "}
                  <span className="fa fa-eye" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a href="#" style={{ color: "white" }}>
                      Reduced Operational Cost
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    At a lesser cost than mobile application developers in other
                    nations, Dexterous Technologies hires the top 1% of talent
                    in the Indian IT sector. This enables customers to use the
                    top mobile app developers while keeping costs down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonal />
    </>
  );
};

export default MobileAppDevelopment;
