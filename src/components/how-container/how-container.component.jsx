import React, { Component } from "react";
import { HowDesc } from "./how-container.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faJsSquare, faPhp, faHtml5, faCss3Alt, faLaravel, faDocker, faPython, faGitlab } from "@fortawesome/free-brands-svg-icons";

class HowContainer extends Component {
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
            <FontAwesomeIcon icon={faPhp} size="3x" color="#2a2c41" fixedWidth /> 
            <FontAwesomeIcon icon={faLaravel} size="3x" color="#2a2c41" fixedWidth />
            <FontAwesomeIcon icon={faJsSquare} size="3x" color="#20272F" fixedWidth/>
            <FontAwesomeIcon icon={faPython} size="3x" color="#2a2c41" fixedWidth/>
            <FontAwesomeIcon icon={faHtml5} size="3x" color="#028192" fixedWidth />
            <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#2a2c41" fixedWidth/>
            <FontAwesomeIcon icon={faDocker} size="3x" color="#2a2c41" fixedWidth/>
            <FontAwesomeIcon icon={faGitlab} size="3x" color="#2a2c41" fixedWidth/>
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
