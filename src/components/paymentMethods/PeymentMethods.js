import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./PeymentMethods.module.css";

// Assets
import afterPay from "../../assets/afterpay-logo1.jpg";
import klarna from "../../assets/klarna.svg";
import zippay from "../../assets/zippay-logo1.jpg";

const PeymentMethods = () => {

  // Set page Title
  useEffect(() => {
    document.title = "Flexible Payment Options";
  }, []);

  return (
    <div className={styles.container}>
      {/* User location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / FLEXIBLE PAYMENT OPTIONS
      </p>
      <h1 className={styles.header}>FLEXIBLE PAYMENT OPTIONS</h1>
      <p>Shopping with Bohemian Traders has never been easier!</p>
      <p>
        We support{" "}
        <i>VISA & MasterCard, along with PayPal, Google Pay & Apple Pay.</i>
      </p>
      <p>
        If paying later is more your thing, we’ve also got you covered with
        Klarna, AfterPay or ZipPay (click below for more details).
      </p>
      {/* payment methods */}
      <div className={styles.methods}>
        <div>
          <a href="#">
            <img src={afterPay} alt="after pay" />
          </a>
        </div>
        <span className={styles.verticalLine}></span>
        <div>
          <a href="#">
            <img className={styles.klarna} src={klarna} alt="klarna" />
          </a>
        </div>
        <span className={styles.verticalLine}></span>
        <div>
          <a href="#">
            <img src={zippay} alt="zippay" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeymentMethods;
