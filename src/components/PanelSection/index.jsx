import React from "react";

const PanelSection = ({ panelIcon, panelText, panelSubText}) => {
  return (
    <div className="panel-section driven">
      <div className="icon">
        <i className={panelIcon}></i>
      </div>
      <div className="panel-text">
        <h4><strong>{panelText}</strong></h4>
        <p>{panelSubText}</p>
      </div>
    </div>
  );
};

export default PanelSection;
