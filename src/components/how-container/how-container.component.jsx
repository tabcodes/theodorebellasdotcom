import React, { Component } from "react";
import { HowDesc } from "./how-container.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPhp, faHtml5, faCss3Alt, faLaravel, faDocker, faPython, faGitlab, faVuejs } from "@fortawesome/free-brands-svg-icons";
import LangItem from "../lang-item/lang-item.component";

class HowContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [
        {
          name: "PHP",
          icon: faPhp,
          description: "My general swiss-army knife language for web development."
        },
        {
          name: "Laravel / Lumen",
          icon: faLaravel,
        },
        {
          name: "React / Redux",
          icon: faReact,
        },
        {
          name: "Vue.JS",
          icon: faVuejs,
        },
        {
          name: "Python",
          icon: faPython,
        },
        {
          name: "Docker",
          icon: faDocker,
        },
        {
          name: "GitLab",
          icon: faGitlab,
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
