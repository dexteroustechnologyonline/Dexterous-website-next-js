import Link from 'next/link';
import React from 'react';

const Features = () => {
  return (
    <>
      {/* <section className="w3l-features-4">
        <div className="features" id="about" style={{ backgroundColor: "#f2f8ff" }}>
          <div className="container py-lg-5">
            <div className="feat-top row">
              <div className="feat-top-left col-lg-4">
                <h1 className="sub-title">Best mobile app development company</h1>
                <p className="mt-3">As one of India's leading app development agencies, with in-house app developers, designers, and mobile strategists, we help you turn mobile concepts into reliable and robust app solutions,
                  with stunning design and an amazing user experience.</p>
                <Link className="btn btn-secondary btn-theme2 mt-4" href="/services"> See More Services  →</Link>
              </div>
              <div className="fea-gd-vv col-lg-8 row mt-lg-0 mt-5 pl-lg-5">
                <div className="float-lt feature-gd col-md-6">
                  <img src="assets/images/g5.jpg" className="img-fluid" alt />
                  <div className="icon-info">
                    <h5 className="mt-3"><Link href="#">Mobile App Development
                    </Link></h5>
                    <p> Perfectly crafted and innovative Android, iOS, iPad, iPhone App Development Solutions. We develop robust platforms that meet specific business goals. </p>
                  </div>
                </div>
                <div className="float-mid feature-gd col-md-6 mt-md-0">
                  <img src="assets/images/g3.jpg" className="img-fluid" alt />
                  <div className="icon-info">
                    <h5 className="mt-3"><Link href="#">Ecommerce App development

                    </Link></h5>
                    <p> By applying the best technology, We offer E-commerce App development services, that turn dreams into engaging, best-in-class realities. Contact Now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="w3l-features-4">
        {/* /features */}
        <div className="features py-5" id="about">
          <div className="container py-lg-5">
            <div className="feat-top row">
              <div className="feat-top-left col-lg-4">
                {/* <h1 className="sub-title">Leading mobile app development company</h1> */}
                <h1 className="sub-title">Best mobile app development company</h1>
                <p className="mt-3">As one of India's leading app development agencies, with in-house app developers, designers, and mobile strategists, we help you turn mobile concepts into reliable and robust app solutions,
                  with stunning design and an amazing user experience.</p>
                <Link className="btn btn-secondary btn-theme2 mt-4" href="/services"> See More Services  →</Link>
              </div>
              <div className="fea-gd-vv col-lg-8 row mt-lg-0 mt-5 pl-lg-5">
                <div className="float-lt feature-gd col-md-6">
                  <img src="/styles/assets/images/g5.jpg" className="img-fluid" alt />
                  <div className="icon-info">
                    <h5 className="mt-3"><Link href="#">Mobile App Development
                    </Link></h5>
                    <p> Perfectly crafted and innovative Android, iOS, iPad, iPhone App Development Solutions. We develop robust platforms that meet specific business goals. </p>
                  </div>
                </div>
                <div className="float-mid feature-gd col-md-6 mt-md-0">
                  <img src="/styles/assets/images/g3.jpg" className="img-fluid" alt />
                  <div className="icon-info">
                    <h5 className="mt-3"><Link href="#">Ecommerce App development

                    </Link></h5>
                    <p> By applying the best technology, We offer E-commerce App development services, that turn dreams into engaging, best-in-class realities. Contact Now!</p>
                  </div>
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

export default Features;
