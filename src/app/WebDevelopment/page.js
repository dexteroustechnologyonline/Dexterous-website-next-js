import React from "react";
// import MetaData from '../../layout/MetaData'
import Breadcrum from "../../components/breadCrum";
import Testimonal from "@/components/Home/Testimonal";
import Link from "next/link";
export const metadata = {
  title:
    "Best Web Development in Hyderabad | Web Development Company in Hyderabad | Web And Mobile App Development Company Hyderabad - Dexterous Technology",
  description:
    "Looking for the best web development in Hyderabad? Look no further than Dexterous Technology, the premier web and mobile app development company in Hyderabad.",
  keywords:
    "Best Web Development in Hyderabad, Web Development Company in Hyderabad, Web And Mobile App Development Company Hyderabad",
};

const WebDevelopment = (props) => {
  return (
    <>
      {/* <MetaData title="Dexterous | Mobile app developmrnt company" /> */}
      <Breadcrum title="Web Development" cls="about" id="aboutPage" />
      <section className="w3l-content-with-photo-4" id="about">
        <div id="content-with-photo4-block" className="py-5">
          <div className="container py-md-3">
            <div className="cwp4-two row">
              <div className="cwp4-image col-lg-6">
                <img
                  src="/styles/assets/images/Web Development.webp"
                  className="img-fluid"
                  alt
                />
              </div>
              <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <h3 style={{ fontSize: "25px", lineHeight: "34px" }}>
                  Developing Web Applications & Creating Exceptional Online
                  Solutions
                </h3>
                <p>
                  Take use of the best web development services available to
                  build feature-rich, scalable, reliable, and quality-driven
                  online portals.
                </p>
                <p style={{ textAlign: "justify" }}>
                  One of the top companies offering bespoke web development
                  services is Dexterous Technologies. Collaborating with us will
                  get you access to our skilled developers and specialists, as
                  well as a plethora of opportunities. As a custom web
                  application development company, we offer specialized services
                  made to maximize the potential of your enterprise. Websites
                  are not meant for user interaction; web applications are.{" "}
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
              <h3 className="head text-white"> Web Development Services</h3>
            </div>
            <div className="row pt-5 mt-3">
              <div className="col-lg-5 features-with-17-left_sur">
                <h4 className="lft-head">Web Application Development</h4>
                <p style={{ textAlign: "justify" }}>
                  As a web development firm, we provide secure, adaptable, and
                  scalable bespoke web application services and web app
                  solutions. Our web apps are compatible with several platforms
                  and are easily adaptable to the specific requirements of the
                  project.
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
                      <Link href="/ecommerce">E-Commerce Web Development</Link>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      Using our e-commerce website building procedures, you may
                      improve your business growth and establish a strong online
                      presence. We make sure that our clients receive
                      exceptional progressive web app development services that
                      leave a lasting impression on them.
                    </p>
                  </div>
                </div>
                <div className="features-with-17-right-tp_sur">
                  <div className="features-with-17-left1">
                    <span className="fa fa-database s5" />
                  </div>
                  <div className="features-with-17-left2">
                    <h6>
                      <Link href="/generalwebsites">
                        Full Stack development services
                      </Link>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      Utilize our skilled full-stack web developers to bring
                      your web development concepts to life and produce
                      front-end and back-end web app solutions.Our most
                      well-known stacks, the MERN stack, are created using the
                      newest languages and technology.
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
                    className="fa fa-money service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 style={{ fontSize: "18px" }} className="mission">
                  React Native
                </h4>
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
                  Get Next-gen Solutions With a Leading Custom Web Development
                  Company
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
                      Custom web development
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    {" "}
                    With unique features and user-friendly navigation, Dexterous
                    Technologies provides custom web development solutions. In
                    order to differentiate it from the competition, our web
                    developers are skilled in creating eye-catching unique
                    designs.{" "}
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
                      Unique open source platforms
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    Utilizing the newest technology, create open-source web
                    portals that satisfy the needs of your customers. Our web
                    solutions adhere to all security standards and are fully
                    responsive.
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
                      Transparent & flexible process
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    We offer a flexible strategy to create inventive solutions
                    and generate unrivaled profits for the company, and we are
                    transparent and truthful with our clients. Dexterous
                    Technology's adaptable engagement approach enables you to
                    obtain high quality at cost-effective costs.
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
                      Use of latest frameworks
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    Dexterous Technology creates web solutions that are ready
                    for the future by using the newest frameworks for web
                    development. Our clients quickly outperformed their
                    competitors thanks to our awareness of the most recent
                    industry trends and ongoing product improvement to make them
                    compatible with the market.
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

export default WebDevelopment;
