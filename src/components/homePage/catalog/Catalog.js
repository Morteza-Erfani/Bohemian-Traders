import React from "react";

// Styles
import styles from './Catalog.module.css'

// Catalog Images
import catalog1 from "../../../assets/cta1-v3-tonal-active.jpeg";
import catalog2 from "../../../assets/cta2-v3-tonal-active.jpeg";
import catalog3 from "../../../assets/cta3-v3-tonal-active.jpeg";
import catalog4 from "../../../assets/cta4-v3-tonal-active.jpeg";

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
