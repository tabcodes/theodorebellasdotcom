import React from "react";
import SkillItem from "../skill-item/skill-item.component";
import { SkillsBox } from "./skills-container.styles";

const SkillsContainer = ({ skills }) => {
  return (
    <SkillsBox>
      {skills.map(skill => (
        <SkillItem skill={skill} />
      ))}
    </SkillsBox>
  );
};

export default SkillsContainer;
