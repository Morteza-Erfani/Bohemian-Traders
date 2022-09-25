import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSize,
  filterReset,
  removeSize,
  resetSize,
  setMinPrice,
  setMaxPrice,
  justInStock,
} from "../../../redux/productsPage/productsPageSlice";

// Styles
import styles from "./FilterSort.module.css";

// Assets
import down from "../../../assets/chevron-down.svg";
import cross from "../../../assets/x.svg";
import redCross from "../../../assets/redCross.svg";

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

const FilterSort = () => {
  const [openField, setOpenField] = useState("");
  const [openFilter, setOpenFilter] = useState("");

  const dispatch = useDispatch();

  const filters = useSelector((state) => state.productsPage.filters);

  const allSelectedSizes = filters.sizes;
  const minPrice = filters.price.min;
  const maxPrice = filters.price.max;
  const inStock = filters.other.inStock;

  console.log(inStock)

  useEffect(() => {
    dispatch(filterReset());
  }, []);

  const sizeHandler = (size) => {
    if (allSelectedSizes.includes(size)) {
      dispatch(removeSize({ size: size }));
    } else {
      dispatch(addSize({ size: size }));
    }
  };

  const check = (size) => {
    return allSelectedSizes.includes(size) ? styles.checked : "";
  };

  const clearSize = () => {
    dispatch(resetSize());
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <div className={styles.filterHeaderContainer}>
          <div
            className={styles.filterHeader}
            onClick={() => {
              openFilter === "refine"
                ? setOpenFilter("")
                : setOpenFilter("refine");
              setOpenField("");
            }}
          >
            <p>REFINE</p>
            <img src={down} alt="down" className={styles.down} />
          </div>
          <div className={`${styles.filterHeader} ${styles.sortHeader}`}>
            <p>SORT</p>
            <img src={down} alt="down" className={styles.down} />
          </div>
        </div>
        <div
          className={`${styles.refineMenu} ${
            openFilter === "refine" && styles.openRefine
          }`}
        >
          <div className={styles.refineItem}>
            <div
              className={styles.refineHeader}
              onClick={() => {
                openField === "size" ? setOpenField("") : setOpenField("size");
              }}
            >
              <p>SIZE</p>
              <div className={styles.plusMinus}>
                <p
                  className={`${styles.clear} ${
                    openField !== "size" && styles.hidden
                  }`}
                  onClick={() => clearSize()}
                >
                  CLEAR
                </p>
                <p
                  className={`${styles.plus} ${
                    openField === "size" && styles.hidden
                  }`}
                >
                  +
                </p>
                <p
                  className={`${styles.minus} ${
                    openField !== "size" && styles.hidden
                  }`}
                >
                  -
                </p>
              </div>
            </div>
            <div
              className={`${styles.sizes} ${
                openField === "size" && styles.openSize
              }`}
            >
              {allSizes.map((size) => (
                <div
                  key={size}
                  className={styles.checkboxContainer}
                  onClick={() => {
                    sizeHandler(size);
                  }}
                >
                  <div className={styles.innerContainer}>
                    <div className={styles.sizeContainer}>
                      <span
                        className={`${styles.checkbox} ${check(size)}`}
                      ></span>
                      <p>{size}</p>
                    </div>
                    <img
                      className={`${styles.cross} ${
                        allSelectedSizes.includes(size) && styles.showCross
                      }`}
                      src={cross}
                      alt="close"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.refineItem}>
            <div
              className={styles.refineHeader}
              onClick={() => {
                openField === "price"
                  ? setOpenField("")
                  : setOpenField("price");
              }}
            >
              <p>PRICE</p>
              <div className={styles.plusMinus}>
                <p
                  className={`${styles.plus} ${
                    openField === "price" && styles.hidden
                  }`}
                >
                  +
                </p>
                <p
                  className={`${styles.minus} ${
                    openField !== "price" && styles.hidden
                  }`}
                >
                  -
                </p>
              </div>
            </div>
            <div
              className={`${styles.price} ${
                openField === "price" && styles.openPrice
              }`}
            >
              <div className={styles.priceInputContainer}>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Min."
                  min="0"
                  onChange={(e) =>
                    dispatch(setMinPrice({ minPrice: e.target.value }))
                  }
                />
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Max."
                  min="0"
                  onChange={(e) =>
                    dispatch(setMaxPrice({ maxPrice: e.target.value }))
                  }
                />
              </div>
              <p className={styles.update}>UPDATE</p>
              <div
                className={`${styles.error} ${
                  minPrice < maxPrice && styles.hidden
                }`}
              >
                <img src={redCross} alt="warning" />
                <p className={styles.minMax}>
                  Min price must be less than max price.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.refineItem}>
            <div
              className={styles.refineHeader}
              onClick={() => {
                openField === "other"
                  ? setOpenField("")
                  : setOpenField("other");
              }}
            >
              <p>OTHER</p>
              <div className={styles.plusMinus}>
                <p
                  className={`${styles.plus} ${
                    openField === "other" && styles.hidden
                  }`}
                >
                  +
                </p>
                <p
                  className={`${styles.minus} ${
                    openField !== "other" && styles.hidden
                  }`}
                >
                  -
                </p>
              </div>
            </div>
            <div
              className={`${styles.sizes} ${
                openField === "other" && styles.openOther
              }`}
            >
              <div
                className={styles.otherCheckboxContainer}
                onClick={() => {
                  dispatch(justInStock({inStock: !inStock}));
                }}
              >
                <div className={styles.innerContainer}>
                  <div className={styles.sizeContainer}>
                    <span
                      className={`${styles.checkbox} ${
                        inStock && styles.checked
                      }`}
                    ></span>
                    <p>IN STOCK</p>
                  </div>
                  <img
                    className={`${styles.cross} ${
                      inStock && styles.showCross
                    }`}
                    src={cross}
                    alt="close"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
