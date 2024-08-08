import React from "react";
import Breadcrum from "@/components/breadCrum";

// import MetaData from "../../layout/MetaData";
import BlogCard from "../../components/Ecommerce/BlogCard";
export const metadata = {
  title:
    "Grocery Mobile App Development in Hyderabad | Grocery App Development Company in Hyderabad - Dexterous Technology",
  description:
    "Dexterous Technology offers expert grocery app development services in Hyderabad, catering to the specific needs of grocery businesses looking to go mobile.",
  keywords:
    "Grocery Mobile App Development in Hyderabad, Grocery App Development Company in Hyderabad",
};
const Ecommerce = () => {
  return (
    <>
      {/* <MetaData title="Our Latest work" /> */}
      <Breadcrum title="Portfolio" cls="about" />

      <div className="container-fluid mt-5">
        <div className="container">
          <h3 className="headingmain mb-3">E-commerce</h3>
          <div className="row m-auto">
            <div className="col m-auto p-0">
              <div className="row p-3 mb-2">
                <h3 className="headings">Clothing</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/tasva.webp"
                    app="https://www.tasva.com/"
                    web="https://www.tasva.com/"
                    title="tasva"
                    description="The pillars of tasva beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/Ew Shopping.png"
                    app="https://play.google.com/store/apps/details?id=com.EwShopping.EwShopping"
                    web="https://www.ewshopping.com/"
                    title="Ew Shopping"
                    description="EwShopping is one of the best online shopping stores in India. Buy mobiles, laptops, books, watches, apparel, shoes, and e-Gift Cards."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/aaheli.webp"
                    app="https://www.aaheli.com/"
                    web="https://www.aaheli.com/"
                    title="Aaheli"
                    description="The pillars of aaheli beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/Giovanco.webp"
                    app="https://www.giovanco.com/"
                    web="https://www.giovanco.com/"
                    title="Giovanco"
                    description="The pillars of Giovanco beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/4.webp"
                    app="https://www.chemistryindia.com/"
                    web="https://www.chemistryindia.com/"
                    title="Chemistry"
                    description="The pillars of Chemistry’s beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
                  />
                </div>
              </div>

              <div className="row p-3 mb-2">
                <h3 className="headings">Grocery</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/kiranaworld.jpg"
                    className="kiranaworld"
                    app="https://play.google.com/store/apps/details?id=kalyan.example.KiranaWorld"
                    web="https://www.kiranaworld.in"
                    title="Kirana World"
                    description="KiranaWorld- Online Grocery, Vegetables & Meat delivery in Jamshedpur ; On Time Delivery. Minimun Order ₹ 101 ; Same Day Delivery. "
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3 mt-lg-3">
                  <BlogCard
                    image="/styles/assets/images/salesbeez.jpg"
                    app="https://salesbeez.in/"
                    web="https://salesbeez.in/"
                    title="Salesbeez"
                    description="Salesbeez is one of the best online shopping stores in India. Buy grocery and food ."
                  />
                </div>
              </div>
              <div className="row p-3 mb-2">
                <h3 className="headings">Medicine</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/bekhup.webp"
                    app="https://bekhup.com/"
                    web="https://bekhup.com/"
                    title="Bekhup"
                    description="Founded on the principles of harnessing the wisdom of both traditional herbal remedies and modern medicine, Bekhup aims to serve society with peer knowledge and expertise."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/36.jpg"
                    app="https://medtfrontend.netlify.app/"
                    web="https://medtfrontend.netlify.app/"
                    title="Medt"
                    description="Medt online medical store offers a variety of key services includingayurvedic herbal pharmacy and over-the-counter medicines, vitamins family."
                  />
                </div>
              </div>
              <div className="row p-3 mb-2">
                <h3 className="headings">Plant Nursery</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/farmerack.webp"
                    app="https://farmerack.com/"
                    web="https://farmerack.com/"
                    title="Farmerack"
                    description="We aspire to provide our customers with a memorable international shopping experience. We are one of the largest chains of department stores across India."
                  />
                </div>
              </div>
              <div className="row p-3 mb-2">
                <h3 className="headings">Others</h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/salontreat.webp"
                    app="https://salontreat.com/"
                    web="https://salontreat.com/"
                    title="Salon Treat"
                    description="Our commitment is to deliver quality Saloon and wellness services at home with top-level professionals & excellent leading products. Furthermore, you can also check out our services on Saloon Treat’s Website/App."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/Maintainic.webp"
                    app="https://maintainic.com/"
                    web="https://maintainic.com/"
                    title="Maintainic"
                    description="Maintainic is a network of technology-enabled car service centres, offering a seamless car service experience at the convenience of a tap. With our highly skilled technicians."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/mygoldenhomes.webp"
                    app="https://www.mygoldenhomes.com/"
                    web="https://www.mygoldenhomes.com/"
                    title="My Golden Homes"
                    description="Launched in 2005, Mygoldenhomes.com, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry.It is an online forum where buyers, ."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/alikidi.webp"
                    app="https://project-alikidi.vercel.app/"
                    web="https://project-alikidi.vercel.app/"
                    title="News Portal"
                    description="An unfailing channel that tells the truth and wakes up the society, the tearful stories of the common man, the pains of the breadwinner."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/Homesrus.webp"
                    app="https://www.homesrus.ae/en/"
                    web="https://www.homesrus.ae/en/"
                    title="Homesrus"
                    description="The pillars of Homesrus beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/homecentre.webp"
                    app="https://www.homecentre.in/in/en/"
                    web="https://www.homecentre.in/in/en/"
                    title="Home Centre"
                    description="The pillars of Home Centre beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <BlogCard
                    image="/styles/assets/images/portfolio/portfolio/pawsindia.webp"
                    app="https://pawsindia.com/"
                    web="https://pawsindia.com/"
                    title="Paws India"
                    description="The pillars of Paws India beliefs have always been simplicity and functionality, hand in hand with super-refined aesthetics."
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

export default Ecommerce;
