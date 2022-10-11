import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "./ProductCard.module.css";

// Functions
import { capital } from "../../../helpers/functions";
import { Link } from "react-router-dom";

const allSizes = {
  x: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  1: ["1", "2", "3"],
};

const ProductCard = ({ data, titleType, slug }) => {
  const {
    productImage,
    modelImage,
    sideImage,
    name,
    prices,
    sizes,
    id,
    sizeType,
  } = data;

  const view = useSelector((state) => state.productsPage.view);
  const [image, setImage] = useState(productImage.url);

  // useEffect(() => {
  //   sizes.map((size) => allSize.push(size));
  // }, []);

  useEffect(() => {
    view === "product" ? setImage(productImage.url) : setImage(modelImage.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  // console.log(view);

  const changeImage = (image) => {
    setImage(image.url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link to={`/product/${slug}`}>
          <img
            src={image}
            alt={name}
            onMouseOver={
              view === "model"
                ? () => changeImage(sideImage)
                : () => changeImage(modelImage)
            }
            onMouseLeave={
              view === "model"
                ? () => changeImage(modelImage)
                : () => changeImage(productImage)
            }
            className={styles.image}
          />
        </Link>
        <p className={styles.button}>QUICK VIEW</p>
        <div className={styles.size}>
          {sizeType === "x"
            ? allSizes.x.map((size) => (
                <p
                  key={size}
                  className={
                    sizes.includes(size) ? styles.available : styles.unavailable
                  }
                >
                  {size}
                </p>
              ))
            : allSizes[1].map((size) => (
                <p
                  key={size}
                  className={
                    sizes.includes(size) ? styles.available : styles.unavailable
                  }
                >
                  {size}
                </p>
              ))}
        </div>
      </div>
      <div className={styles.detail}>
        <Link to={`/${slug}`}>
          <h3 className={styles.name}>
            {titleType === "capital" ? name : capital(name)}
            {id}
          </h3>
        </Link>
        <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
        <p className={styles.price}>$ {prices}</p>
      </div>
    </div>
  );
};

export default ProductCard;
