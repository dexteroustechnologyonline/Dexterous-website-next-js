import Link from "next/link";
import React from "react";


const Services1 = () => {
  return (
    <>
      <section id="services" className="services-1 py-5">
        <div className="container py-lg-5 py-md-4">
          <div className="row text-center img-grids">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="ser-bg1">
                <div className="p-md-5 p-3">
                  <h4>
                    <Link href="/generalwebsites">Web & App Development</Link>
                  </h4>
                  <p>
                    We provide the best web & mobile app development services
                    form startups to enterprises.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-md-0 mt-4">
              <div className="ser-bg2">
                <div className="p-md-5 p-3">
                  <h4>
                    <Link href="/ecommerce">eCommerce Development</Link>
                  </h4>
                  <p>
                    Our dedicated team of eCommerce experts supports businesses
                    to build customer-centric eStores.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="ser-bg3">
                <div className="p-md-5 p-3">
                  <h4>
                    <Link href="/TestingQaServices">Testing & QA Services</Link>
                  </h4>
                  <p>
                    We focus on comprehensive testing and QA services to execute
                    our testing operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="ser-bg3">
                <div className="p-md-5 p-3">
                  <h4>
                    <Link href="/DigitalMarketing">Digital Marketing</Link>
                  </h4>
                  <p>
                    We develop the best digital marketing strategy for your
                    business and convert into leads and sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services1;
