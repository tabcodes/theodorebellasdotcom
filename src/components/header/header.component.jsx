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

const ActiveLinkStyle = {
  opacity: ".7",
}

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
        <NavigationLink activeStyle={ActiveLinkStyle} to="/who">Who?</NavigationLink>
        <NavigationLink activeStyle={ActiveLinkStyle} to="/how">How?</NavigationLink>
        <NavigationLink activeStyle={ActiveLinkStyle} to="/contact">Contact</NavigationLink>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
