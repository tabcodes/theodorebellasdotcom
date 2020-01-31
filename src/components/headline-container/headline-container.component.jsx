import React from "react";
import { HeadlineBox } from "./headline-container.styles";

export const HeadlineContainer = ({ headline }) => {
  if (!headline) {
    return null;
  }
  return (
    <HeadlineBox>
      <h2>
        <span className="header" dangerouslySetInnerHTML={{ __html: headline.header }}></span>
      </h2>
      <p>{headline.description}</p>
    </HeadlineBox>
  );
};
