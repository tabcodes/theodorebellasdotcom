import React, { Component } from "react";
import { DescriptionBox, DescMessage } from "./desc-container.styles";
import DescItem from "../desc-item/desc-item.component";
class DescriptionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clickedIndex: -1,
      descriptions: [
        {
          clickText: "write code",
          header: "clean, consistent, reliable.",
          description: "this is the first description."
        },
        {
          clickText: "develop software",
          header: "from git init to git commit.",
          description: "this is the second, slightly longer description."
        },
        {
          clickText: "deliver highly-scalable technical solutions",
          header: "downtime? what downtime?",
          description:
            "this is the third description, and it's longer than both of the ones before it."
        }
      ]
    };
  }

  setSelection(index) {
    this.setState({ clickedIndex: index });
  }

  render() {
    const { descriptions } = this.state;
    return (
      <DescriptionBox>
        I ({" "}
        {Object.keys(descriptions).map((index) => {
          return (
            <span key={index}>
              <DescItem
                active={this.state.clickedIndex === index}
                onClick={this.setSelection.bind(this, index)}
              >
                {descriptions[index].clickText}
              </DescItem>
              {index < 2 ? " || " : ""}
            </span>
          );
        })}{" "}
        ).*
        <DescMessage></DescMessage>
        
      </DescriptionBox>
    );
  }
}

export default DescriptionContainer;
