import styled from "styled-components";


export const DescriptionBox = styled.div`
  margin-left: 15%;
  font-size: 30px;
  width: 85%;

  .desc-item {
    font-family: "PT Mono";
    font-size:25px;
    opacity: 60%;
    color: black;
    transition: all 500ms;
    &:hover {
      opacity: 100%;
      color: #b96e6e;
      cursor: pointer;
    }
    
    &.clicked {
      color: #a72f2f;
      opacity: 100%;
      ::after {
          content: "\\2713"
      }
    }

`;


export const DescFooter = styled.p`
  font-size: 20px;

  ::after {
    content: "* Choose your preferred nomenclature as applicable.";
  }
`;