import styled from "styled-components";

export const HeadlineBox = styled.div`
  margin-left: 10%;

  .mono {
    padding: 10px;
  }

  span.header::before {
    content: "\\21d2";
    margin-right: 15px;
  }

  p {
    text-indent: 60px;

    ::before {
      content: "\\2014";
      margin-right: 5px;
    }
  }
`;
