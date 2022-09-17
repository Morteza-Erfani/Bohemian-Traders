import React from "react";

// Styles
import styles from './AboutUs.module.css'

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
      <a>ABOUT US</a>
    </div>
  );
};

export default AboutUs;
