import React from "react";

const SocialIcons = () => {
  return (
    <div className="social-icons-wrapper">
      <ul className="social-icons">
        <li>
          <a
            href="https://www.facebook.com/rebuzzio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/rebuzz_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://t.me/rebuzzed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
