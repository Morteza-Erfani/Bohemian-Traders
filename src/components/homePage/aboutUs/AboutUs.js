import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h2>MADE FOR THE MODERN BOHEMIAN</h2>
      <p>
        We blend classic, fashion forward pieces including elevated basics with
        bohemian detailing. Since our inception, our aim has been to provide
        size inclusive fashion basics for the modern bohemian. We seek to be an
        environmentally and socially responsible company; as such we work
        closely with our suppliers to ensure ethical conditions for workers. We
        are continually working towards providing the best clothing and
        accessories, with the least environmental and social harm possible.
      </p>
      <Link to="/about-us">ABOUT US</Link>
    </div>
  );
};

export default AboutUs;
