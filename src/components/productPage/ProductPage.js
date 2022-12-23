import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Redux actions
import { showDetails } from "../../redux/productsPage/productsPageSlice";
import { addToCart, selectSize } from "../../redux/cart/cartSlice";

// Functions
import { capital, slugMaker, slugToNormal } from "../../helpers/functions";

// Styles
import styles from "./ProductPage.module.css";

// Loader
import loader from "../../assets/loading.svg";

// Components
import Products from "../homePage/products/Products";
import AddToCardModal from "./addToCardModal/AddToCardModal";
import ReviewModal from "./reviewModal/ReviewModal";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Assets
import klarna from "../../assets/klarna.svg";
import star from "../../assets/star.svg";
import arrowDown from "../../assets/down-chevron-svgrepo-com.svg";
import creditCard from "../../assets/credit-card-svgrepo-com.svg";
import shipping from "../../assets/shipping-svgrepo-com.svg";

// APIs
import { GET_PRODUCT_DETAILS } from "../../graphql/queries";

const responsive = {
  // responsive info for carousel
  superLargeDesktop: {
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

const ProductPage = (relatedCategory) => {
  const dispatch = useDispatch();
  let selectedSize = useSelector((state) => state.cart.selectedSize);
  let category = useSelector((state) => state.productDetails.category);
  let collection = useSelector((state) => state.productDetails.collection);
  let slug = useSelector((state) => state.productDetails.slug);
  let id = useSelector((state) => state.productDetails.id);
  // set show and hide for wish list
  const [wishList, setWishList] = useState(false);
  // Set which info section to show
  const [infoShow, setInfoShow] = useState("details");
  // Set show and hide for modals
  const [showAddToCardModal, setShowAddToCardModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem(
      "data",
      JSON.stringify({
        selectedSize: selectedSize,
        category: category,
        collection: collection,
        slug: slug,
        id: id,
      })
    );
  });

  if (!id) {
    const currentData = JSON.parse(sessionStorage.getItem("data"));
    selectedSize = currentData.selectedSize;
    category = currentData.category;
    collection = currentData.collection;
    slug = currentData.slug;
    id = currentData.id;
  }

  // Get data from server
  const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
    variables: {
      id: id,
    },
  });

  console.log(category);
  console.log(relatedCategory);
  // Get product name from slug and change remove hyphens
  const name = slugToNormal(useParams().id);

  // Set page Title and remove previus selected size
  useEffect(() => {
    dispatch(selectSize({ size: "" }));
    document.title = `${capital(name)} | Bohemian Traders`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Generate slug and title for linked store page
  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({
        category: category,
        collection: collection,
        title: title,
      })
    );
  };
  // Show loader before getting data from server
  if (loading || error) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }
  // define a variable for saving all possible size for product size type
  let allSizes = [];
  // Set proper size types for product
  if (data.product.sizeGuide.name !== "1") {
    allSizes = ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"];
  } else {
    allSizes = ["0", "1", "2"];
  }
  // check if product has a exact size return true else return false
  const sizeFound = (size) => {
    const isFound = data.product.sizes.some((element) => {
      if (element.name === size.toUpperCase()) {
        return true;
      } else {
        return false;
      }
    });
    return isFound;
  };
  // Set and remove selected size in/from store
  const sizeHandler = (size) => {
    if (sizeFound(size)) {
      selectedSize === size
        ? dispatch(selectSize({ size: "" }))
        : dispatch(selectSize({ size: size }));
    }
  };
  // disable background scrolling when modal is shown
  if (showAddToCardModal || showReviewModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <div className={styles.container}>
      {/* User location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / {/* link to category */}
        <Link
          onClick={() => {
            slugHandler(slugMaker(category), "view-all", category);
          }}
          to={`/${slugMaker(category)}/view-all`}
        >
          {category.toUpperCase()}
        </Link>
        {" / "}
        {/* Link to collection */}
        <Link
          onClick={() => {
            slugHandler(slugMaker(category), slugMaker(collection), collection);
          }}
          to={`/${slugMaker(category)}/${slugMaker(collection)}`}
        >
          {collection.toUpperCase()}
        </Link>
        {" / "} {name.toUpperCase()}
      </p>
      <div className={styles.upperSection}>
        {/* product photos carousel */}
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
            <div key={photo.url}>
              <img src={photo.url} alt="product" />
            </div>
          ))}
        </Carousel>
        <section className={styles.innerUpperSection}>
          <div className={styles.innerSection}>
            <h1 className={styles.title}>{name}</h1>
            <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
            <p className={styles.price}>$US {data.product.price}</p>
            <div className={styles.klarnaContainer}>
              <p>Or pay 4 interest-free payments with</p>
              <a href="#">
                <img src={klarna} alt="klarna" />
              </a>
            </div>
            <div className={styles.ratingContainer}>
              {/* rating */}
              <div className={styles.starContainer}>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p>(NO REVIEWS YET)</p>
            </div>
            {/* send review */}
            <p
              className={styles.review}
              onClick={() => setShowReviewModal(true)}
            >
              WRITE A REVIEW
            </p>
            <p className={styles.sizeTitle}>SIZE:</p>
            {/* all sizes */}
            <ul className={styles.sizeContainer}>
              {allSizes.map((size) => (
                <li
                  key={size}
                  className={`${styles.size} ${
                    selectedSize === size && styles.select
                  } ${!sizeFound(size) && styles.unavailable}`}
                  onClick={() => {
                    sizeHandler(size);
                  }}
                >
                  {size}
                </li>
              ))}
            </ul>
            {/* Add to cart */}
            <button
              className={styles.addToCart}
              onClick={() => {
                selectedSize !== "" &&
                  dispatch(
                    addToCart({
                      id: id,
                      size: selectedSize,
                      price: data.product.price,
                      name: name,
                      photo: data.product.images[0].url,
                      allSize: data.product.sizes,
                      category: category,
                      collection: collection,
                      slug: slug,
                    })
                  );
                selectedSize !== "" && setShowAddToCardModal(true);
              }}
            >
              ADD TO CART
            </button>
            {/* Wish list */}
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
          </div>
        </section>
      </div>
      {/* product info */}
      <ul className={styles.infoContainer}>
        <li className={`${infoShow === "details" ? styles.underLine : ""}`}>
          <div
            className={styles.infoHeaderContainer}
            // show details section
            onClick={() =>
              infoShow === "details" ? setInfoShow("") : setInfoShow("details")
            }
          >
            <h4>PRODUCT DETAILS</h4>
            {/* plus to minus animation for info section  */}
            <span
              className={`${infoShow === "details" ? "" : styles.rotate}`}
            ></span>
            <span></span>
          </div>
          {/* details section */}
          <div
            className={`${styles.innerInfoContainer} ${
              infoShow === "details" && styles.showInfoData
            }`}
          >
            <p>{data.product.productDetails}</p>
            <p>{data.product.code}</p>
          </div>
        </li>
        {/* Product features */}
        <li className={`${infoShow === "features" ? styles.underLine : ""}`}>
          <div
            className={styles.infoHeaderContainer}
            // Show features section
            onClick={() =>
              infoShow === "features"
                ? setInfoShow("")
                : setInfoShow("features")
            }
          >
            <h4>PRODUCT FEATURES</h4>
            {/* plus to minus animation for info section  */}
            <span
              className={`${infoShow === "features" ? "" : styles.rotate}`}
            ></span>
            <span></span>
          </div>
          {/* features section */}
          <div
            className={`${styles.innerInfoContainer} ${
              infoShow === "features" && styles.showInfoData
            }`}
          >
            <pre>{data.product.productFeatures}</pre>
          </div>
        </li>
        {/* product sizing */}
        <li className={`${infoShow === "sizing" ? styles.underLine : ""}`}>
          <div
            className={styles.infoHeaderContainer}
            // Show sizing section
            onClick={() =>
              infoShow === "sizing" ? setInfoShow("") : setInfoShow("sizing")
            }
          >
            <h4>PRODUCT SIZING</h4>
            {/* plus to minus animation for info section  */}
            <span
              className={`${infoShow === "sizing" ? "" : styles.rotate}`}
            ></span>
            <span></span>
          </div>
          {/* sizing section */}
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
            <img src={data.product.sizeGuide.image.url} alt="size guide" />
            <Link to="/inclusive-size-range">
              Need help with your sizing? Click here.
            </Link>
          </div>
        </li>
      </ul>
      {/* details section for larger screens */}
      <div
        className={`${styles.mediumInfoContainer} ${
          infoShow === "details" && styles.showMedium
        }`}
      >
        <p>{data.product.productDetails}</p>
        <p>{data.product.code}</p>
      </div>
      {/* features section for larger screens */}
      <div
        className={`${styles.mediumInfoContainer} ${
          infoShow === "features" && styles.showMedium
        }`}
      >
        <pre>{data.product.productFeatures}</pre>
      </div>
      {/* sizing section for larger screens */}
      <div
        className={`${styles.mediumInfoContainer} ${
          infoShow === "sizing" && styles.showMedium
        }`}
      >
        <h6>MODEL SIZING</h6>
        <p>
          - Lilly is a size AU8, 170cm tall and wears a size XS
          <br />- Fiona is a size AU18 and wears a size XL
        </p>
        <img src={data.product.sizeGuide.image.url} alt="size guide" />
        <Link to="/inclusive-size-range">
          Need help with your sizing? Click here.
        </Link>
      </div>
      {/* product code */}
      <p className={styles.code}>
        <span>SKU: </span>
        {data.product.code}
      </p>
      <div className={styles.reviews}>
        <div className={styles.reviewsHeader}>
          <h1>REVIEWS</h1>
          <p>WRITE A REVIEW</p>
        </div>
        <div className={styles.reviewsStarContainer}>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div className={styles.reviewData}>
          <h5>comfortable style</h5>
          <p className={styles.reviewDate}>Posted by Claire on 29th Aug 2022</p>
          <p className={styles.reviewContent}>
            perfect all season denim jacket....
          </p>
        </div>
      </div>
      <h1 className={styles.moreHeader}>MORE FROM THIS COLLECTION</h1>
      {/* similar products carousel */}
      <Products category={category} number="6" collection={collection} />
      {/* Add to card modal */}
      <AddToCardModal
        onClose={() => setShowAddToCardModal(false)}
        show={showAddToCardModal}
        photo={data.product.images[0]}
        name={name}
        price={data.product.price}
        size={selectedSize}
      />
      <ReviewModal
        onClose={() => setShowReviewModal(false)}
        show={showReviewModal}
        photo={data.product.images[0]}
        name={name}
      />
    </div>
  );
};

export default ProductPage;
