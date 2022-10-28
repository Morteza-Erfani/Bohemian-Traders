import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

// Carousel
import Carousel from "react-multi-carousel";

// Redux actions
import { addToCart, selectSize } from "../../../../redux/cart/cartSlice";

// Styles
import styles from "./QuickViewModal.module.css";

// Assets
import star from "../../../../assets/star.svg";
import creditCard from "../../../../assets/credit-card-svgrepo-com.svg";
import shipping from "../../../../assets/shipping-svgrepo-com.svg";

// Loader
import loader from "../../../../assets/loading.svg";

// APIs
import { GET_QUICK_VIEW_PRODUCT } from "../../../../graphql/queries";

// Responsive info for carousel
const responsive = {
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

const QuickViewModal = ({ show, onClose, id, category, collection, slug }) => {
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.cart.selectedSize);
  // Get data from server
  const { loading, data } = useQuery(GET_QUICK_VIEW_PRODUCT, {
    variables: {
      id: id,
    },
  });

  // Set page Title and remove previus selected size
  useEffect(() => {
    dispatch(selectSize({ size: "" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show loader before getting data from server
  if (loading) {
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

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
        </div>
        <div className={styles.modalBody}>
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
                <div key={photo}>
                  <img src={photo.url} alt="product" />
                </div>
              ))}
            </Carousel>
            <section className={styles.innerUpperSection}>
              <div className={styles.innerSection}>
                <h1 className={styles.title}>{data.product.name}</h1>
                <h2 className={styles.brand}>BOHEMIAN TRADERS</h2>
                <p className={styles.price}>$US {data.product.price}</p>
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
                <a href="#" className={styles.review}>
                  WRITE A REVIEW
                </a>
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
                          name: data.product.name,
                          photo: data.product.images[0].url,
                          allSize: data.product.sizes,
                          category: category,
                          collection: collection,
                          slug: slug,
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
