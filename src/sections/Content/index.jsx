import React from "react";

import iphoneFlat from "../../assets/rebuzz-flat-new.jpg";
import PanelSection from "../../components/PanelSection";

import "./style.css";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="social-content">
          <div className="icon-social">
            <i className="fa fa-users fa-4x"></i>
          </div>
          <div className="social-text">
            <h2 className="social-title">
              Social that's SOOOO much better! The way it should be!
            </h2>
            <h4 className="social-subtitle">
              We are built on decentralized blockchain technology which means we
              do some really cool things like:
            </h4>
            <h4>-No minimum followers</h4>
            <h4>-No minimum views or posts</h4>
            <h4>-EARN on Day #1 from Like #1!</h4>
            <img src={iphoneFlat} alt="" />
          </div>
        </div>
        <div className="panel container">
          <PanelSection 
            panelIcon="fa fa-line-chart fa-2x" 
            panelText="Community Driven Content" 
            panelSubText="Likes act like virtual votes. More votes denote the best content…and the best content wins the most $BUZZ!"
          />
          <PanelSection 
            panelIcon="fa fa-line-chart fa-2x" 
            panelText="Community Judged Content" 
            panelSubText="The community judges what “questionable” content shows or goes(of course, illegal content is an absolute no-no)."
          />
          <PanelSection 
            panelIcon="fa fa-users fa-2x" 
            panelText="Everyone Earns Together" 
            panelSubText="The community shares profits with all users on the network. For the first time ever, both users & followers earn simultaneously."
          />
          <PanelSection 
            panelIcon="fa fa-link fa-2x" 
            panelText="Jenny from the Block(chain)" 
            panelSubText="Posts can’t be deleted so beware of when you’re heated. Say what you mean & mean what you say cuz it's there to stay. RIP trolls"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
