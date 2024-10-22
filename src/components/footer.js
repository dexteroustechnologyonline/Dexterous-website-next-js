"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import WhatsappIcon from "../components/whatsappIcon/WhatsappIcon";
const Footer = () => {
  return (
    <>
      <WhatsappIcon />
      <section className="w3l-footer-29-main">
        <div className="footer-29">
          <div className="container">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29 footer-1">
                <h6 className="footer-title-29">Contact Us</h6>
                <ul>
                  <li>
                    <p>
                      <span className="fa fa-map-marker" /> Dexterous
                      Technology, Flat No - 3, First Floor, Sharada Complex,
                      Plot No - 103, Vengal Rao Nagar Rd, Kalyan Nagar Phase 1,
                      Siddarth Nagar, Ameerpet, Hyderabad, Telangana 500038
                    </p>
                  </li>

                  <li>
                    <a href="tel:+(91-9908516950" target={"_blank"}>
                      <span className="fa fa-phone" /> +91-9908516950,
                    </a>
                    <a href="tel:+(91-9515705570" target={"_blank"}>
                      {" "}
                      +91-9515705570,
                    </a>
                    <a href="tel:+(91-4035506831" target={"_blank"}>
                      {" "}
                      +91-4035506831
                    </a>
                  </li>

                  {/* <li>
                <a href="tel:+(91-9542580390" target={"_blank"}>
                  <span className="fa fa-phone" /> +91-9542580390
                </a>
              </li>

              <li>
                <a href="tel:+(91-4035506831" target={"_blank"}>
                  <span className="fa fa-phone" /> +91-4035506831
                </a>
              </li> */}

                  <li>
                    <a href="mailto:care@dexterous.in" className="mail">
                      <span className="fa fa-envelope-open-o" />{" "}
                      care@dexterous.in
                    </a>
                  </li>
                </ul>
                <div className="main-social-footer-29">
                  <a
                    href="https://www.facebook.com/DexterousTechnologyWebServices"
                    target={"_blank"}
                    className="facebook"
                  >
                    <span className="fa fa-facebook" />
                  </a>
                  <a href="#twitter" target={"_blank"} className="twitter">
                    <span className="fa fa-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/dexterous_technology/"
                    target={"_blank"}
                    className="instagram"
                  >
                    <span className="fa fa-instagram" />
                  </a>
                  <a href="" target={"_blank"} className="google-plus">
                    <span className="fa fa-google-plus" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dexterous-technology-9a4343b9/"
                    target={"_blank"}
                    className="linkedin"
                  >
                    <span className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
              <div className="footer-list-29 footer-2">
                <ul>
                  <h6 className="footer-title-29">Featured Links</h6>
                  <li>
                    <Link href="contact">Our People</Link>
                  </li>
                  <li>
                    <Link href="contact">Latest Media</Link>
                  </li>
                  <li>
                    <Link href="contact">Our Branches</Link>
                  </li>
                  <li>
                    <Link href="contact">Organisations</Link>
                  </li>
                  <li>
                    <Link href="contact">Help</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-list-29 footer-3">
                <h6 className="footer-title-29">Newsletter </h6>
                <p className="mb-3">Get in your inbox the latest News and</p>
                <form action="#" className="subscribe" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <button>
                    <span className="fa fa-envelope-o" />
                  </button>
                </form>
                <p>Subscribe and get our weekly newsletter</p>
                <p>We'll never share your email address</p>
              </div>
              <div className="footer-list-29 footer-4">
                <ul>
                  <h6 className="footer-title-29">Links</h6>
                  <li>
                    {/* <Link href="/best-mobile-app-development-hyderabad">Best Mobile App Development Hyderabad</Link> */}
                    <Link href="/services">Home</Link>

                  </li>

                  <li>
                    {/* <Link href="/web-design-company-in-hyderabad">Web Design Company in Hyderabad</Link> */}
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    {/* <Link href="/about">Best Mobile App Development Company Hyderabad</Link> */}
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    {/* <Link href="/blog"> Web Designing Company in Hyderabad</Link> */}
                    <Link href="/blog"> Blog</Link>
                  </li>
                  <li>
                    {/* <Link href="/contact">Mobile App Development Company in Hyderabad</Link> */}
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="d-grid grid-col-2 bottom-copies">
              <p className="copy-footer-29">
                © 2024 Dexterous Technology | All rights reserved
              </p>
              <ul className="list-btm-29">
                <li>
                  <Link href="">Privacy policy</Link>
                </li>
                <li>
                  <Link href="">Terms of service</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <button onclick="topFunction()" id="movetop" title="Go to top">
          <span className="fa fa-angle-up" />
        </button>
      </section>




      <section className="w3l-footer-29-main" style={{overflow:"hidden"}}>
        <div className="footer-29">
          <div className="heading text-center mx-auto">
            <h3 className="head" style={{color:"white"}}>Quick Links</h3>
          </div>
          <hr className="container" style={{borderTop:"1px solid white"}}/>
          <div className="container mt-lg-5">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29 footer-1">
                <ul>
                  <li>
                    <Link href="web-design-company-in-banjara-hills">Web Design Company In Banjara Hills</Link>
                  </li>
                  <li>
                    <Link href="web-designing-company-in-banjara-hills">Web Designing Company in Banjara Hills </Link>
                  </li>
                  <li>
                    <Link href="best-web-designing-company-in-banjara-hills">Best Web Designing Company in Banjara Hills </Link>
                  </li>
                
                </ul>
              </div>
              
              <div className="footer-list-29 footer-3">
               
                <ul>
                  <li>
                    <Link href="best-mobile-app-development-in-banjara-hills">Best Mobile App Development In Banjara Hills</Link>
                  </li>
                  <li>
                    <Link href="mobile-app-development-company-in-banjara-hills"> Mobile App Development Company in Banjara Hills </Link>
                  </li>
                  <li>
                    <Link href="android-app-development-in-banjara-hills">Android App Development in Banjara Hills </Link>
                  </li>
                 
                 
                </ul>
              </div>
              <div className="footer-list-29 footer-4">
                <ul>
                 
                  <li>
                    <Link href="/e-commerce-web-development-in-banjara-hills">E-Commerce Web Development in Banjara Hills </Link>
                  </li>
                  <li>
                    <Link href="/e-commerce-website-design-in-banjara-hills">E-commerce Website Design in Banjara Hills </Link>
                  </li>
                  <li>
                    <Link href="/e-commerce-web-design-development-company-in-banjara-hills">E-Commerce Web Design & Development Company Banjara Hills</Link>
                  </li>

                 
                </ul>
              </div>
            </div>
            <div className="d-grid grid-col-2 bottom-copies">
              <p className="copy-footer-29">
                © 2024 Dexterous Technology | All rights reserved
              </p>
              <ul className="list-btm-29">
                <li>
                  <Link href="">Privacy policy</Link>
                </li>
                <li>
                  <Link href="">Terms of service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button onclick="topFunction()" id="movetop" title="Go to top">
          <span className="fa fa-angle-up" />
        </button>
      </section>
    </>
  );
};

export default Footer;
