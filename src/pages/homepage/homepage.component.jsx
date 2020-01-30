import React from "react";
import { Greeting, DescriptionContainer } from "./homepage.styles";

const HomePage = () => (
  <div className="home-container">
    <Greeting>Hi.</Greeting>
    <DescriptionContainer>I write code / develop software / deliver highly-scalable technical solutions (choose your own nomenclature as applicable).</DescriptionContainer>
  </div>

)

export default HomePage;
