import styled from "styled-components";

export const SkillItemContainer = styled.span`
  margin: 25px;
  font-size:25px;
  i {
    font-size: 70px;
    transition: filter 500ms;

    &:hover {
      filter:invert();
    }
  }
`;
