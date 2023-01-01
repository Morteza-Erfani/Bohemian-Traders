import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Functions
import { slugMaker } from "../../../helpers/functions";

// APIs
import { GET_CATEGORIES_NAME } from "../../../graphql/queries";

// Styles
import styles from "./HumMenu.module.css";

// Redux actions
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// Loader
import loader from "../../../assets/loading.svg";

const HumMenu = ({ onClose }) => {
  const { loading, data, error } = useQuery(GET_CATEGORIES_NAME);

  const dispatch = useDispatch();

  // Set show and hide for humberger menu details
  const [show, setShow] = useState({
    id: "",
    isShow: false,
  });

  // Set show and hide for nav bar details
  const [showBig, setShowBig] = useState({
    id: "",
    isShow: false,
  });

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

  return (
    <div className={styles.container}>
      {data &&
        data.categories.map((category) => (
          <div
            key={category.id}
            className={styles.categoryContainer}
            // show navbar details
            onMouseEnter={() => setShowBig({ id: category.id, isShow: true })}
            // hide navbar details
            onMouseLeave={() => {
              setShowBig({ id: "", isShow: false });
            }}
          >
            <div
              className={styles.category}
              // show humberger menu details
              onClick={() => {
                category.id === show.id
                  ? setShow({ id: "", isShow: false })
                  : setShow({ id: category.id, isShow: true });
              }}
            >
              <span className={styles.tooltip}></span>
              {/* if a category dosent have any collections set a link for it */}
              {category.collections.length ? (
                <p className={styles.categoryName}>{category.name}</p>
              ) : (
                <Link
                  onClick={() => {
                    slugHandler(
                      slugMaker(category.name),
                      "view-all",
                      category.name
                    );
                    onClose();
                  }}
                  to={`/${slugMaker(category.name)}/view-all`}
                  className={styles.categoryName}
                >
                  {category.name}
                </Link>
              )}
              {/* if a category have collections set plus and minus for it */}
              {category.collections.length ? (
                <div className={styles.plus}>
                  <p
                    className={
                      category.id === show.id ? styles.hide : styles.show
                    }
                  >
                    +
                  </p>
                  <p
                    className={
                      category.id === show.id ? styles.show : styles.hide
                    }
                  >
                    -
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* if a category have collections make a div for collections */}
            {category.collections.length ? (
              <div
                // show selected category collections and hide others
                className={`${
                  // classes for humberger menu
                  category.id === show.id ? styles.collections : styles.hide
                } 
                  ${
                    // classes for navbar
                    category.id === showBig.id
                      ? styles.collectionsBig
                      : styles.hideBig
                  }
                  `}
              >
                {/* set links for category name to a 'view all' collection except 'CAMPAIGN' and "WHAT'S NEW" because thay have a 'view all' collection */}
                {category.name !== "CAMPAIGN" &&
                  category.name !== "WHAT'S NEW" && (
                    <Link
                      onClick={(e) => {
                        slugHandler(
                          slugMaker(category.name),
                          "view-all",
                          category.name
                        );
                        onClose();
                      }}
                      to={`/${slugMaker(slugMaker(category.name))}/view-all`}
                    >
                      VIEW ALL
                    </Link>
                  )}
                {/* generate each collection */}
                {category.collections.map((collection) => (
                  <Link
                    onClick={() => {
                      console.log("click");
                      slugHandler(
                        slugMaker(category.name),
                        slugMaker(collection.name),
                        collection.name
                      );
                      onClose();
                    }}
                    to={`/${slugMaker(category.name)}/${slugMaker(
                      collection.name
                    )}`}
                    key={collection.id}
                  >
                    {collection.name}
                  </Link>
                ))}
                {/* generate a seperate 'view all' collection for "what's new" category because of different order */}
                {category.name === "WHAT'S NEW" && (
                  <Link
                    onClick={() => {
                      slugHandler(
                        slugMaker(category.name),
                        "view-all",
                        category.name
                      );
                      onClose();
                    }}
                    to={`/${slugMaker(slugMaker(category.name))}/view-all`}
                  >
                    VIEW ALL
                  </Link>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
    </div>
  );
};

export default HumMenu;
