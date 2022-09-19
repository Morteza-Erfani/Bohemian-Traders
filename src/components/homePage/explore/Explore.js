import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// Assets
import cat1 from "../../../assets/cta1-v3-allago.jpg";
import cat2 from "../../../assets/cta3-v3-allago.jpg";
import cat3 from "../../../assets/cta-bot3-v3-tonal-active.jpeg";

// Styles
import styles from "./Explore.module.css";

const Explore = () => {
  const dispatch = useDispatch();

  const slugHandler = (category, collection) => {
    dispatch(showDetails({ category: category, collection: collection }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>EXPLORE</h2>
      <div className={styles.catContainer}>
        <div className={styles.firstRowContainer}>
          <Link
            onClick={() => slugHandler("women", "prints")}
            to="/women/prints"
          >
            <div className={styles.firstRowCat}>
              <img src={cat1} alt="shop prints" />
              <p>SHOP PRINTS</p>
            </div>
          </Link>
          <Link
            onClick={() => slugHandler("women", "shop-beach-wear")}
            to="/women/shop-beach-wear"
          >
            <div className={styles.firstRowCat}>
              <img src={cat2} alt="shop beachwearas" />
              <p>SHOP BEACHWEAR</p>
            </div>
          </Link>
        </div>
        <Link
          onClick={() => slugHandler("women", "shop-co-ords")}
          to="/women/shop-co-ords"
        >
          <div className={styles.secondRowContainer}>
            <img src={cat3} alt="shop co-ords" />
            <p>SHOP CO-ORDS</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
