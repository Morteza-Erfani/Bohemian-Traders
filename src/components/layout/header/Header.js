import React, { useState } from "react";
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
import styles from "./Header.module.css";

const Header = () => {
  const [humShow, setHumShow] = useState(false);

  console.log(humShow);

  return (
    <header className={styles.container}>
      {/* top header over menu */}
      <div className={styles.topHeader}>
        <p>FREE SHIPPING FOR ALL AUSTRALIAN ORDERS OVER $200</p>
      </div>
      {/* menu */}
      <div className={styles.header}>
        {/* humberger menu */}
        <div className={styles.hum}>
          {/* humberger icon */}

          <div onClick={() => setHumShow(!humShow)} className={styles.humIcon}>
            <div
              className={humShow ? styles.firstCross : styles.firstHum}
            ></div>
            <div
              className={humShow ? styles.secondCross : styles.secondHum}
            ></div>
            <div
              className={humShow ? styles.thirdCross : styles.thirdHum}
            ></div>
          </div>

          {humShow && (
            <div className={styles.humMenu}>
              <HumMenu />
            </div>
          )}
        </div>
        {/* brand name in header */}
        <div className={styles.brandName}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* header buttons */}
        <div className={styles.mobileRight}>
          <img className={styles.button} src={searchIcon} alt="search" />
          <img className={styles.button} src={profileIcon} alt="search" />
          <img className={styles.button} src={cartIcon} alt="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
