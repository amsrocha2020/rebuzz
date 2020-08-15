import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Menu from "../Menu";

import logo from "../../assets/rebuzz-logo-header.png";

import "./style.css";
import SocialIcons from "../SocialIcons";

const Header = () => {
  const [menu, setMenu] = useState('menu-mobile ');

  const handleMenu = () => {
    if (menu === 'menu-mobile ') {
      setMenu('menu-mobile menu-mobile-active');
    } else {
      setMenu('menu-mobile ');
    }
  }

  return (
    <header>
      <div className="container">
        <div className="wrapper-header">
        <Link to="/"><img src={logo} alt="Logo Rebuzz" id="logo-rebuzz" /></Link>
          <Menu/>
        </div>
        <div className="menu-button">
          <span>Menu</span>
        </div>
        <div className={menu}>
          <input type="checkbox" onClick={handleMenu} />
          <span className="boink"></span>
          <span className="boink"></span>
          <span className="boink"></span>
          <Menu menuItemClick={handleMenu} />
        </div>
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;
