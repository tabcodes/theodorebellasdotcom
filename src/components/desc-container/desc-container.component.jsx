import React, { Component } from "react";
import { DescriptionBox, DescMessage } from "./desc-container.styles";
import { faCoffee, faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import DescItem from "../desc-item/desc-item.component";
import { HeadlineContainer } from "../headline-container/headline-container.component";

class DescriptionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // clickedIndex: -1,
      clickedIndex: 0,
      descriptions: [
        {
          clickText: "write code",
          header: "clean, consistent, reliable.",
          description:
            "maintainable code written for maximum extensibility and reusability.",
          icon: faCode
        },
        {
          clickText: "develop software",
          header:
            "from <span class='mono'>init</span> to <span class='mono'>commit</span>.",
          description: "fully-featured software solutions for every occasion.",
          icon: faCoffee
        },
        {
          clickText: "deliver highly-scalable technical solutions",
          header: "downtime? what downtime?",
          description:
            "fault-tolerant applications that scale with your organization.",
          icon: faServer
        }
      ]
    };
  }

  setSelection(index, disableInterval) {
    if (index !== this.state.clickedIndex) {
      if (index > 2) {
        index = 0;
      }
      this.setState({ clickedIndex: index });
    }
    if (disableInterval) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setSelection(this.state.clickedIndex + 1),
      3500
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { descriptions } = this.state;
    return (
      <DescriptionBox>
        I ({" "}
        {Object.keys(descriptions).map(index => {
          return (
            <span key={index}>
              <DescItem
                active={this.state.clickedIndex == index}
                onClick={this.setSelection.bind(this, index, true)}
              >
                {descriptions[index].clickText}
              </DescItem>
              {index < 2 ? " || " : ""}
            </span>
          );
        })}{" "}
        ).*
        <DescMessage></DescMessage>
        <HeadlineContainer
          headline={
            this.state.clickedIndex > -1
              ? descriptions[this.state.clickedIndex]
              : null
          }
        ></HeadlineContainer>
      </DescriptionBox>
    );
  }
}

export default DescriptionContainer;
