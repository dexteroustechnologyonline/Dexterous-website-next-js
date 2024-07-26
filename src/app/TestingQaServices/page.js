import React from 'react'
// import MetaData from '../../layout/MetaData'
import Breadcrum from '@/components/breadCrum'
import Testimonal from '../../components/Home/Testimonal'

const TestingQaServices = (props) => {
    return (
        <>
            {/* <MetaData title="Dexterous | Mobile app developmrnt company" /> */}
            <Breadcrum title="Testing QA Services" cls="about" id="aboutPage" />
            <section className="w3l-content-with-photo-4" id="about">
                <div id="content-with-photo4-block" className="py-5">
                    <div className="container py-md-3">
                        <div className="cwp4-two row">
                            <div className="cwp4-image col-lg-6">
                                <img src="/styles/assets/images/Testing QA Services.webp" className="img-fluid" alt />
                            </div>
                            <div className="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                                <h3 style={{ fontSize: "25px", lineHeight: "34px" }}>Experience next-gen software testing and QA services</h3>
                                <p><b>As a leading software testing and quality assurance provider, we offer the best testing services to create software that operates at peak efficiency.</b></p>
                                <p style={{ textAlign: "justify" }}>Dexterous Technology has been offering complete software testing solutions for years, and during that time we have developed unparalleled experience. Our success encourages and enables us to successfully meet the needs of our clients by providing them with higher-quality solutions that carry less risks. Our QA engineers make sure that data, services, applications, and software are validated from beginning to end through specialized testing and bespoke validation.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w3l-services2" id="stats">
                <div className="features-with-17_sur py-5">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head text-white"> Avail software QA service from the top Software Testing Company</h3>
                        </div>
                        <div className="row pt-5 mt-3">
                            <div className="col-lg-5 features-with-17-left_sur">
                                <h4 className="lft-head">Performance Testing</h4>
                                <p style={{ textAlign: "justify" }}>
                                    At Dexterous Technologies, we offer performance testing services across a broad spectrum of platforms and domains, including desktop, web, cloud, mobile, and analytics. Our performance testing experts regularly provide exceptional quality assurance and performance testing solutions.
                                </p>
                                <div className="stats-1">
                                    <div className="stats-1-left">
                                        <h4>2300+</h4>
                                        <h6>Clients</h6>
                                    </div>
                                    <div className="stats-1-left">
                                        <h4>16+</h4>
                                        <h6>Awards</h6>
                                    </div>
                                    <div className="stats-1-left">
                                        <h4>2536+</h4>
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
                                            <a to="" style={{ fontSize: "18px" }}>Manual Testing</a>
                                        </h6>
                                        <p style={{ textAlign: "justify" }}>
                                            The usability, UI, and performance of your product are manually tested by our QA staff across a range of devices. The manual testing services offered by Dexterous Technologies help identify vulnerabilities that cannot be discovered automatically and provide tailored feedback on the look and feel of your product.
                                        </p>
                                    </div>
                                </div>
                                <div className="features-with-17-right-tp_sur">
                                    <div className="features-with-17-left1">
                                        <span className="fa fa-database s5" />
                                    </div>
                                    <div className="features-with-17-left2">
                                        <h6>
                                            <a to="">Mobile App Testing</a>
                                        </h6>
                                        <p style={{ textAlign: "justify" }}>
                                            As one of the leading QA firms, we provide a wide range of mobile application testing services for various platforms & operating systems. Dexterous Technologies provides cross-platform, functional and non-functional testing using both automated and manual testing techniques for a range of mobile applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w3l-open-block-services py-5" id="services">
                <div className="container py-lg-5 pt-4">
                    <div className="heading text-center mx-auto">
                        <h3 className="head">Our Web Development Tech-stack</h3>
                        {/* <p className="my-3 head">
      {" "}
      Dexterous is the best web and mobile app development company, we are dedicated to engineering best-in-class IT solutions that improve your business growth. Our development team is expert in handling projects of diverse complexities, so you can stay assured of getting secured, scalable, and high-performance solutions.
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
                                <h4 style={{ fontSize: "18px" }} className="mission">React Native</h4>
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


            <section className="w3l-index6">
                <div className="features py-5 " id="features">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head" style={{ color: "white" }}>Why Choose Us</h3>
                            <p className="my-3 head">
                                {" "}
                                <b style={{ color: "white" }}>Dexterous Technologies is India’s top QA service providers</b>
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
                                        <a to="#" style={{ color: "white" }}>Issue Mitigation Measures</a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                        Software testing and quality assurance are essential for spotting and fixing possible problems, especially in programs that deal with sensitive data. By doing this, it becomes easier to avoid communication failures, power outages, and data leaks that could have detrimental effects.
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
                                        <a to="#" style={{ color: "white" }}>Extraordinary User Experience</a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                        We guarantee that our clients receive a final product that is worthwhile, dependable, and extremely interactive by putting them through a thorough testing procedure.As a software testing business, we make sure that the final result is faultless and perfect.
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
                                        <a to="#" style={{ color: "white" }}>Robust Security</a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                        By finding and fixing any flaws or problems in the code through frequent testing and code reviews, continuous quality assurance (QA) is essential for guaranteeing the security and dependability of software products. Security and dependability are our top priorities in order to meet legal standards and foster consumer confidence in the goods.
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
                                        <a to="#" style={{ color: "white" }}>Specific Expertise</a>
                                    </h5>
                                    <p style={{ textAlign: "justify", color: "white" }}>
                                        500 seasoned experts who have undergone a rigorous screening process are available from Dexterous Technologies. Software developers with the particular training and expertise needed for a project can be selected and hired by clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonal/>



        </>
    )
}

export default TestingQaServices