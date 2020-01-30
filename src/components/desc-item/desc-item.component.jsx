import React from "react";

const DescItem = ({ onClick, active, children }) => (
  <span className={`${active ? 'clicked' : ''} desc-item`} onClick={onClick}>
    ({children})
  </span>
);

export default DescItem;
