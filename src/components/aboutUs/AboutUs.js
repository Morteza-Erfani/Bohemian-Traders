import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styles
import styles from "./AbouUs.module.css";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.location}>
        <Link to="/">HOME</Link> / ABOUT US
      </p>
      <h1 className={styles.header}>ABOUT US</h1>
      <h3 className={styles.subHeader}>
        CLASSIC EUROPEAN CUTS, FOR THE MODERN BOHEMIAN
      </h3>
      <p>
        We’re known for “Classic European cuts, for the modern bohemian”. We
        blend classic, fashion forward pieces including elevated basics with
        bohemian detailing. Since our inception, our aim has been to provide
        size inclusive fashion basics for the modern bohemian.
      </p>
      <p>
        BOHEMIAN TRADERS commenced operations in 2014 and is based on the
        Central Coast of NSW Australia, shipping domestically and
        internationally.
      </p>
      <p>
        We seek to be an environmentally and socially responsible company; as
        such we work closely with our suppliers to ensure ethical conditions for
        workers. We are continually working towards providing the best clothing
        and accessories, with the least environmental and social harm possible.
      </p>
      <p>You can find BOHEMIAN TRADERS on the following social media:</p>
      <h3 className={styles.social}>INSTAGRAM:</h3>
      <a>instagram.com/bohemian.traders</a>
      <h3 className={styles.social}>FACEBOOK:</h3>
      <a>facebook.com/bohemiantraders</a>
      <h3 className={styles.social}>PINTEREST:</h3>
      <a>pinterest.com/bohemiantraders</a>
      <h3 className={styles.social}>PR & Media:</h3>
      <a>pr@bohemiantraders.com</a>
      <p>+61 2 4327 8640</p>
      <p>
        The BOHEMIAN TRADERS brand and trademark is wholly owned and operated by
        BOHEMIAN HOLDINGS Pty Ltd.
      </p>
      <p>
        BOHEMIAN HOLDINGS Pty Ltd,
        <br />
        ABN 83 617 372 488
      </p>
      <p>
        3 / 13 Bonnal Rd
        <br />
        Erina, NSW 2260
      </p>
    </div>
  );
};

export default AboutUs;
