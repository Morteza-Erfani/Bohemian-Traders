import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectSize } from "../../redux/cart/cartSlice";

// Styles
import styles from "./ProductPage.module.css";

// Loader
import loader from "../../assets/loading.svg";

// Components
import Products from "../homePage/products/Products";

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
import arrowDown from "../../assets/down-chevron-svgrepo-com.svg";
import creditCard from "../../assets/credit-card-svgrepo-com.svg";
import shipping from "../../assets/shipping-svgrepo-com.svg";
import sizePic from "../../assets/bt-ss22-act06-01.jpg";

const productData = {
  photos: [pic1, pic2, pic3, pic4, pic5, pic6],
  name: "swing jacket in black",
  prices: 117.83,
  id: 1,
  sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  category: "women",
  collection: "prints",
  sizeType: "x-top",
  productDetails:
    "A swing jacket designed for the everyday with micro mesh on the back yoke for breathability and flexible wear. A scooping back hem covered the bottom for a flattering fit and A-line silhouette means it skims the body. Pair yours with the sports bra and new 7/8th legging for the complete look.",
  productFeatures:
    "- Walking jacket with A-line silhouette and swing back\n\n- Micro mesh on the back yoke\n\n- Zipper at center front closure\n\n- Side front zipper phone pockets\n\n- Low to Medium Impact Activities\n\n- Bohemian Traders Embroidered Logo\n\n- Fits true to size\n\n- 75% polyester / 25% spandex\n\n- Mid weight, stretchy fabric\n\n- Gentle hand wash in cold waterul",
  sizeGuide: {
    url: sizePic,
  },
  code: "BT-SS22-ACT12 BLACK",
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
  const [wishList, setWishList] = useState(false);
  const [infoShow, setInfoShow] = useState("");

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
      <div className={styles.wishListContainer}>
        <div
          className={styles.wishListBtn}
          onClick={() => setWishList((prevState) => !prevState)}
        >
          <p>ADD TO WISH LIST</p>
          <img src={arrowDown} alt="down" />
        </div>
        <div
          className={`${styles.wishListMenu} ${
            wishList && styles.showWishList
          }`}
        >
          <div>MY WISH LIST</div>
          <div>CREATE NEW WISH LIST</div>
        </div>
      </div>
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
      <ul className={styles.infoContainer}>
        <li>
          <div
            className={styles.infoHeaderContainer}
            onClick={() =>
              infoShow === "details" ? setInfoShow("") : setInfoShow("details")
            }
          >
            <h4>PRODUCT DETAILS</h4>
            <span
              className={`${infoShow === "details" ? "" : styles.rotate}`}
            ></span>
            <span></span>
          </div>
          <div
            className={`${styles.innerInfoContainer} ${
              infoShow === "details" && styles.showInfoData
            }`}
          >
            <p>{productData.productDetails}</p>
            <p>{productData.code}</p>
          </div>
        </li>
        <li>
          <div
            className={styles.infoHeaderContainer}
            onClick={() =>
              infoShow === "features"
                ? setInfoShow("")
                : setInfoShow("features")
            }
          >
            <h4>PRODUCT FEATURES</h4>
            <span
              className={`${infoShow === "features" ? "" : styles.rotate}`}
            ></span>
            <span></span>
          </div>
          <div
            className={`${styles.innerInfoContainer} ${
              infoShow === "features" && styles.showInfoData
            }`}
          >
            <pre>{productData.productFeatures}</pre>
          </div>
        </li>
        <li>
          <div
            className={styles.infoHeaderContainer}
            onClick={() =>
              infoShow === "sizing" ? setInfoShow("") : setInfoShow("sizing")
            }
          >
            <h4>PRODUCT SIZING</h4>
            <span
              className={`${infoShow === "sizing" ? "" : styles.rotate}`}
            ></span>
            <span></span>
          </div>
          <div
            className={`${styles.innerInfoContainer} ${
              infoShow === "sizing" && styles.showInfoData
            }`}
          >
            <h6>MODEL SIZING</h6>
            <p>
              - Lilly is a size AU8, 170cm tall and wears a size XS
              <br />- Fiona is a size AU18 and wears a size XL
            </p>
            <img src={productData.sizeGuide.url} alt="size guide" />
            <a>Need help with your sizing? Click here.</a>
          </div>
        </li>
      </ul>
      <p className={styles.code}>
        <span>SKU: </span>
        {productData.code}
      </p>
      <h1 className={styles.moreHeader}>MORE FROM THIS COLLECTION</h1>
      <Products category='CAMPAIGN' />
    </div>
  );
};

export default ProductPage;
