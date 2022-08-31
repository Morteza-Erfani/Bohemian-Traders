import React from "react";

// Styles
import styles from './Catalog.module.css'

// Catalog Images
import catalog4 from "../../../assets/l-mobile-v4-allago.jpeg";
import catalog3 from "../../../assets/cta-bot2-v3-allago-new-copy.jpeg";
import catalog2 from "../../../assets/cta1-v3-al-lagow4.jpeg";
import catalog1 from "../../../assets/cta2-v3-allago.jpeg";

const catalogs = [
  { url: catalog1, title: "SHOP WHATS NEW" },
  { url: catalog2, title: "SHOP WOMEN" },
  { url: catalog3, title: "SHOP PRINTS" },
  { url: catalog4, title: "SHOP ATHLETIC" },
];

const Catalog = () => {
  return (
    <div className={styles.container}>
      {catalogs.map((catalog, index) => (
        <div key={index} className={styles.catContainer}>
          <img src={catalog.url} alt={catalog.title} className={styles.catalog} />
          <p className={styles.catTitle}>{catalog.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
