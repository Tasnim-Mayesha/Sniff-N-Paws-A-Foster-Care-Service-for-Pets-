import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import FaqSection from "./FaqSection";
import CardComponent from "./CardComponent";
import bg from "../../assets/images/images_3.jpg";


const Home = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="pb-40"
    >
      <Banner></Banner>
      {/* <CardComponent></CardComponent> */}
      <Services></Services>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
