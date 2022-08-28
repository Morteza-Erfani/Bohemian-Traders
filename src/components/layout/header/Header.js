import React from "react";
import { Link } from "react-router-dom";

// Logo
import logo from "../../../assets/logo.gif";

// Icons
import searchIcon from "../../../assets/searchicon.jpeg";
import profileIcon from "../../../assets/profileicon.jpeg";
import cartIcon from "../../../assets/carticon.png";

// Components
import HumMenu from "./HumMenu";

// Styles
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      {/* top header over menu */}
      <div>
        <p>FREE SHIPPING FOR ALL AUSTRALIAN ORDERS OVER $200</p>
      </div>
      {/* menu */}
      <div>
        {/* humberger menu */}
        <div>
          {/* humberger icon */}
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <HumMenu />
        </div>
        {/* brand name in header */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* header buttons */}
        <div>
          <img src={searchIcon} alt="search" />
          <img src={profileIcon} alt="search" />
          <img src={cartIcon} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
