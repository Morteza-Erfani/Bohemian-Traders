import React, { useEffect, useState } from "react";

// Styles
import styles from "./Search.module.css";

// Assets
import searchIcon from "../../../../assets/icons8-search-25.png";

// Components
import Store from "../../../store/Store";

// APIs
import { GET_ALL_PRODUCTS } from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";

// Loader
import loader from "../../../../assets/loading.svg";

const Search = ({ show, onClose }) => {
  const [searchText, setSearchText] = useState("");

  const { loading, data } = useQuery(GET_ALL_PRODUCTS);

  useEffect(() => {
    setSearchText("");
  }, []);

  // Show loader before getting data from server
  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  const searchedProducts = data.products.filter((product) =>
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
            autoFocus
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
