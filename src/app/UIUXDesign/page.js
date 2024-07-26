import React from "react";
// import MetaData from '../../layout/MetaData'
import Testimonal from "@/components/Home/Testimonal";
import Breadcrum from "@/components/breadCrum";
import Link from "next/link";

const UIUXDesign = () => {
  return (
    <>
      {/* <MetaData title="Dexterous | Mobile app developmrnt company" /> */}
      <Breadcrum title="UI UX Design" cls="about" id="aboutPage" />
      <section className="w3l-content-with-photo-4" id="about">
        <div id="content-with-photo4-block" className="py-5">
          <div className="container py-md-3">
            <div className="cwp4-two row">
              <div className="cwp4-image col-lg-6">
                <img
                  src="/styles/assets/images/UI UX Design.webp"
                  className="img-fluid"
                  alt
                />
              </div>
              <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <h3 style={{ fontSize: "25px", lineHeight: "34px" }}>
                  Craft a website design that smoothens user journey
                </h3>
                <p>
                  <b>
                    Dexterous Technology offers an impressive UI/UX design
                    services to deliver intuitive designs and outstanding user
                    experience.
                  </b>
                </p>
                <p style={{ textAlign: "justify" }}>
                  A premium UI/UX design firm, Dexterous Technologies aims to
                  produce website designs with unconventional user experiences.
                  We are one of the top web development firms that creates
                  interesting goods to meet client demands fast. Our talented
                  group of UI/UX designers prioritizes user needs and provides
                  enhanced usability and optimal UX design techniques. We put
                  into practice design guidelines that strengthen brand recall
                  and business identification.{" "}
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
                Avail intuitive UI/UX designs and transform your digital user
                experience
              </h3>
            </div>
            <div className="row pt-5 mt-3">
              <div className="col-lg-5 features-with-17-left_sur">
                <h4 className="lft-head">User Experience Design</h4>
                <p style={{ textAlign: "justify" }}>
                  With the assistance of our web design professionals, who can
                  examine and fill in the interface gaps on your website, you
                  can bring your product idea to life. With our thorough site
                  research approach, you can effectively achieve your business
                  objectives, and your site will be user-friendly thanks to
                  incorporated microinteractions.
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
                      <Link href="/generalwebsites">Responsive Design</Link>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      Remarkable responsive web designs that look good on all
                      screen sizes are made by our UX design specialists.
                      Because of our expertise in creating unique websites with
                      user-centric design and content, we can guarantee not only
                      an excellent user experience but also faster usability.
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
                        Website Redesign services
                      </Link>
                    </h6>
                    <p style={{ textAlign: "justify" }}>
                      With the help of our UI/UX designers, revamp your website
                      and turn your demands into measurable outcomes that result
                      in increased productivity and speedier turnaround times.
                      Our extensive usage of wireframes guarantees that the
                      website appropriately satisfies the needs of the business.
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
                  Leverage best UI/UX design services from the top website
                  builders
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
                      Minimal cost of operations
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    When it comes to hiring top 1% talent in the Indian IT
                    sector, Dexterous Technologies can provide access to
                    developers at a 60% less price than in other nations like
                    the US, UK, Poland, the Philippines, or Ukraine. This
                    enables our clients to use the top software developers while
                    staying within their budgets.
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
                      Transparency
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    By encouraging trust and cooperation, Dexterous Technology
                    offers total transparency in their client interactions and
                    communications. This strategy aids in overcoming obstacles
                    and guarantees the project's success.
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
                      Guaranteed Quality
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    With accuracy and meticulous quality checks, our team of web
                    designers and developers strives to offer the desired output
                    and achieves 100% client satisfaction. To get the intended
                    results, ongoing maintenance and upgrades are carried out.
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
                      Industry Specific Talent
                    </a>
                  </h5>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    The 500 specialists that make up the Dexterous Technology
                    team have years of experience in the field and were selected
                    after a rigorous screening procedure. Customers can select
                    developers with particular expertise, guaranteeing that
                    their projects will have a committed team with the tools
                    they need.
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

export default UIUXDesign;
