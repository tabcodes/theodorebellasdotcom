import React, { Component } from "react";
import { DescriptionBox, DescFooter } from "./desc-container.styles";
import DescItem from "../desc-item/desc-item.component";
class DescriptionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clickedIndex: -1,
      descriptions: [
        "(write code)",
        "(develop software)",
        "(deliver highly-scalable technical solutions)"
      ]
    };
  }

  setSelection(index) {
      this.setState({clickedIndex: index});
  }

  render() {
    return (
      <DescriptionBox>
        I ({" "}
        {this.state.descriptions.map((desc, index) => (
          <span key={index}>
            <DescItem
              active={this.state.clickedIndex === index}
              onClick={this.setSelection.bind(this, index)}
            >
              {desc}
            </DescItem>
            {index < 2 ? " || " : ""}
          </span>
        ))}{" "}
        ).*<DescFooter></DescFooter>
      </DescriptionBox>
    );
  }
}

export default DescriptionContainer;
