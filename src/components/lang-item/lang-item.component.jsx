import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPhp,
  faHtml5,
  faCss3Alt,
  faLaravel,
  faDocker,
  faPython,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";
import { LangItemContainer } from "./lang-item.styles";

const LangItem = ({ language }) => {
  return (
    <LangItemContainer>
      <div className="icon">
        <FontAwesomeIcon
          icon={language.icon}
          size="2x"
          color="#2a2c41"
          fixedWidth
          pull="left"
        />
      </div>
      <div className="desc">
        <span class="name">{language.name}</span>
      </div>
    </LangItemContainer>
  );
};

export default LangItem;
