'use client'

// import { Box, Tab, Tabs, Typography } from "@mui/material";
// import PropTypes from "prop-types";
import React from "react";
import Breadcrum from "../../components/breadCrum";
// import PortCard from "../../components/portfolio/PortCard";
import BlogCard from "../../components/Ecommerce/BlogCard";
// import { ImportantDevices } from "@material-ui/icons";
// import MetaData from "../../layout/MetaData";

export const metadata = {
  title:
    "Real Estate App Developement in Hyderabad | Real Estate App Developement Company in Hyderabad - Dexterous Technology",
  description:
    "Dexterous Technology offers expert real estate app developement services in Hyderabad, catering to the specific needs of real estate businesses looking to go mobile.",
  keywords:
    "Real Estate App Developement in Hyderabad, Real Estate App Developement Company in Hyderabad",
};

const GeneralWebsites = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <MetaData title="Our Latest work" /> */}
      <Breadcrum title="Portfolio" cls="about" />

      <div className="container-fluid mt-5">
        <div className="container">
          <h3 className="headingmain">General Websites</h3>
          <div className="row m-auto">
            <div className="col m-auto p-0">
              <div className="row p-3 mb-2">
                <h3 className="headings">Educational</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/educasa.webp"
                    app="https://educasainternational.com/"
                    web="https://educasainternational.com/"
                    title="Educasa International"
                    description="As an Education Consultant with 25 years of experience in placing students in their dream colleges, we know exactly what a student looking for studying abroad."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/39.webp"
                    app="https://globalenglishacademy.netlify.app/"
                    web="https://globalenglishacademy.netlify.app/"
                    title="Global English Academy"
                    description="This  specialize in training candidates to take proficiency exams as well, in order to fortify them with international and national qualifications that are mapped to the Dubai UAE."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/diksha.webp"
                    app="https://dikshaenglishtraining.netlify.app/"
                    web="https://dikshaenglishtraining.netlify.app/"
                    title="Diksha English Training"
                    description="Diksha English Training Centre is a India based language training and exam preparation institute."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/37.webp"
                    app="https://aismtc.com/"
                    web="https://aismtc.com/"
                    title="Asian Institute"
                    description="Asian Institute of Safety Management is one of the best health and safety course providers in India. It is accredited by many international course providers, including NEBOSH, IOSH, and others, and is approved by the government of India."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/16.webp"
                    app="http://www.xtraedgeschool.in/"
                    web="http://www.xtraedgeschool.in/"
                    title="XTRA EDGE"
                    description="The XTRA-EDGE School is a co-educational institution imparting knowledge of science to students at the level of +2 with full equipped educators and well experienced guides who are almost desired by the parents and guardians."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/12.webp"
                    app="http://gyanniketan.in/"
                    web="http://gyanniketan.in/"
                    title="Gyan Niketan"
                    description="Gyan Niketan, a pioneer in the trendsetting education in the state, provides an environment for al-round development of pupils and their integration."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/icemmmt.webp"
                    app="http://www.icemmmt.com/"
                    web="http://www.icemmmt.com/"
                    title="Icemmmt"
                    description="CVR College of Engineering, established in 2001, is a pioneer in providing quality education to students."
                  />
                </div>
              </div>
              <div className="row p-3 mb-2 mt-4">
                <h3 className="headings">Realestate</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/SreeVighneswara.webp"
                    app="https://sreevighneswararealty.com/#/"
                    web="https://sreevighneswararealty.com/#/"
                    title="Sree Vighneswara Realty"
                    description="We believe that architecture and design are for people, and as such, apply ourselves with great sensitivity to understand how thoughtful homes can make a difference in peoples'lives"
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/1.webp"
                    app="https://www.sidvinrealty.com/home"
                    web="https://www.sidvinrealty.com/home"
                    title="Sidvinrealty"
                    description="sidvinrealty one of the foremost realtors in the north-east dealing with all kinds of premium retail spaces."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/3.webp"
                    app="https://srisaibalajiestates.netlify.app/"
                    web="https://srisaibalajiestates.netlify.app/"
                    title="Sri Sai Balaji"
                    description="Sri Sai Balaji Estates maintains a staff of well-trained Real Estate professionals who persistently endeavor to provide excellent service for their individual clients and customers."
                  />
                </div>
              </div>
              <div className="row p-3 mb-2 mt-4">
                <h3 className="headings">Interior Design</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/8.webp"
                    app="https://spacedesignstudi0.netlify.app/"
                    web="https://spacedesignstudi0.netlify.app/"
                    title="Space Design Studio"
                    description="Space Design Studio Interior is renowned in the field of Best Interior Designer In Hyderabad and house decoration in Hyderabad."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/httpsfacadelandsc.webp"
                    app="https://facadelandscap.netlify.app/"
                    web="https://facadelandscap.netlify.app/"
                    title="Facade & Landscape Designer "
                    description="Facade & Landscape Designer Exterior is renowned in the field of Best Exterior Designer In Hyderabad and house decoration in Hyderabad."
                  />
                </div>
              </div>

              <div className="row p-3 mb-2 mt-4">
                <h3 className="headings">Travelling</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/14.webp"
                    app="https://www.travelcraft.in/"
                    web="https://www.travelcraft.in/"
                    title="Travelcraft"
                    description="Find best packages in travelcraft.in, best deal with travelcraft.in,Customize an Unforgettable Experience, find best deals for international holidays."
                  />
                </div>
                {/* <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/22.webp"
                    app="https://www.wandertripadvisor.com/"
                    web="https://www.wandertripadvisor.com/"
                    title="Wander Trip Advisor"
                    description="Wander Trip Advisor is one of the pioneers in the Travel & Hospitality industry leading the path since 2015 specialized in both domestic and international tours."
                  />
                </div> */}
              </div>

              <div className="row p-3 mb-2 mt-4">
                <h3 className="headings">Matrimony</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/10.webp"
                    app="https://www.matrimonialsindia.com/"
                    web="https://www.matrimonialsindia.com/"
                    title="MatrimonialsIndia"
                    description="MatrimonialsIndia.com enables prospective brides and grooms to find their perfect match conveniently."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/15.webp"
                    app="https://www.vaidikimatrimony.com/"
                    web="https://www.vaidikimatrimony.com/"
                    title="VaidikiMatrimony"
                    description="No. 1 and official matrimony service exclusively for Vaidikis Meet your soulmate here!"
                  />
                </div>
              </div>

              <div className="row p-3 mb-2 mt-4">
                <h3 className="headings">Jobs</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/17.webp"
                    app="https://www.yuvajobs.com/"
                    web="https://www.yuvajobs.com/"
                    title="YuvaJobs"
                    description=" YuvaJobs.com is one of leading job portal for freshers and experience in India. You can find all latest jobs in government and private sector. Government jobs and IT Software job for fresher is main focus on this website. "
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/5.webp"
                    app="https://fresheropenings.com/"
                    web="https://fresheropenings.com/"
                    title="Freshers Openings"
                    description="Latest Freshers Openings, Jobs for Freshers, Freshers Jobs in Chennai. The No.1 Job site for Freshers in India. Placement Questions and Answers."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/6.webp"
                    app="https://www.freejobalert.com/"
                    web="https://www.freejobalert.com/"
                    title="FreeJobAlert"
                    description="FreeJobAlert.com Job site is for Government,Sarkari Naukri,Banks,Railways,Police Recruitment, Results of IBPS,UPSC,SSC,RRB, Fresher IT Jobs and Walkins."
                  />
                </div>
              </div>

              <div className="row p-3 mb-2 mt-4">
                <h3 className="headings">Others</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/SaiRamBuildtechSystems.webp"
                    app="https://sairambuildtechsystems.com/"
                    web="https://sairambuildtechsystems.com/"
                    title="Sai Ram Buildtech Systems"
                    description="We at Sai Ram Buildtech Systems (SRBS) are experienced in providing quality products since 6 years."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/lebua.webp"
                    app="https://lebua.com/"
                    web="https://lebua.com/"
                    title="lebua"
                    description="A world-class luxury hotel with floors and floors of the city’s most celebrated restaurants"
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/33.webp"
                    app="https://guwahatiwarehouses.com/"
                    web="https://guwahatiwarehouses.com/"
                    title="Guwahati Warehouses"
                    description="Guwahati Warehouses is a part of Sidvin Group and is the ‘Land & Warehousing’ vertical of the company  one of the foremost realtors in the north-east dealing with all kinds of premium retail spaces."
                  />
                </div>
                {/* <div className="col-lg-4 col-md-6 col-12 mb-3">
          <BlogCard
            image="/styles/assets/images/portfolio/portfolio/infinityinteriors.png"
            app="http://www.infinityinteriors.info/default.aspx"
            web="http://www.infinityinteriors.info/default.aspx"
            title="Infinity Interiors"
            description="Infinity Interiors is a one stop destination in this field by catering to all the requirements & necessities of design of your Dream Home and Commercial Space."
          />
        </div> */}

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/38.webp"
                    app="http://vasantcouriers.com/"
                    web="http://vasantcouriers.com/"
                    title="Vasant International Couriers"
                    description="Vasant International Couriers Is One Of The Best And Affordable Courier Service Providers In india. This Deliver Almost All The Shipments From indiaTo Anywhere Across The World."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/13.webp"
                    app="https://www.synokempharma.com/"
                    web="https://www.synokempharma.com/"
                    title="Synokem Pharma"
                    description="World class pharmaceutical manufacturer in India as well in the world."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/23.webp"
                    app="https://www.punarvaas.org/"
                    web="https://www.punarvaas.org/"
                    title="Punarvass"
                    description="Punarvaas is a nurturing home that provides all the support and help to individuals who are trying to recover and heal from different types of addictions. "
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/dreamupgroup.webp"
                    app="http://www.dreamupgroup.com/"
                    web="http://www.dreamupgroup.com/"
                    title="Dreamup Group"
                    description="We are a privately held global agency having globally interlinked professionals with extensive understanding of the various aspects of multinational and local business and industry's specific demands. Our entrepreneurial creativity of locally owned and globally driven partnerships makes us the world's premier executive selection organisation to serve clients all across the globe."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/11.webp"
                    app="https://megafine.in/"
                    web="https://megafine.in/"
                    title="Megafine"
                    description="Megafine provides innovative & integrated API solutions with it’s decades of experience and skill in the development of novel chemical processes catering to the global drug discovery and generic companies."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralWebsites;
