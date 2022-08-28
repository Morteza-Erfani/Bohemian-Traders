import React, { useState } from "react";
import { useQuery } from "@apollo/client";

// APIs
import { GET_CATEGORIES_NAME } from "../../../graphql/queries";

// Styles
import styles from "./HumMenu.module.css";

const HumMenu = () => {
  const { loading, data, errors } = useQuery(GET_CATEGORIES_NAME);

  const [show, setShow] = useState({
    id: "",
    isShow: false,
  });

  console.log(data);

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
              <p>{category.name}</p>
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
                  category.name !== "WHAT'S NEW" && <p>VIEW ALL</p>}
                {category.collections.map((collection) => (
                  <p key={collection.id}>{collection.name}</p>
                ))}
                {category.name === "WHAT'S NEW" && <p>VIEW ALL</p>}
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
