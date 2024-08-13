import React from "react";
// import MetaData from '../../layout/MetaData'
import Breadcrum from "@/components/breadCrum";
import Testimonal from "../../components/Home/Testimonal";
const DigitalMarketing = (props) => {
  return (
    <>
      {/* <MetaData title="Dexterous | Mobile app developmrnt company" /> */}
      <Breadcrum title="Digital Marketing" cls="about" id="aboutPage" />
      <section className="w3l-content-with-photo-4" id="about">
        <div id="content-with-photo4-block" className="py-5">
          <div className="container py-md-3">
            <div className="cwp4-two row">
              <div className="cwp4-image col-lg-6">
                <img
                  src="/styles/assets/images/DigitalMarketing.webp"
                  className="img-fluid"
                  alt
                />
              </div>
              <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <h3 style={{ fontSize: "25px", lineHeight: "34px" }}>
                  How Digital Marketing Services Drive Business Growth.
                </h3>
                <p>
                  <b>
                    Engage Your Target Customers at the Right Time on the Right
                    Platform.
                  </b>
                </p>
                <p style={{ textAlign: "justify" }}>
                  Digital marketing services provide businesses of all sizes
                  with an opportunity to market their brand 24/7 at a low cost.
                  From startups to medium-sized enterprises to multiple-location
                  companies, a digital marketing company helps you expand your
                  niche market reach to offer goods and services to your target
                  customers, irrespective of time differences or location.
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
                Dexterous Technologies Digital Marketing Services
              </h3>
            </div>
            <div className="row pt-5 mt-3">
              <div className="col-lg-5 features-with-17-left_sur">
                <h4 className="lft-head">Custom Website Design</h4>
                <p style={{ textAlign: "justify" }}>
                  Draw in your target consumers with a polished, one-of-a-kind
                  custom website design that accentuates the distinctive selling
                  points of your company. Our digital marketing agency has a
                  group of WordPress specialists with years of expertise
                  building unique websites tailored to particular niche markets.
                  We research the needs of your sector, create ADA-compliant
                  websites, and handle continuous site upkeep. The goal of these
                  internet marketing services is to improve your brand's initial
                  perception.
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
                      <a to="" style={{ fontSize: "18px" }}>
                        Social Media Marketing
                      </a>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      Are you prepared to grow and reach new audiences on social
                      media? We create social media marketing strategies to
                      increase followership and business growth. Our digital
                      marketing firm assesses your objectives, benchmarks your
                      competitors, and looks at how your clients behave online.
                      We create specialized paid advertising and social media
                      brand management plans for your company based on data and
                      analytics.
                    </p>
                  </div>
                </div>
                <div className="features-with-17-right-tp_sur">
                  <div className="features-with-17-left1">
                    <span className="fa fa-database s5" />
                  </div>
                  <div className="features-with-17-left2">
                    <h6>
                      <a to="">Web Hosting</a>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      Your new website needs to be hosted by a reliable, secure
                      firm. Don't worry about it; just go with Dexterous.
                      Network monitoring, system backup and restoration, malware
                      detection and removal, file management, and WordPress
                      acceleration are all services offered by our digital
                      marketing company. In order to increase the security of
                      your website, we additionally provide free Secure Sockets
                      Layer (SSL) certificates and limitless bandwidth and data
                      transfer.
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

      <Testimonal />
    </>
  );
};

export default DigitalMarketing;
