import React from 'react';

import './style.css';

import rebuzzBottom from '../../assets/rebuzz-iphone-bottom.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-img">
          <img src={rebuzzBottom} alt="Rebuzz Iphone" />
        </div>
        <div className="footer-text">
          <h2>How much have you earned from other Social Media sites?</h2>
          <h1>Your content, your attention</h1>
          <h2>--Stop giving it away for free and collect your fee! Download Now!</h2>  
          <div className="footer-buttons">
              <a href="https://play.google.com/store/apps/details?id=app.com.rebuzz"><i className="widget_button_2_left fa fa-android"></i>Get it on Google Play</a>
              <a href="https://apps.apple.com/us/app/rebuzz-gamified-social-network/id1499941356"><i className="widget_button_2_right fa fa-apple"></i>Available on the App Stor</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;