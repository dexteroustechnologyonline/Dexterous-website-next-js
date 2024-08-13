import Link from "next/link";
import React from "react";

const ServicesTwo = () => {
  return (
    <section className="w3l-services2" id="stats">
      <div className="features-with-17_sur py-5">
        <div className="container py-md-3">
          <div className="heading text-center mx-auto">
            <h3 className="head text-white">What We Offer</h3>
            {/* <p className="my-3 head "> Dexterous is a leading mobile app development company.
                We specialise in apps for iOS and Android, as well as web development services.
              </p> */}
            <h6 className="my-3 head2 ">
              {" "}
              Dexterous is a leading mobile app development company. We
              specialise in apps for iOS and Android, as well as Best E-commerce
              Mobile App development services.
            </h6>
          </div>
          <div className="row pt-5 mt-3">
            <div className="col-lg-5 features-with-17-left_sur">
              <h4 className="lft-head">We’re Offering Unmatched Services</h4>
              <p>
                As a leading custom software development company with 17+ Years
                of experience, we offer you to hire software teams from a pool
                of 650+ experts and help you fulfill all your requirements
                whether you're looking to build a new app/software or improve
                the existing setup.
              </p>
              <p>
                Planning to hire eCommerce developers?? Or would you like to web
                development services?
              </p>
              <div className="stats-1">
                <div className="stats-1-left">
                  <h4>2300</h4>
                  <h6>Clients</h6>
                </div>
                <div className="stats-1-left">
                  <h4>16</h4>
                  <h6>Awards</h6>
                </div>
                <div className="stats-1-left">
                  <h4>2536</h4>
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
                    <Link href="/ecommerce-app-developement">Mobile App</Link>
                  </h6>
                  <p>
                    Using solid expertise in mobile apps development, our team
                    will help you create the best mobile app which helps you to
                    grow your business.
                  </p>
                </div>
              </div>
              <div className="features-with-17-right-tp_sur">
                <div className="features-with-17-left1">
                  <span className="fa fa-database s5" />
                </div>
                <div className="features-with-17-left2">
                  <h6>
                    <Link href="/WebDevelopment">Website Development</Link>
                  </h6>
                  <p>
                    By applying the best technology, We offer website
                    development services, that turn dreams into engaging,
                    best-in-class realities. Contact Now!
                  </p>
                </div>
              </div>
              <div className="features-with-17-right-tp_sur">
                <div className="features-with-17-left1">
                  <span className="fa fa-lock s3" />
                </div>
                <div className="features-with-17-left2">
                  <h6>
                    <Link href="/grocery-app-developement">eCommerce Development</Link>
                  </h6>
                  <p>
                    Dexterous is a leading eCommerce development company that
                    offers the most versatile, stable, secure, and customized
                    eCommerce website development solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="features-with-17-right-tp_sur">
                <div className="features-with-17-left1">
                  <span className="fa fa-codepen s2" />
                </div>
                <div className="features-with-17-left2">
                  <h6>
                    <Link href="/digital-marketing">Digital Marketing</Link>
                  </h6>
                  <p>
                    We develop the best digital marketing strategy for your
                    business to drive more qualified visitors and convert them
                    into leads and sales. Contact Now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
