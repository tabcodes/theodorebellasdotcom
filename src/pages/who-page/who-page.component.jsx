import React from "react";
import { WhoDesc } from "./who-page.styles";
import Greeting from "../../components/greeting/greeting.component";

const WhoPage = () => (
  <div>
    <Greeting>Who?</Greeting>
    <WhoDesc>
      <p>
        <span>Short answer:</span>
      </p>

      <p className="indent">I'm a software developer.</p>
      <p>
        <span>Much, much longer answer:</span>
      </p>
      <p className="indent">
        I'm a web developer/software engineer/Linux geek. I've spent the better
        part of the last decade working in various engineering roles, taking
        care of everything from minor hotfixes to high-level product development
        & deployment(s). I've worked in various industries, including managed
        hosting and data management services, and created integrations with
        third-party products you've probably used at one point or another.
      </p>
      <p>
        <span>Some of the things I've worked on include:</span>
      </p>
      <ul>
        <li>
          Developing integrations with enterprise products in the realms of
          customer support, team communication, disaster recovery, data
          reporting, and backup management.
        </li>
        <li>
          Creating, maintaining, and deploying REST APIs for various purposes,
          including service monitoring, logging, and secure payment processing.
        </li>
        <li>
          Participating in roadmap planning and development of new
          customer-facing portals and assisting in service cutover from legacy
          software.
        </li>
        <li>
          Managing and modifying back-end database structures to support
          external process operations and ensure lowest possible response times.
        </li>
        <li>
          Reworking initial development workflows for increased reusability and
          decreased barrier to entry for new developers.
        </li>
      </ul>

      <p>
        <span>Some other stuff I have some experience in:</span>
      </p>
      <ul>
        <li>Linux administration, server configuration & management</li>
        <li>Container composition for reusable development environments</li>
        <li>Interaction with AWS-based utilities & services</li>
        <li>Quick deployment on platforms like Heroku and DigitalOcean</li>
      </ul>
    </WhoDesc>
  </div>
);

export default WhoPage;
