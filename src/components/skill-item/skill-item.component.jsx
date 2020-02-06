import React from "react";

import { SkillItemContainer } from "./skill-item.styles";

const SkillItem = ({ skill }) => {
  if (!skill) {
    return null;
  }

  return (
    <SkillItemContainer>
      <i className={skill.icon}></i>
    </SkillItemContainer>
  );
};

export default SkillItem;
