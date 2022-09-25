import React from "react";

// Styles
import styles from "./Store.module.css";

// Assets
import header from "../../assets/athleticblue__01897.original.jpg";

// Components
import FilterSort from "./filterSort/FilterSort";

const Store = ({ collection, category }) => {
  return (
    <div className={styles.container}>
      {header && <img className={styles.headPhoto} src={header} />}
      {collection ? (
        <h1 className={styles.header}>{collection}</h1>
      ) : (
        <h1 className={styles.header}>{category}</h1>
      )}
      <FilterSort />
    </div>
  );
};

export default Store;
