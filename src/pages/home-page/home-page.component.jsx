import React from "react";
import DescriptionContainer from "../../components/desc-container/desc-container.component";
import Greeting from "../../components/greeting/greeting.component";

const HomePage = () => (
  <div className="home-container">
    <Greeting>Need something built?</Greeting>
    <DescriptionContainer />
  </div>
);

export default HomePage;
