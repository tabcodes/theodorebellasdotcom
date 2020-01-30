import styled from "styled-components";

export const Greeting = styled.p`

  font-size: 50px;
  margin-left: 15%;
  margin-bottom: 20px;
  padding: 0px;
  &.home::before {
    content: "Need something built?"
  }
  &.who::before {
    content: "Who?"
  }
  &.how::before {
    content: "How?"
  }

  &.contact::before {
    content: "Contact"
  }
`;
