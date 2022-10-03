import React, { useState } from "react";
import { useQuery } from "@apollo/client";

// Functions
import { slugMaker } from "../../../helpers/functions";

// APIs
import { GET_CATEGORIES_NAME } from "../../../graphql/queries";

// Styles
import styles from "./HumMenu.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

const HumMenu = ({ onClose }) => {
  const { loading, data, errors } = useQuery(GET_CATEGORIES_NAME);

  const dispatch = useDispatch();

  const [show, setShow] = useState({
    id: "",
    isShow: false,
  });

  console.log(data);

  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  return (
    <div className={styles.container}>
      {data &&
        data.categories.map((category) => (
          <div key={category.id} className={styles.categoryContainer}>
            <div
              className={styles.category}
              onClick={() => {
                console.log(show);
                category.id === show.id
                  ? setShow({ id: "", isShow: false })
                  : setShow({ id: category.id, isShow: true });
              }}
            >
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
              {category.collections.length ? (
                <div>
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
            {category.collections.length ? (
              <div
                className={
                  category.id === show.id ? styles.collections : styles.hide
                }
              >
                {category.name !== "CAMPAIGN" &&
                  category.name !== "WHAT'S NEW" && (
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
