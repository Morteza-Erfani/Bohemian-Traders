import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

// Styles
import styles from "./Search.module.css";

// Assets
import searchIcon from "../../../../assets/icons8-search-25.png";

// Components
import Store from "../../../store/Store";

// APIs
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries";

// Loader
import loader from "../../../../assets/loading.svg";

const Search = ({ show, onClose }) => {
  // Set search text
  const [searchText, setSearchText] = useState("");

  // Get data from server
  const { loading, data, error } = useQuery(GET_ALL_PRODUCTS);

  // set search default to empty
  useEffect(() => {
    setSearchText("");
  }, []);

  // Show loader before getting data from server
  if (loading || error) {
    return (
      <section className={styles.container}>
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  // filter data that includes searched text
  const searchedProducts = data.products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // hide modal when its deactive
  if (!show) {
    return null;
  }

  return (
    <div
      className={`${styles.container} ${searchText && styles.containerFull}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* seacrh box */}
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
            autoFocus
          />
          <img src={searchIcon} alt="search" />
          <p onClick={onClose}>×</p>
        </div>
        {/* search result section */}
        <div
          className={`${styles.searchResult} ${
            searchText && styles.searchResultFull
          }`}
        >
          <div className={styles.modalHeader}>
            {searchedProducts.length} RESULT '{searchText.toUpperCase()}'
          </div>
          {searchText !== "" && (
            <Store
              searchProducts={searchedProducts}
              category="search"
              collection={searchText}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
