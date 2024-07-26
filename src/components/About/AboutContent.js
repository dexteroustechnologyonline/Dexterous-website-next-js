import React from "react";

const AboutContent = () => {
  return (
    <section className="w3l-content-with-photo-4" id="about">
      <div id="content-with-photo4-block" className="py-5">
        <div className="container py-md-3">
          <div className="cwp4-two row">
            <div className="cwp4-image col-lg-6">
              <img src="/styles/assets/images/g5.webp" className="img-fluid" alt />
            </div>
            <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
              <h3>Why choose Us</h3>
              <p>
                At Dexterous, we embrace a well-established set of cultural and
                professional values which represent our highest aspirations for
                how we engage as colleagues, fellows, alumni, partners, and
                board members.
              </p>
              <ul className="cont-4">
                <li>
                  <span className="fa fa-check" />
                  Website Designing and Development
                </li>
                <li>
                  <span className="fa fa-check" />
                  Android and iOs Apps Development{" "}
                </li>
                <li>
                  <span className="fa fa-check" />
                  Successfully Providing Business Solution from 20 years
                </li>
                <li>
                  <span className="fa fa-check" />
                  Excellence Records{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
