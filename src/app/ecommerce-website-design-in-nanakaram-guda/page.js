import React from "react";
import Head from 'next/head';
import Breadcrum from "../../components/breadCrum";
import Testimonal from "@/components/Home/Testimonal";
import Link from "next/link";

export const metadata = {
    title:
        "E-commerce Website Design in Nanakaram Guda | Dexterous Technology",
    description:
        "Dexterous Technology offers the ecommerce-website-design-in-nanakaram-guda, delivering innovative and user-friendly website.",
    keywords:
        "E-commerce Website Design in Nanakaram Guda, Dexterous Technology, best website developers, website, technology solutions",

    openGraph: {
        title: 'E-commerce Website Design in Nanakaram Guda | Dexterous Technology', // OG Title
        description: 'Dexterous Technology offers the ecommerce-website-design-in-nanakaram-guda, delivering innovative and user-friendly website.', // OG Description
        url: 'https://dexterous.in/ecommerce-website-design-in-nanakaram-guda', // OG URL
        siteName: 'Dexterous Technology', // OG Site Name
        images: [
            {
                url: '/styles/assets/images/1200X630_logo.png', // OG Image URL
                width: 1200,
                height: 630,
                alt: 'images', // OG Image Alt Text
            },
        ],
        locale: 'en_IN', // OG Locale
        type: 'website', // OG Type (e.g., website, article)
    },

};

const EcommerceWebsiteDesignInNanakaramGuda = (props) => {
    return (
        <>

            <Breadcrum title="E-commerce Website Design in Nanakaram Guda" cls="about" id="" />
            <section className="w3l-content-with-photo-4" id="about">
                <div id="content-with-photo4-block" className="py-5">
                    <div className="container py-md-3">
                        <div className="cwp4-two row">
                            <div className="cwp4-image col-lg-6">
                                <img
                                    src="/styles/assets/images/Web Development.webp"
                                    className="img-fluid"
                                    alt="E-commerce Website Design in Nanakaram Guda"
                                />
                            </div>
                            <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                                <h1 style={{ fontSize: "25px", lineHeight: "34px" }}>
                                    <b>E-commerce Website Design in Nanakaram Guda</b>
                                </h1>
                                <p style={{ textAlign: "justify" }}>
                                Are you looking to establish a strong online presence for your business in Nanakaram Guda? Dexterous Technology specializes in creating bespoke e-commerce websites tailored to your unique needs. Our cutting-edge designs and robust platforms help you stand out in the competitive online marketplace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-index6">
                <div className="features py-5 " id="features">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h2 className="head" style={{ color: "white" }}>
                                <b>Why Choose Dexterous Technology?</b>
                            </h2>
                            <p className="my-3 head">
                                {" "}
                                
                                <p style={{ color: "white" }}>
                                At Dexterous Technology, we combine creativity, technology, and strategy to deliver e-commerce solutions that drive results. Here's why businesses in Nanakaram Guda trust us.
                                </p>
                            </p>
                        </div>
                        <div className="fea-gd-vv row mt-5 pt-3">
                            <div className="float-lt feature-gd col-md-6">
                                <div className="icon" style={{ color: "white" }}>
                                    {" "}
                                    <span className="fa fa-handshake-o" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#" style={{ color: "white" }}>
                                        Custom Designs</a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                    We create visually stunning websites that reflect your brand identity.
                                    </p>
                                </div>
                            </div>
                            <div className="float-mid feature-gd col-md-6 mt-md-0 mt-5">
                                <div className="icon" style={{ color: "white" }}>
                                    {" "}
                                    <span className="fa fa-mobile" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#" style={{ color: "white" }}>
                                        User-Friendly Interfaces
                                        </a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                    Our websites are designed to provide an exceptional user experience.
                                    </p>
                                </div>
                            </div>
                            <div className="float-rt feature-gd col-md-6 mt-5">
                                <div className="icon" style={{ color: "white" }}>
                                    {" "}
                                    <span className="fa fa-gg" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#" style={{ color: "white" }}>
                                        Mobile Optimization
                                        </a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                    We ensure your e-commerce site performs flawlessly on all devices.
                                    </p>
                                </div>
                            </div>
                            <div className="float-lt feature-gd col-md-6 mt-5">
                                <div className="icon" style={{ color: "white" }}>
                                    {" "}
                                    <span className="fa fa-eye" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#" style={{ color: "white" }}>
                                        Secure Payment Gateways
                                        </a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                    Safeguard your transactions with our reliable and secure solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w3l-open-block-services py-5" id="services">
                <div className="container py-lg-5 pt-4">
                    <div className="heading text-center mx-auto">
                        <h2 className="head"> <b>Our Web Development Tech-stack</b></h2>
                        {/* <p className="my-3 head">
      {" "}
      Dexterous is the best web and Web Design company, we are dedicated to engineering best-in-class IT solutions that improve your business growth. Our development team is expert in handling projects of diverse complexities, so you can stay assured of getting secured, scalable, and high-performance solutions.
    </p> */}
                    </div>
                    <div className="row pt-5 mt-3">
                        <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
                            <div className="card text-center">
                                <div className="icon-holder">
                                    <span
                                        className="fa fa-money service-icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 style={{ fontSize: "18px" }} className="mission">
                                    React Native
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="card text-center">
                                <div className="icon-holder">
                                    <span
                                        className="fa fa-ravelry service-icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="mission">ReactJs</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-md-0 mt-3 pt-md-0 pt-3">
                            <div className="card text-center">
                                <div className="icon-holder">
                                    <span
                                        className="fa fa-send-o service-icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="mission">NodeJs</h4>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
                            <div className="card text-center">
                                <div className="icon-holder">
                                    <span
                                        className="fa fa-clock-o service-icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="mission">WordPress</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
                            <div className="card text-center">
                                <div className="icon-holder">
                                    <span
                                        className="fa fa-send-o service-icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="mission">ASP .Net</h4>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-lg-0 mt-3 pt-lg-0 pt-3">
                            <div className="card text-center">
                                <div className="icon-holder">
                                    <span
                                        className="fa fa-ravelry service-icon"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="mission">MongoDB</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="w3l-features-1">
                {/* /features */}
                <div className="features py-5" id="features">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head">Our Services</h3>
                            <p className="my-3 head">
                                {" "}
                                We offer a comprehensive range of e-commerce website design services.
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
                                        <a to="#">Custom E-commerce Website Development</a>
                                    </h5>
                                    <p> 
                                    Tailored solutions to meet your specific business goals.
                                    </p>

                                </div>
                            </div>
                            <div className="float-mid feature-gd col-md-6 mt-md-0 mt-5">
                                <div className="icon">
                                    {" "}
                                    <span className="fa fa-mobile" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#">Responsive Design</a>
                                    </h5>
                                    <p>
                                        {" "}
                                        Seamless functionality across desktops, tablets, and smartphones.
                                    </p>

                                </div>
                            </div>
                            <div className="float-rt feature-gd col-md-6 mt-5">
                                <div className="icon">
                                    {" "}
                                    <span className="fa fa-gg" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#">E-commerce Platform Integration</a>
                                    </h5>
                                    <p>
                                        {" "}
                                        Expertise in Shopify, WooCommerce, Magento, and more.
                                    </p>

                                </div>
                            </div>
                            <div className="float-lt feature-gd col-md-6 mt-5">
                                <div className="icon">
                                    {" "}
                                    <span className="fa fa-eye" aria-hidden="true" />
                                </div>
                                <div className="icon-info">
                                    <h5>
                                        <a to="#">Payment Gateway Integration</a>
                                    </h5>
                                    <p>
                                        {" "}
                                        Secure and hassle-free payment options.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //features */}
            </section>

            <section className="w3l-services2" id="stats">
                <div className="features-with-17_sur py-5">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h2 className="head text-white"><b>Our Process
                            </b></h2>
                            {/* <p className="my-3 head "> Dexterous is a leading Web Design company.
                We specialise in apps for iOS and Android, as well as web development services.
              </p> */}
                            <h6 className="my-3 head2 ">
                                {" "}
                               
                            </h6>
                        </div>
                        <div className="row pt-5 mt-3">
                            <div className="col-lg-5 features-with-17-left_sur">
                                <h2 style={{ color: "white" }} className="lft-head"><b>Consultation</b></h2>
                                <p>
                                Understanding your business requirements and goals.
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
                                            <a to="/ecommerce-app-developement">Design & Development</a>
                                        </h6>
                                        <p>
                                        Crafting a website that captures your brand essence.
                                        </p>
                                    </div>
                                </div>
                                <div className="features-with-17-right-tp_sur">
                                    <div className="features-with-17-left1">
                                        <span className="fa fa-database s5" />
                                    </div>
                                    <div className="features-with-17-left2">
                                        <h6>
                                            <a to="/WebDevelopment">Testing & Deployment</a>
                                        </h6>
                                        <p>
                                        Ensuring your website is bug-free and ready to launch.
                                        </p>
                                    </div>
                                </div>

                                <div className="features-with-17-right-tp_sur">
                                    <div className="features-with-17-left1">
                                        <span className="fa fa-lock s3" />
                                    </div>
                                    <div className="features-with-17-left2">
                                        <h6>
                                            <a to="/grocery-app-developement">Launch & Support</a>
                                        </h6>
                                        <p>
                                        Providing ongoing support to help your business thrive online.
                                        </p>
                                    </div>
                                </div>
                                <div className="features-with-17-right-tp_sur">
                                    <div className="features-with-17-left1">
                                        <span className="fa fa-codepen s2" />
                                    </div>
                                    <div className="features-with-17-left2">
                                        <h6>
                                            <a to="/">Ongoing Support
                                            </a>
                                        </h6>
                                        <p>
                                        Post-launch, our team provides maintenance and updates to keep your Website running smoothly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Testimonal />
        </>
    );
};

export default EcommerceWebsiteDesignInNanakaramGuda;