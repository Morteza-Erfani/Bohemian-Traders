import React from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectSize } from "../../../../redux/cart/cartSlice";

// Styles
import styles from "./QuickViewModal.module.css";

// Assets
import pic1 from "../../../../assets/product/SS22-ACT12-BLACK_01__01552.jpg";
import pic2 from "../../../../assets/product/SS22-ACT12-BLACK_02__22867.jpg";
import pic3 from "../../../../assets/product/SS22-ACT12-BLACK_03__03773.jpg";
import pic4 from "../../../../assets/product/SS22-ACT12-BLACK_04__82678.jpg";
import pic5 from "../../../../assets/product/ETCH-SIZING-TEMPLATE_02__42182.jpg";
import pic6 from "../../../../assets/product/SS22-ACT12-BLACK_05__62288.jpg";
import star from "../../../../assets/star.svg";
import creditCard from "../../../../assets/credit-card-svgrepo-com.svg";
import shipping from "../../../../assets/shipping-svgrepo-com.svg";

import loader from "../../../../assets/loading.svg";

import { GET_QUICK_VIEW_PRODUCT } from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const productData = {
  photos: [pic1, pic2, pic3, pic4, pic5, pic6],
  name: "swing jacket in black",
  prices: 117.83,
  id: 1,
  sizes: ["xxs", "xs", "s", "l", "xl", "2xl", "3xl", "4xl"],
  // category: "women",
  // collection: "prints",
  sizeType: "x-top",
};

let allSizes = [];

// if (productData.sizeType === "x-top") {
//   allSizes = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];
// } else {
//   allSizes = [1, 2, 3];
// }

const QuickViewModal = ({ show, onClose, id }) => {
  const { loading, data } = useQuery(GET_QUICK_VIEW_PRODUCT);
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.cart.selectedSize);

  const sizeHandler = (size) => {
    if (productData.sizes.includes(size)) {
      selectedSize === size
        ? dispatch(selectSize({ size: "" }))
        : dispatch(selectSize({ size: size }));
    }
  };

  if (!show) {
    return null;
  }

  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  if (data.product.sizeGuide !== 1) {
    allSizes = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];
  } else {
    allSizes = [1, 2, 3];
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.upperSection}>
            <Carousel
              responsive={responsive}
              arrows={true}
              className=""
              containerClass={styles.carouselContainer}
              itemClass={styles.photoContainer}
              draggable={true}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable={true}
            >
              {data.product.images.map((photo) => (
                <div key={photo}>
                  <img src={photo} alt="product" />
                </div>
              ))}
            </Carousel>
            <section className={styles.innerUpperSection}>
              <div className={styles.innerSection}>
                <h1 className={styles.title}>{data.product.name}</h1>
                <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
                <p className={styles.price}>$US {data.product.price}</p>
                <div className={styles.ratingContainer}>
                  <div className={styles.starContainer}>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>(NO REVIEWS YET)</p>
                </div>
                <a className={styles.review}>WRITE A REVIEW</a>
                <p className={styles.sizeTitle}>SIZE:</p>
                <ul className={styles.sizeContainer}>
                  {allSizes.map((size) => (
                    <li
                      key={size}
                      className={`${styles.size} ${
                        selectedSize === size && styles.select
                      } ${
                        !data.product.sizes.includes({ name: size }) &&
                        styles.unavailable
                      }`}
                      onClick={() => {
                        sizeHandler(size);
                      }}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
                <button
                  className={styles.addToCart}
                  onClick={() => {
                    selectedSize !== "" &&
                      dispatch(
                        addToCart({
                          id: data.product.id,
                          size: selectedSize,
                          price: data.product.price,
                          name: data.product.name,
                          photo: data.product.images[0],
                          allSize: data.product.sizes,
                        })
                      );
                  }}
                >
                  ADD TO CART
                </button>
                <ul className={styles.shippingContainer}>
                  <li className={styles.shippingItem}>
                    <img src={creditCard} alt="credit card" />
                    <p>SHOP NOW, PAY LATER WITH KLARNA, AFTERPAY & ZIP</p>
                  </li>
                  <li className={styles.shippingItem}>
                    <img src={shipping} alt="shipping" />
                    <p>FREE SHIPPING ON AU ORDERS OVER $200</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
