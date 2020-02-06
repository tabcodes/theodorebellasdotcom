import React from "react";
import Greeting from "../../components/greeting/greeting.component";
import { ContactBox } from "./contact-page.styles";

const ContactPage = () => {
  return (
    <div>
      <Greeting>Contact</Greeting>
      <ContactBox>
        <p></p>
        <ul className="dash">
          <li>
            For more info, you can reach out to me via email at{" "}
            <span className="mono">theodorebellasdev (at) gmail [dot] com</span>
            .
          </li>
          <li className="tiny">
            <span className="italic">Please</span>, no recruiters.
          </li>
        </ul>
        <ul>
          <li>
            <i class="devicon-gitlab-plain-wordmark colored"></i>
            { " " }
            <a
              href="https://gitlab.com/theodore.bellas"
              target="_new"
              rel="noopener noreferrer"
            >
              theodore.bellas
            </a>
          </li>
          <li>
            <i class="devicon-github-plain-wordmark colored"></i>
            { " " }
            <a
              href="https://github.com/theodorebellas"
              target="_new"
              rel="noopener noreferrer"
            >
              TheodoreBellas
            </a>
          </li>
        </ul>
      </ContactBox>
    </div>
  );
};

export default ContactPage;
