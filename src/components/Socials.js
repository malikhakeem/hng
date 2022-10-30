import React from "react";
import "./Socials.css";
import slack from "../images/slack.png";
import github from "../images/Social icon.png";
function socials() {
  return (
    <div className="socials-container">
      <div className="slack-container">
        <a href="https://app.slack.com/client/T042F7V19Q8/D0482PMRJ78/rimeto_profile/U04899Q7B27">
          {" "}
          <img src={slack} />
        </a>
      </div>
      <div className="github-container">
        <a href="https://github.com/malikhakeem">
          {" "}
          <img src={github} />
        </a>
      </div>
    </div>
  );
}

export default socials;
