import React from "react";

// Styles
import styles from "./WorkWithUs.module.css";

const WorkWithUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>WORK WITH US</h1>
      <div>We are currently recruiting for the following roles:</div>
      <div>
        <a>Boutique Store Manager - Newcastle</a>
      </div>
      <div>
        <a>Casual In-Store Stylist - Newcastle</a>
      </div>
      <div>
        Do you think you and Bohemian Traders a match made in heaven? If so,
        drop us your CV via email! We’d love to meet.
      </div>
      <div className={styles.email}>
        <a>admin@bohemiantraders.com</a>
      </div>
    </div>
  );
};

export default WorkWithUs;