import React from "react";
import {
  Greeting,
} from "./homepage.styles";
import DescriptionContainer from "../../components/desc-container/desc-container.component";


const HomePage = () => (
  <div className="home-container">
    <Greeting/>
    <DescriptionContainer />
  </div>
);

export default HomePage;
