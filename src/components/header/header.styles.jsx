import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.div`
    height:90px;
    width:100%;
    display:flex;
    justify-content: space-between
    margin-bottom:30px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 25px;
  transition: color 1s ease, transform 500ms ease;
  &:hover {
    transform: scale(1.04);
    opacity: 0.95;
    
    & .name-container, p {
    }
  }
`;

export const Logo = styled.div`
  background-color: #3b3a3a;
  color: white;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  width: 60px;
  vertical-align: middle;
  text-align: center;
  font-size: 40px;
  border-radius: 5px;
`;

export const NameTextContainer = styled.div`
  height: 100%;
  font-size: 25px;
  margin-left: 10px;
  line-height: 8px;
  word-break: break-all;
  text-decoration: none;
  color: #3b3a3a;

  & .job-title {
    font-size: 17px;
    text-align:center;
  }
`;

export const NavigationContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationLink = styled.button`
background-color: transparent;
color: #3b3a3a;
font-weight: bold;
min-width:90px;
margin:25px;
line-height: 40px;
vertical-align: middle;
text-align: center;
font-size: 20px;
border-radius: 5px;
cursor: pointer
font-family : inherit;
border: none;
transition: color 1s ease, transform 500ms ease;
&:hover {
  transform: scale(1.04);
  opacity: 0.95;
  cursor: pointer;

}
`;
