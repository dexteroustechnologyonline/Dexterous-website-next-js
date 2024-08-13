import React from "react";

const AboutFeatures = () => {
  return (
    <section className="w3l-features-4">
      {/* /features */}
      <div className="features py-5" id="features">
        <div className="container py-lg-5">
          <div className="feat-top row">
            <div className="fea-gd-vv col-lg-8 row mb-lg-0 mb-5 pr-lg-5">
              <div className="float-lt feature-gd col-md-6">
                <img src="/styles/assets/images/g5.webp" className="img-fluid" alt />
                <div className="icon-info">
                  <h5 className="mt-3">Our Mission</h5>
                  <p>
                    {" "}
                    Our mission is to be a leader in technology-enabled
                    solutions across all platforms with a special forte in
                    mobile apps and web apps.{" "}
                  </p>
                </div>
              </div>
              <div className="float-mid feature-gd col-md-6 mt-md-0 mt-5">
                <img src="/styles/assets/images/g3.webp" className="img-fluid" alt />
                <div className="icon-info">
                  <h5 className="mt-3">Our Vision</h5>
                  <p>
                    {" "}
                    Our vision is to be recognized as a professional, and best
                    app development service provider to our customers.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="feat-top-left col-lg-4">
              <h6 className="sub-title">
                “We are always looking ahead to stay on top of the latest design
                &amp; technology.”
              </h6>
              <p className="mt-3">
                Dexterous is just the right company giving the right Mobility
                Leverage for all those smart business organizations which are
                looking for optimizing their digital marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //features */}
    </section>
  );
};

export default AboutFeatures;
