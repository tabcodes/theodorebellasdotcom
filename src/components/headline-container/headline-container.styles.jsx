import styled from "styled-components";

export const HeadlineBox = styled.div`
  margin-left: 10%;

  .icon {
    margin-right: 15px;
  }

  .mono {
    padding: 10px;
  }

  p {
    text-indent: 60px;

    ::before {
      content: "\\2014";
      margin-right: 5px;
    }
  }
`;
