import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

// Redux actions
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// APIs
import { GET_EXPLORE_DATA } from "../../../graphql/queries";

// Loader
import loader from "../../../assets/loading.svg";

// Styles
import styles from "./Explore.module.css";

// Functions
import { slugMaker } from "../../../helpers/functions";

const Explore = () => {
  // Get data from server
  const { loading, data, error } = useQuery(GET_EXPLORE_DATA);

  const dispatch = useDispatch();

  // Generate slug and title for linked store page
  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  // Show loader before getting data from server
  if (loading || error) {
    return (
      <section className={styles.container}>
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  // store landscape explore photo
  let wideExplore;

  // store portrait explore photo
  let normalExplore = [];

  // seperate landscape and portrait explore photo
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
                // Generate slug and title for linked store page
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
        </div>
        <Link
          onClick={() =>
            // Generate slug and title for linked store page
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
