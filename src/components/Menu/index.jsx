import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link, useLocation } from 'react-router-dom';

import SocialIcons from '../SocialIcons';

import './style.css';

const Menu = ({ menuItemClick }) => {
  let str = useLocation();
  str = str.pathname.slice(1);
  
  return (
    <ul className="menu">
       {(str === 'contact' || str === 'eula' || str === 'terms-of-service' || str === 'privacy-policy' ) ? (
          <>
          <li className="menu-item" onClick={menuItemClick}><Link to="/">Home</Link></li>
          <li className="menu-item social"><SocialIcons /></li>
          </>
       ): (
         <>
        <li className="menu-item" onClick={menuItemClick}><AnchorLink href='#about'>About</AnchorLink></li>
        <li className="menu-item" onClick={menuItemClick}><AnchorLink href="#download">Download</AnchorLink></li>
        <li className="menu-item" onClick={menuItemClick}><AnchorLink href="#team">Team</AnchorLink></li>
        <li className="menu-item" onClick={menuItemClick}><Link to="/contact">Contact</Link></li>
        <li className="menu-item social"><SocialIcons /></li>
        </>
       )}
    </ul>
  )
}

export default Menu;