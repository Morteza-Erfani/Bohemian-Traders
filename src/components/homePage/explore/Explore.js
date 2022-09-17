import React from "react";

// Assets
import cat1 from "../../../assets/cta1-v3-allago.jpg";
import cat2 from "../../../assets/cta3-v3-allago.jpg";
import cat3 from "../../../assets/cta-bot3-v3-tonal-active.jpeg";

// Styles
import styles from './Explore.module.css'

const Explore = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>EXPLORE</h2>
      <div className={styles.catContainer}>
        <div className={styles.firstRowContainer}>
          <div className={styles.firstRowCat}>
            <img src={cat1} alt="shop prints" />
            <p>SHOP PRINTS</p>
          </div>
          <div className={styles.firstRowCat}>
            <img src={cat2} alt="shop beachwearas" />
            <p>SHOP BEACHWEAR</p>
          </div>
        </div>
        <div className={styles.secondRowContainer}>
          <img src={cat3} alt="shop co-ords" />
          <p>SHOP CO-ORDS</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
