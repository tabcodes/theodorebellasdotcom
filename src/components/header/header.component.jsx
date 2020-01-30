import "./header.styles";

import React from "react";
import {
  LogoContainer,
  HeaderContainer,
  Logo,
  NameTextContainer,
  NavigationContainer,
  NavigationLink
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer className="logo-container" to="/" alt="Home">
        <Logo className="name-container">tb</Logo>
        <NameTextContainer className="name-container">
          <p>Theodore Bellas</p>
          <p className="job-title">Software Engineer</p>
        </NameTextContainer>
      </LogoContainer>
      <NavigationContainer>
        <NavigationLink to="/who">Who?</NavigationLink>
        <NavigationLink to="/how">How?</NavigationLink>
        <NavigationLink to="/contact">Contact</NavigationLink>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
