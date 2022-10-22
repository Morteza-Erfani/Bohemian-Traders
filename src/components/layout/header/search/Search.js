import React, { useEffect, useState } from "react";

// Styles
import styles from "./Search.module.css";

// Assets
import searchIcon from "../../../../assets/icons8-search-25.png";

// Product
import pImage from "../../../../assets/product/ETCH-SIZING-TEMPLATE_02__42182.jpg";
import mImage from "../../../../assets/product/SS22-ACT12-BLACK_01__01552.jpg";
import sImage from "../../../../assets/product/SS22-ACT12-BLACK_02__22867.jpg";
import Store from "../../../store/Store";

const products = [
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 217.83,
    id: 1,
    sizes: ["xxs", "xs", "s", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 127.83,
    id: 2,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 147.83,
    id: 3,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 137.83,
    id: 4,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 5,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 6,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 7,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 8,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 9,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 10,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 11,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 12,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 13,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 14,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 15,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 16,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 17,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 18,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 19,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 20,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 21,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
];

const Search = ({ show, onClose }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText("");
  }, []);

  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (!show) {
    return null;
  }

  return (
    <div
      className={`${styles.container} ${searchText && styles.containerFull}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div
          className={`${styles.searchBox} ${
            searchText && styles.searchBoxFull
          }`}
        >
          <input
            type="text"
            placeholder="SEARCH"
            inputMode="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img src={searchIcon} alt="search" />
          <p onClick={onClose}>×</p>
        </div>
        <div
          className={`${styles.searchResult} ${
            searchText && styles.searchResultFull
          }`}
        >
          <div className={styles.modalHeader}>
            {searchedProducts.length} RESULT '{searchText.toUpperCase()}'
          </div>
          <Store
            searchProducts={searchedProducts}
            category="search"
            collection={searchText}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
