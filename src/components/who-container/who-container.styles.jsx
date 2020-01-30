import styled from "styled-components";

export const WhoDesc = styled.div`
  margin-left: 15%;
  font-size: 20px;
  width: 60%;

  p {
    font-weight: thinner;

    span {
      font-weight: bold;
    }

    &.indent {
      margin-left: 20px;
      text-indent: 20px;
    }
  }

  ul {
    list-style-type: "\\2014";

    li {
      margin-top: 10px;
      :before {
        margin: 5px;
        content: "";
      }
    }
  }
`;
