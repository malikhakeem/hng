import React from "react";
import "./Profile.css";
import Profileimg from "../images/profile.png";
import backimg from "../images/_Avatar share button.png";
function Profile() {
  return (
    <div className="io">
      <div className="mo">
        <div className="profile-container">
          <div className="profile__img__container">
            <div id="profile__img">
              <img src={Profileimg} />
            </div>
          </div>

          <div className="twitter-container">
            <div id="twitter">
              <a href="https://twitter.com/zhodbod88">@zhodbod88</a>
            </div>
          </div>

          <div className="slack-usernamecont">
            <div id="slack-username">@malik</div>
          </div>
        </div>
      </div>

      <div className="back">
        <img className="wo" src={backimg} />
      </div>
    </div>
  );
}

export default Profile;
