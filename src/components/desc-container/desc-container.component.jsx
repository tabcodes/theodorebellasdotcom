import React, { Component } from "react";
import {
  DescriptionBox,
  DescMessage,
  HeadlineBox
} from "./desc-container.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode, faServer } from "@fortawesome/free-solid-svg-icons";

import DescItem from "../desc-item/desc-item.component";
class DescriptionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // clickedIndex: -1,
      clickedIndex: -1,
      descriptions: [
        {
          clickText: "write code",
          header: "clean, consistent, reliable.",
          description:
            "code written like someone else will be reading it someday.",
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
        if(index > 2) {
            index = 0;
        }
      this.setState({ clickedIndex: index });
    }
    if(disableInterval) {
        clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setSelection(this.state.clickedIndex + 1),
      5000
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

const HeadlineContainer = ({ headline }) => {
  if (!headline) {
    return null;
  }
  return (
    <HeadlineBox>
      <h2>
        <FontAwesomeIcon className="icon" icon={headline.icon} />
        <span dangerouslySetInnerHTML={{ __html: headline.header }}></span>
      </h2>
      <p>{headline.description}</p>
    </HeadlineBox>
  );
};
export default DescriptionContainer;
