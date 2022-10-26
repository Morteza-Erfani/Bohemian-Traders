import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

// Redux actions
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// Styles
import styles from "./Catalog.module.css";

// APIs
import { GET_CATALOGS_PHOTOS } from "../../../graphql/queries";

import loader from "../../../assets/loading.svg";

// Functions
import { slugMaker } from "../../../helpers/functions";

const Catalog = () => {
  // get photos from server
  const { loading, data } = useQuery(GET_CATALOGS_PHOTOS);

  const dispatch = useDispatch();

  // generate slug and title for linked store page
  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  // show loader before getting data from server
  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  return (
    <div className={styles.container}>
      {data.catalogs.map((catalog, index) => (
        <Link
          onClick={() => {
            // generate slug and title forn linked store page
            slugHandler(
              slugMaker(catalog.category.name),
              slugMaker(catalog.collection.name),
              catalog.collection.name === "view all"
                ? catalog.category.name
                : catalog.collection.name
            );
          }}
          to={`/${slugMaker(catalog.category.name)}/${slugMaker(
            catalog.collection.name
          )}`}
          key={index}
          className={styles.catContainer}
        >
          <span className={() => console.log(catalog.category.name)}></span>
          <img
            src={catalog.image.url}
            alt={catalog.title}
            className={styles.catalog}
          />
          <p className={styles.catTitle}>{catalog.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Catalog;
