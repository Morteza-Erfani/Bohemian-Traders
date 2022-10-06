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
    <div id="footer">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.footerCol}>
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
                  <img
                    src={facebook}
                    className={styles.facebook}
                    alt="facebook"
                  />
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
          </div>
          <div className={styles.footerCol}>
            <div
              className={styles.downContainer}
              onClick={() => showInfoHandler()}
            >
              <p>INFO</p>
              <img src={down} alt="down" className={styles.down} />
            </div>
            <div
              className={`${styles.links} ${
                showInfo ? styles.show : styles.hide
              }`}
            >
              <Link onClick={() => setShowInfo(false)} to="/about-us">
                ABOUT US
              </Link>
              <Link onClick={() => setShowInfo(false)} to="/contact-us">
                CONTACT US
              </Link>
              <Link onClick={() => setShowInfo(false)} to="/work-with-us">
                WORK WITH US
              </Link>
              <Link onClick={() => setShowInfo(false)} to="/privacy-policy">
                TS & CS
              </Link>
              <Link onClick={() => setShowInfo(false)} to="/privacy-policy">
                PRIVACY POLICY
              </Link>
            </div>
          </div>
          <div className={styles.footerCol}>
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
              <Link
                onClick={() => setShowCustomCare(false)}
                to="/shipping-returns"
              >
                SHIPPING
              </Link>
              <Link
                onClick={() => setShowCustomCare(false)}
                to="/shipping-returns"
              >
                RETURNS
              </Link>
              <Link
                onClick={() => setShowCustomCare(false)}
                to="/inclusive-size-range"
              >
                INCLUSIVE SIZING
              </Link>
              <Link
                onClick={() => setShowCustomCare(false)}
                to="/flexible-payment-options"
              >
                PAYMENT METHODS
              </Link>
              <a>GIFT CARDS</a>
              <a>OUTLET</a>
            </div>
          </div>
          <div className={styles.footerCol}>
            <p className={styles.subPara}>
              SUBSCRIBE TO REVIEVE UPDATES AND SPECIAL OFFERS!
            </p>
            <form className={styles.inputContainer}>
              <input
                type="email"
                inputMode="email"
                placeholder="YOUR EMAIL ADDRESS"
                className={styles.input}
              />
              <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <p className={styles.contact}>
          CUSTOMERSERVICE@BOHEMIANTRADERS.COM | +61 2 4327 8640 | MON - FRI |
          9AM - 5PM AEST
        </p>
      </div>
      <div className={styles.dataContainer}>
        <p>Manage Website Data Collection Preferences</p>
      </div>
    </div>
  );
};

export default Footer;
