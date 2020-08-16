import React from "react";

import logoIphone from "../../assets/rebuzz-app-iphone-new.png";

import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact</h1>

        <div className="wrapper">
          <div className="form-contact">
            <form>
              <div className="group">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Your Name (required)</label>
              </div>

              <div className="group">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Your Email (required)</label>
              </div>

              <div className="group">
                <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Subject</label>
              </div>

              <div className="group">
                <textarea type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Your Message</label>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>

          <div className="contact-img">
            <img src={logoIphone} alt="Rebuzz App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
