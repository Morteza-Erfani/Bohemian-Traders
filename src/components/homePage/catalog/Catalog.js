import React from "react";
import { Link } from "react-router-dom";
import { showDetails } from "../../../redux/productsPage/productsPageSlice";
import { useDispatch } from "react-redux";

// Styles
import styles from "./Catalog.module.css";

// Catalog Images
// import catalog4 from "../../../assets/cta4-v3-allago.jpg";
// import catalog3 from "../../../assets/cta-bot2-v3-allago-new-copy.jpeg";
// import catalog2 from "../../../assets/cta1-v3-al-lagow4.jpeg";
// import catalog1 from "../../../assets/cta2-v3-allago.jpeg";

import { GET_CATALOGS_PHOTOS } from "../../../graphql/queries";

import loader from "../../../assets/loading.svg";

// Functions
import { slugMaker } from "../../../helpers/functions";
import { useQuery } from "@apollo/client";

// const catalogs = [
//   {
//     url: catalog1,
//     title: "SHOP WHATS NEW",
//     category: "whats-new",
//     collection: "new-arrivals",
//   },
//   {
//     url: catalog2,
//     title: "SHOP WOMEN",
//     category: "women",
//     collection: "view all",
//   },
//   {
//     url: catalog3,
//     title: "SHOP PRINTS",
//     category: "women",
//     collection: "prints",
//   },
//   {
//     url: catalog4,
//     title: "SHOP ATHLETIC",
//     category: "athletic",
//     collection: "view all",
//   },
// ];

const Catalog = () => {
  const { loading, data } = useQuery(GET_CATALOGS_PHOTOS);
  const dispatch = useDispatch();

  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  console.log(data);
  console.log(loading);
  console.log(data.catalogs[1].category.name);

  return (
    <div className={styles.container}>
      {data.catalogs.map((catalog, index) => (
        <Link
          onClick={() => {
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
