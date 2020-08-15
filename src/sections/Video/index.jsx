import React from "react";

import videoRebuzz from "../../assets/rebuzz-video.jpg";

import "./style.css";

const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="icon">
          <i className="fa fa-play-circle-o fa-4x"></i>
        </div>
        <div className="video-text">
            <h2>Here's a sneak peak</h2>
            <h3>Our goal is to make rebuzz as user friendly as possible</h3>
        </div>
        <img src={videoRebuzz} alt="" />
      </div>
    </div>
  );
};

export default Video;
