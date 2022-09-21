import React, { useState } from "react";

// assets
import logo from "../../../assets/logo-white.png";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/icons8-facebook-f.svg";
import pinterest from "../../../assets/pinterest-p.svg";
import tiktok from "../../../assets/tiktok.svg";
import down from "../../../assets/chevron-down.svg";

// Styles
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showCustomCare, setShowCustomCare] = useState(false);

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  };

  const ShowCustomCareHandler = () => {
    setShowCustomCare(!showCustomCare);
  };

  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.socialUl}>
          <li>
            <a>
              <img
                src={instagram}
                className={styles.instagram}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a>
              <img src={facebook} className={styles.facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a>
              <img
                src={pinterest}
                className={styles.pinterest}
                alt="pinterest"
              />
            </a>
          </li>
          <li>
            <a>
              <img src={tiktok} className={styles.tiktok} alt="tiktok" />
            </a>
          </li>
        </ul>
        <div className={styles.downContainer} onClick={() => showInfoHandler()}>
          <p>INFO</p>
          <img src={down} alt="down" className={styles.down} />
        </div>
        <div
          className={`${styles.links} ${showInfo ? styles.show : styles.hide}`}
        >
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/contact-us">CONTACT US</Link>
          <Link to="/work-with-us">WORK WITH US</Link>
          <Link to="/privacy-policy">TS & CS</Link>
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
        </div>
        <div
          className={styles.downContainer}
          onClick={() => ShowCustomCareHandler()}
        >
          <p>CUSTOMER CARE</p>
          <img src={down} alt="down" className={styles.down} />
        </div>
        <div
          className={`${styles.links} ${
            showCustomCare ? styles.show : styles.hide
          }`}
        >
          <Link to="/shipping-returns">SHIPPING</Link>
          <Link to="/shipping-returns">RETURNS</Link>
          <Link to="/inclusive-size-range">INCLUSIVE SIZING</Link>
          <a>PAYMENT METHODS</a>
          <a>GIFT CARDS</a>
          <a>OUTLET</a>
        </div>
        <p className={styles.subPara}>
          SUBSCRIBE TO REVIEVE UPDATES AND SPECIAL OFFERS!
        </p>
        <div className={styles.inputContainer}>
          <input
            type="email"
            inputMode="email"
            placeholder="YOUR EMAIL ADDRESS"
            className={styles.input}
          />
          <button className={styles.subscribeBtn}>SUBSCRIBE</button>
        </div>
        <p className={styles.contact}>
          CUSTOMERSERVICE@BOHEMIANTRADERS.COM | +61 2 4327 8640 | MON - FRI |
          9AM - 5PM AEST
        </p>
      </div>
      <div className={styles.dataContainer}>
        <p>Manage Website Data Collection Preferences</p>
      </div>
    </>
  );
};

export default Footer;
