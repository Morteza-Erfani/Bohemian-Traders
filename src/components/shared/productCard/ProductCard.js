import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Styles
import styles from "./ProductCard.module.css";

// Functions
import { capital } from "../../../helpers/functions";

// Components
import QuickViewModal from "./quickViewModal/QuickViewModal";

// Redux actions
import { setProductInfo } from "../../../redux/productsDetail/productDetailsSlice";

// All products sizes
const allSizes = {
  x: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  1: ["0", "1", "2"],
};

const ProductCard = ({
  data,
  titleType,
  slug,
  quickView,
  category,
  collection,
}) => {
  // Destructure product data from 'data'
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
  // Set product image
  const [image, setImage] = useState(productImage.url);

  const dispatch = useDispatch();
  // Set show or hide for modal
  const [showQuickView, setShowQuickView] = useState(false);

  // Set 'product view' as defult view type
  useEffect(() => {
    view === "product" ? setImage(productImage.url) : setImage(modelImage.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);
  // Change product image
  const changeImage = (image) => {
    setImage(image.url);
  };
  // Disable background scrolling when modal is shown
  if (showQuickView) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
  // Check if a product have a size return 'true' else return 'false'
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

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        // Change product image
        onMouseOver={
          view === "model"
            ? () => changeImage(sideImage)
            : () => changeImage(modelImage)
        }
        // Change product image
        onMouseLeave={
          view === "model"
            ? () => changeImage(modelImage)
            : () => changeImage(productImage)
        }
      >
        <Link
          to={`/product/${slug}`}
          onClick={() => {
            // Set product data for show in product page
            dispatch(
              setProductInfo({
                category: category,
                collection: collection,
                id: id,
                slug: slug,
              })
            );
          }}
        >
          <img src={image} alt={name} className={styles.image} />
        </Link>
        {quickView && (
          // Show quick view button and show modal on click
          <p className={styles.button} onClick={() => setShowQuickView(true)}>
            QUICK VIEW
          </p>
        )}
        {/* showing sizes on product image if quick view is 'true' */}
        {quickView && (
          <div
            className={styles.size}
            onMouseOver={
              // Change product image
              view === "model"
                ? () => changeImage(sideImage)
                : () => changeImage(modelImage)
            }
            onMouseLeave={
              // Change product image
              view === "model"
                ? () => changeImage(modelImage)
                : () => changeImage(productImage)
            }
          >
            {/* Check size type to show proper sizes */}
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
                      sizeFound(size) ? styles.available : styles.unavailable
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
        {/* Set product data for product page */}
        <Link
          to={`/product/${slug}`}
          onClick={() => {
            dispatch(
              setProductInfo({
                category: category,
                collection: collection,
                id: id,
              })
            );
          }}
        >
          <h3 className={styles.name}>
            {titleType === "capital" ? name : capital(name)}
          </h3>
        </Link>
        <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
        <p className={styles.price}>$ {price}</p>
      </div>
      {/* Modal */}
      <QuickViewModal
        onClose={() => setShowQuickView(false)}
        show={showQuickView}
        id={id}
        category={category}
        collection={collection}
        slug={slug}
      />
    </div>
  );
};

export default ProductCard;
