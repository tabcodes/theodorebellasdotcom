import React from "react";
import Greeting from "../../components/greeting/greeting.component";

const ContactPage = () => {
  return (
    <div>
      <Greeting>Contact</Greeting>

      <p style={{ marginLeft: "15%", fontSize: "25px" }}>
        You can contact me via email at{" "}
        <span class="mono">&lt;my first name&gt;.&lt;my last name&gt;</span>@gmail.com (take that, robot spam!)
      </p>
      <p style={{ marginLeft: "15%", fontSize: "25px" }}>Include the subject "Website Inquiry" in your email- <b>all others will be discarded!</b></p>
    </div>
  );
};

export default ContactPage;
