import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styles
import styles from "./ProductCard.module.css";

// Functions
import { capital } from "../../../helpers/functions";

// Components
import QuickViewModal from "./quickViewModal/QuickViewModal";

const allSizes = {
  x: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  1: ["0", "1", "2"],
};

const ProductCard = ({ data, titleType, slug, quickView }) => {
  const {
    productImage,
    modelImage,
    sideImage,
    name,
    price,
    sizes,
    id,
    sizeGuide,
  } = data;

  const view = useSelector((state) => state.productsPage.view);
  const [image, setImage] = useState(productImage.url);

  const [showQuickView, setShowQuickView] = useState(false);

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

  if (showQuickView) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const sizeFound = (size) => {
    const isFound = sizes.some((element) => {
      if (element.name === size.toUpperCase()) {
        return true;
      } else {
        return false;
      }
    });
    return isFound;
  };

  console.log(sizes);
  console.log(sizeFound("3"));

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
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
      >
        <Link to={`/product/${slug}`}>
          <img src={image} alt={name} className={styles.image} />
        </Link>
        {quickView && (
          <p className={styles.button} onClick={() => setShowQuickView(true)}>
            QUICK VIEW
          </p>
        )}
        {quickView && (
          <div
            className={styles.size}
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
          >
            {sizeGuide.name === "x-top" ||
            sizeGuide.name === "x-bottom" ||
            sizeGuide.name === "x-skirt"
              ? allSizes.x.map((size) => (
                  <p
                    key={size}
                    className={
                      sizeFound(size) ? styles.available : styles.unavailable
                    }
                  >
                    {size}
                    <span></span>
                  </p>
                ))
              : allSizes[1].map((size) => (
                  <p
                    key={size}
                    className={
                      sizeFound(size)
                        ? styles.available
                        : styles.unavailable
                    }
                  >
                    {size}
                    <span></span>
                  </p>
                ))}
          </div>
        )}
      </div>
      <div className={styles.detail}>
        <Link to={`/${slug}`}>
          <h3 className={styles.name}>
            {titleType === "capital" ? name : capital(name)}
          </h3>
        </Link>
        <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
        <p className={styles.price}>$ {price}</p>
      </div>
      <QuickViewModal
        onClose={() => setShowQuickView(false)}
        show={showQuickView}
        id={id}
      />
    </div>
  );
};

export default ProductCard;
