import styled from "styled-components";

export const ContactBox = styled.div`
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
    list-style-type: none;

      &.dash {
        list-style-type: "\\2014";

      }

    li {
      margin-top: 10px;
      :before {
        margin: 5px;
        content: "";
      }

      &.tiny {
        font-size: 13px;
        margin-left: 20px;

        .italic {
          font-style: italic;
        }
      }

      a {
        color: black;
        transition: color 500ms;
        &:hover {
          color:#006ac7
        }
      }

      i {
          margin-right:20px;
          font-size:40px;
      }
    }
  }
`;
