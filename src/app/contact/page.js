import React from "react";
import Breadcrum from "../../components/breadCrum"
import Contact2 from "../../components/contact/Contact2";
import Contacts12 from "../../components/contact/Contacts12";
// import MetaData from "../../layout/MetaData";

const Contact = () => {
  return (
    <>
      {/* <MetaData title="Dexterous | Mobile app design &amp; development company" /> */}
      <Breadcrum title="Contact" cls="contact" />
      <Contact2 />
      <Contacts12 />
    </>
  );
};

export default Contact;
