import React from 'react';
import { Link } from "react-router-dom";

import './style.css';

const SubFooter = () => {
  return (
    <div className="subfooter">
      <div className="container">
          <ul>
              <li><Link to="/eula">End User License Agreement</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
          <p>Copyright © 2020 Fizz Media Corp®.  All rights reserved.</p>
      </div>
    </div>
  )
}

export default SubFooter;