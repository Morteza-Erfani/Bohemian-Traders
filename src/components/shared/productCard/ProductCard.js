import React, { useState } from "react";

// Styles
import styles from "./ProductCard.module.css";

// Functions
import { capital } from "../../../helpers/functions";

const ProductCard = ({ data, titleType }) => {
  const { productImage, modelImage, name, prices, sizes } = data;
  const allSize = [];
  sizes.map((size) => allSize.push(size.name));
  // console.log(allSize);

  const [image, setImage] = useState(productImage.url);

  const changeImage = (image) => {
    setImage(image.url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={name}
          onMouseOver={() => changeImage(modelImage)}
          onMouseLeave={() => changeImage(productImage)}
          className={styles.image}
        />
        <p className={styles.button}>QUICK VIEW</p>
        <p className={styles.size}>{allSize.map((size) => size)}</p>
      </div>
      <div className={styles.detail}>
        <h3 className={styles.name}>
          {titleType === "upper" ? name : capital(name)}
        </h3>
        <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
        <p className={styles.price}>$US {prices}</p>
      </div>
    </div>
  );
};

export default ProductCard;
