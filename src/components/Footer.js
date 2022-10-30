import React from "react";

import I4G from "../images/I4G.png";
import zuri from "../images/logo.36d2d48a.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer-container">
        <div className="footer-left">
          <img src={zuri} />
          {/* Zuri
          <span className="line">
            <img src={dot} />
          </span>
          Internship */}
        </div>
        <div className="footer-mid">HNG Internship 9 Frontend Task</div>
        <div className="footer-right">
          <img src={I4G} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
