import React, { useState } from "react";

// Styles
import styles from "./Store.module.css";

// Assets
import header from "../../assets/athleticblue__01897.original.jpg";
import down from "../../assets/chevron-down.svg";
import cross from "../../assets/x.svg";

const allSizes = [
  "xxs",
  "2xl",
  "xs",
  "3xl",
  "s",
  "4xl",
  "m",
  "0",
  "l",
  "1",
  "xl",
  "2",
];

const Store = ({ collection, category }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const sizeHandler = (size) => {
    setSelectedSizes(() => {
      return selectedSizes.concat([size]);
    });
  };

  console.log(selectedSizes);

  return (
    <div className={styles.container}>
      {header && <img className={styles.headPhoto} />}
      {collection ? (
        <h1 className={styles.header}>{collection}</h1>
      ) : (
        <h1 className={styles.header}>{category}</h1>
      )}
      <div className={styles.filterContainer}>
        <div className={styles.filterHeaderContainer}>
          <div className={styles.filterHeader}>
            <p>REFINE</p>
            <img src={down} alt="down" className={styles.down} />
          </div>
          <div className={`${styles.filterHeader} ${styles.sortHeader}`}>
            <p>SORT</p>
            <img src={down} alt="down" className={styles.down} />
          </div>
        </div>
        <div className={styles.refineMenu}>
          <div className={styles.refineItem}>
            <div className={styles.refineHeader}>
              <p>SIZE</p>
              <div>
                <p className={styles.clear}>CLEAR</p>
                <p className={styles.plus}>+</p>
                <p className={styles.minus}>-</p>
              </div>
            </div>
            <div className={styles.sizes}>
              {allSizes.map((size) => (
                <div
                  className={styles.checkboxContainer}
                  onClick={() => sizeHandler(size)}
                >
                  <div className={styles.innerContainer}>
                    <div className={styles.sizeContainer}>
                      <span
                        className={`${styles.checkbox} ${
                          selectedSizes.includes(size) && styles.checked
                        }`}
                      ></span>
                      <p>{size}</p>
                    </div>
                    <img className={styles.cross} src={cross} alt="close" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.refineItem}>
            <div className={styles.refineHeader}>
              <p>PRICE</p>
              <p className={styles.plus}>+</p>
            </div>
            <div></div>
          </div>
          <div className={styles.refineItem}>
            <div className={styles.refineHeader}>
              <p>OTHER</p>
              <p className={styles.plus}>+</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
