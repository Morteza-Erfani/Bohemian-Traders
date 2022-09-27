import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "./ProductCard.module.css";

// Functions
import { capital } from "../../../helpers/functions";
import { Link } from "react-router-dom";

const ProductCard = ({ data, titleType, slug }) => {
  const { productImage, modelImage, sideImage, name, prices, sizes, id } = data;
  const allSize = [];
  sizes.map((size) => allSize.push(size.name));
  // console.log(allSize);

  const view = useSelector((state) => state.productsPage.view);
  const [image, setImage] = useState(productImage.url);

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
        <Link to={`/${slug}`}>
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
        <p className={styles.size}>{allSize.map((size) => size)}</p>
      </div>
      <div className={styles.detail}>
        <Link to={`/${slug}`}>
          <h3 className={styles.name}>
            {titleType === "capital" ? name : capital(name)}
            {/* {id} */}
          </h3>
        </Link>
        <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
        <p className={styles.price}>$US {prices}</p>
      </div>
    </div>
  );
};

export default ProductCard;
