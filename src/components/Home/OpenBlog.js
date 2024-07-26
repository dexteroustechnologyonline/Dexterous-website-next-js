import React from 'react'

const OpenBlog = () => {
  return (
    <div className="w3l-open-block-services py-5" id="services">
        <div className="container py-lg-5 pt-4">
          <div className="heading text-center mx-auto">
            <h3 className="head">Why Choose Us</h3>
            <h6 className="my-3 head1">
              {" "}
              Dexterous is the best web and mobile app development company, we are dedicated to engineering best-in-class IT solutions that improve your business growth. Our development team is expert in handling projects of diverse complexities, so you can stay assured of getting secured, scalable, and high-performance solutions.
            </h6>
            {/* <p className="my-3 head">
              {" "}
              Dexterous is the best web and mobile app development company, we are dedicated to engineering best-in-class IT solutions that improve your business growth. Our development team is expert in handling projects of diverse complexities, so you can stay assured of getting secured, scalable, and high-performance solutions.
            </p> */}
          </div>
          <div className="row pt-5 mt-3">
            <div className="col-lg-3 col-md-6">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-ravelry service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">Consulting</h4>
                <div className="open-description">
                  <p>
                  Free 30 minute consultation for your project.
                  </p>
                  <a to="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-md-0 mt-3 pt-md-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-send-o service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">Valuable Ideas</h4>
                <div className="open-description">
                  <p>
                  We have dedicated Project Mangers for your project.
                  </p>
                  <a to="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-clock-o service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">Excellent Timing</h4>
                <div className="open-description">
                  <p>
                  Super quick kick start to your project.
                  </p>
                  <a to="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
              <div className="card text-center">
                <div className="icon-holder">
                  <span
                    className="fa fa-money service-icon"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="mission">Budget Friendly</h4>
                <div className="open-description">
                  <p>
                  We deliver 100% secured solution within your budget. 
                  </p>
                  <a to="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OpenBlog