import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import {
  addSize,
  filterReset,
  removeSize,
  resetSize,
  setMinPrice,
  setMaxPrice,
  justInStock,
  setSortOption,
  runSizeFilter,
  runPriceFilter,
  sort,
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

const allSorts = [
  "FEATURED ITEMS",
  "NEWEST ITEMS",
  "BEST SELLING",
  "PRICE: ASCENDING",
  "PRICE: DESCENDING",
];

const FilterSort = () => {
  // Set field name to open
  const [openField, setOpenField] = useState("");
  // Set filter name to open
  const [openFilter, setOpenFilter] = useState("");

  const dispatch = useDispatch();

  const filters = useSelector((state) => state.productsPage.filters);
  const selectedSort = useSelector((state) => state.productsPage.sortOption);

  const allSelectedSizes = filters.sizes;
  const minPrice = filters.price.min;
  const maxPrice = filters.price.max;
  const inStock = filters.other.inStock;

  // Reset filter on page mount
  useEffect(() => {
    dispatch(filterReset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sizeHandler = (size) => {
    // remove size if its already selected
    if (allSelectedSizes.includes(size)) {
      dispatch(removeSize({ size: size }));
      dispatch(runSizeFilter());
    }
    // add size
    else {
      dispatch(addSize({ size: size }));
      dispatch(runSizeFilter());
    }
  };
  // Check if a size is selected return checked style
  const check = (size) => {
    return allSelectedSizes.includes(size) ? styles.checked : "";
  };
  // clear all selected sizes
  const clearSize = () => {
    dispatch(resetSize());
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <div className={styles.filterHeaderContainer}>
          <div
            className={styles.filterHeader}
            // Open refine field
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
          <div
            className={`${styles.filterHeader} ${styles.sortHeader}`}
            // Open sort filter
            onClick={() => {
              openFilter === "sort" ? setOpenFilter("") : setOpenFilter("sort");
              setOpenField("");
            }}
          >
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
              // Open size filter
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
                  // Selecte or unselecte size
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
              // Open price filter
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
                  // Set min price filter
                  onChange={(e) =>
                    dispatch(setMinPrice({ minPrice: e.target.value }))
                  }
                />
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Max."
                  min="0"
                  // Set max price filter
                  onChange={(e) =>
                    dispatch(setMaxPrice({ maxPrice: e.target.value }))
                  }
                />
              </div>
              <p
                className={styles.update}
                // filter product by price
                onClick={() => {
                  dispatch(runPriceFilter());
                }}
              >
                UPDATE
              </p>
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
              // Open other filter
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
              className={`${styles.other} ${
                openField === "other" && styles.openOther
              }`}
            >
              <div
                className={styles.otherCheckboxContainer}
                // filter just in stock products
                onClick={() => {
                  dispatch(justInStock({ inStock: !inStock }));
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
                    className={`${styles.cross} ${inStock && styles.showCross}`}
                    src={cross}
                    alt="close"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.sorts} ${
            openFilter === "sort" && styles.openSort
          }`}
        >
          <p className={styles.bigSort}>SORT BY</p>
          {allSorts.map((option) => (
            <div
              key={option}
              className={styles.checkboxContainer}
              // Sert sort type
              onClick={() => {
                selectedSort === option
                  ? dispatch(setSortOption({ sortOption: "" }))
                  : dispatch(setSortOption({ sortOption: option }));
                dispatch(sort());
              }}
            >
              <div className={styles.innerContainer}>
                <div className={styles.sizeContainer}>
                  <span
                    className={`${styles.checkbox} ${
                      selectedSort === option && styles.checked
                    }`}
                  ></span>
                  <p>{option}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
