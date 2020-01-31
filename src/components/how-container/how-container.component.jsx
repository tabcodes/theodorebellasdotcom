import React, { Component } from "react";
import { HowDesc } from "./how-container.styles";
import LangItem from "../lang-item/lang-item.component";

class HowContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [
        {
          name: "PHP",
          icon: '',
          description: "My general swiss-army knife language for web development."
        },
        {
          name: "Laravel / Lumen",
          icon: '',
        },
        {
          name: "React / Redux",
          icon: '',
        },
        {
          name: "Vue.JS",
          icon: '',
        },
        {
          name: "Python",
          icon: '',
        },
        {
          name: "Docker",
          icon: '',
        },
        {
          name: "GitLab",
          icon: '',
        },
        
      ]
    }
  }

  render() {
    return (
      <div className="how-container">
        <HowDesc>
          <p>
            <span>
              I use a variety of frameworks, languages, and other tools,
              including:{" "}
            </span>
          </p>
          <div className="icon-set">
            {this.state.languages.map(language => <LangItem language={language} />)}
          </div>

          <p>
            <span>My development environment consists of:</span>
          </p>
          <ul>
            <li>Linux Mint (19.x)</li>
            <li>Visual Studio Code (and a multitude of extensions)</li>
            <li>
              <span className="mono">zsh</span> (and{" "}
              <span className="mono">oh-my-zsh</span>)
            </li>
            <li>Vagrant and/or Docker</li>
          </ul>
        </HowDesc>
      </div>
    );
  }
}

export default HowContainer;
