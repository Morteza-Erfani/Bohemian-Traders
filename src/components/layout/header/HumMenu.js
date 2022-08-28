import React from "react";
import { useQuery } from "@apollo/client";

// APIs
import { GET_CATEGORIES_NAME } from "../../../graphql/queries";

// Styles
import styles from './HumMenu.module.css'

const HumMenu = () => {
  const { loading, data, errors } = useQuery(GET_CATEGORIES_NAME);

  console.log(data);

  return (
    <div className={styles.container}>
      {data &&
        data.categories.map((category) => (
          <div key={category.id}>
            <div>
              <p>{category.name}</p>
              {category.collections.length ? (
                <div>
                  <p>+</p>
                  <p>-</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            {category.collections.length ? (
              <div>
                <p>VIEW ALL</p>
                {category.collections.map((collection) => (
                  <p key={collection.id}>{collection.name}</p>
                ))}
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
