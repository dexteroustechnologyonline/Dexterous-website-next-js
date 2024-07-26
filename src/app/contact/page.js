import React from "react";
import Breadcrum from "../../components/breadCrum";

import Contacts from "../../components/Contact/Contacts";
import Contactmail from "../../components/Contact/Contactmail";
// import MetaData from "../../layout/MetaData";

const Contact = () => {
  return (
    <>
      {/* <MetaData title="Dexterous | Mobile app design &amp; development company" /> */}
      <Breadcrum title="Contact" cls="contact" />
      <Contactmail/>
      <Contacts />
    </>
  );
};

export default Contact;
