import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

import SocialIcons from '../SocialIcons';

import './style.css';

const Menu = ({ menuItemClick }) => {
  return (
    <ul className="menu">
        <li className="menu-item" onClick={menuItemClick}><AnchorLink href='#about'>About</AnchorLink></li>
        <li className="menu-item" onClick={menuItemClick}><AnchorLink href="#download">Download</AnchorLink></li>
        <li className="menu-item" onClick={menuItemClick}><AnchorLink href="#team">Team</AnchorLink></li>
        <li className="menu-item" onClick={menuItemClick}><Link to="/contact">Contact</Link></li>
        <li className="menu-item social"><SocialIcons /></li>
    </ul>
  )
}

export default Menu;