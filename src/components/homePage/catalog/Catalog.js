import React from "react";

// Styles
import styles from "./Catalog.module.css";

// Catalog Images
import catalog4 from "../../../assets/l-mobile-v4-allago.jpeg";
import catalog3 from "../../../assets/cta-bot2-v3-allago-new-copy.jpeg";
import catalog2 from "../../../assets/cta1-v3-al-lagow4.jpeg";
import catalog1 from "../../../assets/cta2-v3-allago.jpeg";
import { Link } from "react-router-dom";
import { showDetails } from "../../../redux/productsPage/productsPageSlice";
import { useDispatch } from "react-redux";
import { slugMaker } from "../../../helpers/functions";

const catalogs = [
  {
    url: catalog1,
    title: "SHOP WHATS NEW",
    category: "whats-new",
    collection: "new-arrivals",
  },
  {
    url: catalog2,
    title: "SHOP WOMEN",
    category: "women",
    collection: "view all",
  },
  {
    url: catalog3,
    title: "SHOP PRINTS",
    category: "women",
    collection: "prints",
  },
  {
    url: catalog4,
    title: "SHOP ATHLETIC",
    category: "athletic",
    collection: "view all",
  },
];

const Catalog = () => {
  const dispatch = useDispatch();

  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  return (
    <div className={styles.container}>
      {catalogs.map((catalog, index) => (
        <Link
          onClick={() => {
            slugHandler(
              slugMaker(catalog.category),
              slugMaker(catalog.collection),
              catalog.collection === "view all"
                ? catalog.category
                : catalog.collection
            );
          }}
          to={`/${slugMaker(catalog.category)}/${slugMaker(
            catalog.collection
          )}`}
          key={index}
          className={styles.catContainer}
        >
          <img
            src={catalog.url}
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
