// import Breadcrum from "../../components/breadCrum";
import AboutFeatures from "../../components/About/AboutFeatures";
import AboutContent from "../../components/About/AboutContent";
import Specification from "../../components/About/Specification";
import Team from "../../components/Home/Team"
const page = () => {
  return (
    <>
      <Breadcrum title="About Us" cls="about" id="aboutPage" />
      <AboutFeatures />
      <AboutContent/>
      <Specification/>
      <Team/>
    </>
  );
};

export default page;
