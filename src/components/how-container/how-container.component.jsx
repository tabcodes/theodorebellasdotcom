import React, { Component } from "react";
import { HowDesc } from "./how-container.styles";
import SkillsContainer from "../skills-container/skills-container.component";

class HowContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          name: "PHP",
          icon: "devicon-php-plain colored"
        },
        {
          name: "Laravel / Lumen",
          icon: "devicon-laravel-plain-wordmark colored"
        },
        {
          name: "React / Redux",
          icon: "devicon-react-plain-wordmark colored"
        },
        {
          name: "Vue.js",
          icon: "devicon-vuejs-plain-wordmark colored"
        },
        {
          name: "jQuery",
          icon: "devicon-jquery-plain-wordmark colored"
        },
        {
          name: "Python",
          icon: "devicon-python-plain-wordmark colored"
        },
        {
          name: "C",
          icon: "devicon-c-plain-wordmark colored"
        },
        {
          name: "NGINX",
          icon: "devicon-nginx-original colored"
        },
        {
          name: "MySQL",
          icon: "devicon-mysql-plain-wordmark colored"
        },
        {
          name: "Docker",
          icon: "devicon-docker-plain-wordmark colored"
        },
        {
          name: "GitLab",
          icon: "devicon-gitlab-plain-wordmark colored"
        }
      ]
    };
  }

  render() {
    return (
      <HowDesc>
        <p>
          <span>
            I use a variety of frameworks, languages, and other tools,
            including:{" "}
          </span>
          <SkillsContainer skills={this.state.skills} />
        </p>

        <p>
          <span>Some other things I use:</span>
        </p>
        <ul>
          <li>
            <a
              href="https://linuxmint.com/"
              target="_new"
              rel="noopener noreferrer"
            >
              Linux Mint
            </a>
          </li>
          <li>
            <a
              href="https://vagrantup.com/"
              target="_new"
              rel="noopener noreferrer"
            >
              Vagrant
            </a>
            ,{" "}
            <a
              href="https://yarnpkg.com/"
              target="_new"
              rel="noopener noreferrer"
            >
              Yarn
            </a>
            ,{" "}
            <a
              href="https://gulpjs.com/"
              target="_new"
              rel="noopener noreferrer"
            >
              Gulp
            </a> 
             ,{" "}
            <a
              href="https://webpack.js.org/"
              target="_new"
              rel="noopener noreferrer"
            >
              Webpack
            </a>
          </li>
          <li>
            <a
              href="https://github.com/VSCodium/vscodium"
              target="_new"
              rel="noopener noreferrer"
            >
              VSCodium
            </a>{" "}
            (and some of{" "}
            <a
              href="https://github.com/viatsko/awesome-vscode"
              target="_new"
              rel="noopener noreferrer"
            >
              these
            </a>{" "}
            extensions)
          </li>
          <li>
            <a
              className="mono"
              target="_blank"
              rel="noopener noreferrer"
              href="https://ohmyz.sh/"
            >
              oh-my-zsh
            </a>
          </li>
        </ul>
      </HowDesc>
    );
  }
}

export default HowContainer;
