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

  console.log(window.innerWidth);
  console.log(heroIndex);

  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  const dotHandler = (i) => {
    setHeroIndex(i);
    console.log(`handler${i}`);
  };

  const changeAnime = () => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
    }, 300);
  };

  console.log(change);

  const dots = () => {
    console.log(data.heroPhotos.length);
    const dot = [];
    for (let i = 1; i < data.heroPhotos.length + 1; i++) {
      dot.push(
        <span
          onClick={() => {
            console.log(i);
            dotHandler(i);
            changeAnime();
          }}
          id={console.log(i)}
          className={i === heroIndex ? styles.fill : styles.empty}
          key={i}
        ></span>
      );
      console.log(`i=${i}`);
    }
    console.log(dot);
    return dot;
  };

  console.log(data.heroPhotos[heroIndex - 1].mobilePhoto.url);
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
