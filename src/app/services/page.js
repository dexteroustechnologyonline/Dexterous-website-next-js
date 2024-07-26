import Breadcrum from "../../components/breadCrum";

import ServicesOne from "../../components/Services/ServicesOne";
import FeatureTwo from "../../components/Services/FeatureTwo";
import FeatureOne from "../../components/Services/FeatureOne";
const Service = () => {
  return (
    <>
      <Breadcrum title="Services" cls="service" id="services" />
      <ServicesOne />
      <FeatureTwo />
      <FeatureOne />
    </>
  );
};

export default Service;
