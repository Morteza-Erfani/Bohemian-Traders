import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_HERO_PHOTOS } from "../../../graphql/queries";

import loader from "../../../assets/loading.svg";

// Styles
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const { loading, data, errors } = useQuery(GET_HERO_PHOTOS);

  const [heroIndex, setHeroIndex] = useState(1);
  const [change, setChange] = useState(false);

  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  const dotHandler = (i) => {
    setHeroIndex(i);
  };

  const changeAnime = () => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
    }, 300);
  };

  const dots = () => {
    const dot = [];
    for (let i = 1; i < data.heroPhotos.length + 1; i++) {
      dot.push(
        <span
          onClick={() => {
            dotHandler(i);
            changeAnime();
          }}
          className={i === heroIndex ? styles.fill : styles.empty}
          key={i}
        ></span>
      );
    }
    return dot;
  };

  return (
    <section className={styles.container}>
      {window.innerWidth < 800 ? (
        <img
          src={data.heroPhotos[heroIndex - 1].mobilePhoto.url}
          alt="hero"
          className={`${styles.heroPhoto} ${change ? styles.change : ""}`}
        />
      ) : (
        <img
          src={data.heroPhotos[heroIndex - 1].laptopPhoto.url}
          alt="hero"
          className={styles.heroPhoto}
        />
      )}
      <div className={styles.dotContainer}>{dots().map((dot) => dot)}</div>
    </section>
  );
};

export default ImageSlider;
