import React from "react";

import logoIphone from "../../assets/rebuzz-app-iphone-new.png";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-text-left">
            <h1>Get a Like or Give a Like</h1>
            <h1>& <strong>Get Paid!</strong></h1>
          </div>
          <div className="about-img">
            <img src={logoIphone} alt="" />
          </div>
          <div className="about-text">
            <div className="about-subtext-left">
              <h2>The social network that pays you for engagement!</h2>
              <h2>1. Write a Post, Get a Like - <strong>EARN</strong></h2>
              <h2>2. Like a Post - <strong>EARN</strong></h2>
              <h2>3. Refer a Friend - <strong>EARN</strong></h2>
              <h2>4. <strong>Cha-Ching</strong> - Cash in or trade your <strong>$BUZZ</strong></h2>
              <h2><i>It's really that simple!</i></h2>
            </div>
            <div className="button-download">
              <a href="https://play.google.com/store/apps/details?id=app.com.rebuzz"><i className="widget_button_2_left fa fa-android"></i> <span className="google-text">Get in</span> Google Play</a>
              <a href="https://apps.apple.com/us/app/rebuzz-gamified-social-network/id1499941356"><i className="widget_button_2_right fa fa-apple"></i><span className="apple-text">Available on the</span> App Stor</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
