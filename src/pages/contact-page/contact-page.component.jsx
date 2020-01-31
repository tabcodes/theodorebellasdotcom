import React from "react";

import { Greeting } from "../home-page/home-page.styles";

const ContactPage = () => {
  return (
    <div>
      <Greeting className="contact" />

      <p style={{ marginLeft: "15%", fontSize: "25px" }}>
        You can contact me via email at{" "}
        <span class="mono">&lt;my first name&gt;.&lt;my last name&gt;</span>@gmail.com (take that, robot spam!)
      </p>
      <p style={{ marginLeft: "15%", fontSize: "25px" }}>Include the subject "Website Inquiry" in your email- <b>all others will be discarded!</b></p>
    </div>
  );
};

export default ContactPage;
