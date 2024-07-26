import React from "react";

const Feature2 = () => {
  return (
    <>
      <section className="w3l-feature-2" id="process">
        <div className="grid top-bottom py-5">
          <div className="container py-md-5">
            <div className="heading text-center mx-auto">
              <h3 className="head text-white">
                Our Process of Software Development
              </h3>
              <p className="my-3 head text-white">
                {" "}
                We employ the best processes and development methodologies as
                the basis for rapidly building cutting-edge technological
                solutions in a structured and methodical manner.
              </p>
            </div>
            <div className="middle-section row mt-5 pt-3 text-center">
              <div className="three-grids-columns col-lg-3 col-sm-6 ">
                <div className="icon">
                  {" "}
                  <span className>1</span>
                </div>
                <h4>Planning</h4>
                <p>
                  We collect all the relevant information from our customers to
                  develop custom software solutions according to their
                  expectations and move forward with the Agile sprint plan.
                </p>
              </div>
              <div className="three-grids-columns col-lg-3 col-sm-6 mt-sm-0 mt-5">
                <div className="icon">
                  {" "}
                  <span className>2</span>
                </div>
                <h4>Designing</h4>
                <p>
                  The system and documents are prepared as per requirement
                  specifications which helps us define the overall architecture
                  of the technology stack.
                </p>
              </div>
              <div className="three-grids-columns col-lg-3 col-sm-6 mt-lg-0 mt-5">
                <div className="icon">
                  {" "}
                  <span className>3</span>
                </div>
                <h4>Developing</h4>
                <p>
                  Developers start writing code using chosen programming
                  language techniques & methodologies so that the whole project
                  can be built successfully without any errors or Bugs!.
                </p>
              </div>
              <div className="three-grids-columns col-lg-3 col-sm-6 mt-lg-0 mt-5">
                <div className="icon">
                  {" "}
                  <span className>4</span>
                </div>
                <h4>Testing</h4>
                <p>
                  When the software is finally ready, it's time for testing. The
                  quality assurance team tests and evaluates your application in
                  order to find any defects that may exist before releasing the
                  final version.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature2;
