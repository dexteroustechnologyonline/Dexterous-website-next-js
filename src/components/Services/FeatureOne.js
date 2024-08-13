

import React from "react";

const FeatureOne = () => {
  return (
    <>
      <section className="w3l-features-1">
        {/* /features */}
        <div className="features py-5" id="features">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Why Hire Us?</h3>
              <p className="my-3 head">
                {" "}
                We provide easy to use IT development Services by enabling you
                to hire app developer and by consistently delivering high
                quality and elegantly scalable outputs you can be proud of.
              </p>
            </div>
            <div className="fea-gd-vv row mt-5 pt-3">
              <div className="float-lt feature-gd col-md-6">
                <div className="icon">
                  {" "}
                  <span className="fa fa-handshake-o" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a to="#">Effective Solutions</a>
                  </h5>
                  <p> We offer services to ensure application quality. </p>
                  <a to="#" className="red mt-3">
                    Read More <span className="fa fa-angle-right pl-1" />
                  </a>
                </div>
              </div>
              <div className="float-mid feature-gd col-md-6 mt-md-0 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-mobile" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a to="#">Expert Team</a>
                  </h5>
                  <p>
                    {" "}
                    No matter how complex idea you have, we are a team of
                    professionals with expertise in advanced technologies.{" "}
                  </p>
                  <a to="#" className="red mt-3">
                    Read More <span className="fa fa-angle-right pl-1" />
                  </a>
                </div>
              </div>
              <div className="float-rt feature-gd col-md-6 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-gg" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a to="#">In-time Delivery</a>
                  </h5>
                  <p>
                    {" "}
                    We are responsible to deliver the project at a given time.{" "}
                  </p>
                  <a to="#" className="red mt-3">
                    Read More <span className="fa fa-angle-right pl-1" />
                  </a>
                </div>
              </div>
              <div className="float-lt feature-gd col-md-6 mt-5">
                <div className="icon">
                  {" "}
                  <span className="fa fa-eye" aria-hidden="true" />
                </div>
                <div className="icon-info">
                  <h5>
                    <a to="#">Security</a>
                  </h5>
                  <p>
                    {" "}
                    We care about your security. We develop apps that are good
                    in a security manner.{" "}
                  </p>
                  <a to="#" className="red mt-3">
                    Read More <span className="fa fa-angle-right pl-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //features */}
      </section>
    </>
  );
};

export default FeatureOne;
