import React from "react";

import { LangItemContainer } from "./lang-item.styles";

const LangItem = ({ language }) => {
  return (
    <LangItemContainer>
      <div className="icon">

      </div>
      <div className="desc">
        <span class="name">{language.name}</span>
      </div>
    </LangItemContainer>
  );
};

export default LangItem;
