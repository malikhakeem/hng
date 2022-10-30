import React from "react";
import "./Links.css";
function Links(props) {
  console.log(props.title);
  return (
    <div className="tt">
      <div className="links-wrap">
        <a href={props.link} className="links-container">
          <div className="link-wrap">
            {" "}
            <div className="text-container">{props.title}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Links;
