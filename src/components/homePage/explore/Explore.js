import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// Assets
// import cat1 from "../../../assets/cta1-v3-allago.jpg";
// import cat2 from "../../../assets/cta3-v3-allago.jpg";
// import cat3 from "../../../assets/cta-bot3-v3-tonal-active.jpeg";

import { GET_EXPLORE_DATA } from "../../../graphql/queries";
import loader from "../../../assets/loading.svg";

// Styles
import styles from "./Explore.module.css";
import { useQuery } from "@apollo/client";
import { slugMaker } from "../../../helpers/functions";

const Explore = () => {
  const { loading, data } = useQuery(GET_EXPLORE_DATA);
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

  let wideExplore;
  let normalExplore = [];

  data.explores.map((explore) => {
    if (explore.wide) {
      wideExplore = explore;
    } else {
      normalExplore.push(explore);
    }
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>EXPLORE</h2>
      <div className={styles.catContainer}>
        <div className={styles.firstRowContainer}>
          {normalExplore.map((explore) => (
            <Link
              key={explore.title}
              onClick={() =>
                slugHandler(
                  slugMaker(explore.category.name),
                  slugMaker(explore.collection.name),
                  explore.title
                )
              }
              to={`/${slugMaker(explore.category.name)}/${slugMaker(
                explore.collection.name
              )}`}
            >
              <div className={styles.firstRowCat}>
                <img src={explore.image.url} alt={explore.title} />
                <p>{explore.title.toUpperCase()}</p>
              </div>
            </Link>
          ))}
          {/* <Link
            onClick={() => slugHandler("women", "prints", "prints")}
            to="/women/prints"
          >
            <div className={styles.firstRowCat}>
              <img src={cat1} alt="shop prints" />
              <p>SHOP PRINTS</p>
            </div>
          </Link>
          <Link
            onClick={() =>
              slugHandler("women", "shop-beach-wear", "shop beachwear")
            }
            to="/women/shop-beach-wear"
          >
            <div className={styles.firstRowCat}>
              <img src={cat2} alt="shop beachwearas" />
              <p>SHOP BEACHWEAR</p>
            </div>
          </Link> */}
        </div>
        <Link
          onClick={() =>
            slugHandler(
              slugMaker(wideExplore.category.name),
              slugMaker(wideExplore.collection.name),
              wideExplore.title
            )
          }
          to={`/${slugMaker(wideExplore.category.name)}/${slugMaker(
            wideExplore.collection.name
          )}`}
          className={styles.link}
        >
          <div className={styles.secondRowContainer}>
            <img src={wideExplore.image.url} alt={wideExplore.title} />
            <p>{wideExplore.title.toUpperCase()}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
