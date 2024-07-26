import Link from "next/link";

const HomeAbout = () => {
  return (
    <section className="w3l-features-4">
      <div
        className="features"
        id="about"
        style={{ backgroundColor: "#f2f8ff" }}
      >
        <div className="container py-lg-5">
          <div className="feat-top row">
            <div className="feat-top-left col-lg-4">
              <br />
              <h1 className="sub-title" style={{ textAlign: "center" }}>
                About
              </h1>
              <p className="mt-3" style={{ textAlign: "justify" }}>
                Welcome to Dexterous Technology, where innovation is brought to
                life. For over 13+ years, we have excelled at providing
                cutting-edge software development solutions that redefine
                possibilities. From software consulting services to
                comprehensive technology roadmaps to end-to-end development,
                Dexterous Technology delivers all the services you need for your
                software projects. Our future-ready custom software helps you
                achieve real business value. Your success is our mission, and
                we're here to make it a reality. Let's embark on a digital
                transformation journey together!
              </p>
              <Link className="btn btn-secondary btn-theme2 mt-4" href="/about">
                {" "}
                See More →
              </Link>
            </div>
            <div className="fea-gd-vv col-lg-8 row mt-lg-0 mt-5 pl-lg-5">
              <div className="float-lt feature-gd col-md-6">
                <img
                  src="styles/assets/images/Our Mission.webp"
                  className="img-fluid"
                  alt
                />
                <div className="icon-info">
                  <h5 className="mt-3">
                    <Link href="#"> Our Mission</Link>
                  </h5>
                  <p style={{ textAlign: "justify" }}>
                    {" "}
                    We are on a mission to provide the valuable & result
                    oriented search advertising and search engine marketing
                    solutions to the businesses who really want to excel their
                    reach online.{" "}
                  </p>
                </div>
              </div>
              <div className="float-mid feature-gd col-md-6 mt-md-0">
                <img
                  src="styles/assets/images/Our Vision.webp"
                  className="img-fluid"
                  alt
                />
                <div className="icon-info">
                  <h5 className="mt-3">
                    <Link href="#">Our Vision</Link>
                  </h5>
                  <p style={{ textAlign: "justify" }}>
                    {" "}
                    Our Vision is to provide the best IT Services related to web
                    Development. & With this, we'll become the best Web
                    designing & web development company in India.
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

export default HomeAbout;
