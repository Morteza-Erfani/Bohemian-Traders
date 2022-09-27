import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectSize } from "../../redux/cart/cartSlice";

// Styles
import styles from "./ProductPage.module.css";

// Loader
import loader from "../../assets/loading.svg";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Assets
import pic1 from "../../assets/product/SS22-ACT12-BLACK_01__01552.jpg";
import pic2 from "../../assets/product/SS22-ACT12-BLACK_02__22867.jpg";
import pic3 from "../../assets/product/SS22-ACT12-BLACK_03__03773.jpg";
import pic4 from "../../assets/product/SS22-ACT12-BLACK_04__82678.jpg";
import pic5 from "../../assets/product/ETCH-SIZING-TEMPLATE_02__42182.jpg";
import pic6 from "../../assets/product/SS22-ACT12-BLACK_05__62288.jpg";
import klarna from "../../assets/klarna.svg";
import star from "../../assets/star.svg";

const productData = {
  photos: [pic1, pic2, pic3, pic4, pic5, pic6],
  name: "swing jacket in black",
  prices: 117.83,
  id: 1,
  sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  category: "women",
  collection: "prints",
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.cart.selectedSize);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(selectSize({ size: "" }));
  }, []);

  console.log(cart);
  // console.log(selectedSize);

  // if (loading) {
  //   return (
  //     <section className="styles.container">
  //       <img src={loader} alt="loader" className={styles.loader} />
  //     </section>
  //   );
  // }

  // console.log(data.heroPhotos);

  return (
    <div className={styles.container}>
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
        {productData.photos.map((photo) => (
          <div key={photo}>
            <img src={photo} alt="product" />
          </div>
        ))}
      </Carousel>
      <h1 className={styles.title}>{productData.name}</h1>
      <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
      <p className={styles.price}>$US {productData.prices}</p>
      <div className={styles.klarnaContainer}>
        <p>Or pay 4 interest-free payments with</p>
        <a>
          <img src={klarna} alt="klarna" />
        </a>
      </div>
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
        {productData.sizes.map((size) => (
          <li
            key={size}
            className={`${styles.size} ${
              selectedSize === size && styles.select
            }`}
            onClick={() => {
              selectedSize === size
                ? dispatch(selectSize({ size: "" }))
                : dispatch(selectSize({ size: size }));
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
            dispatch(addToCart({ id: productData.id, size: selectedSize }));
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductPage;
