import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Styles
import styles from "./TopSlider.module.css";

// APIs
import { GET_HERO_PHOTOS } from "../../../graphql/queries";

// Loader
import loader from "../../../assets/loading.svg";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Redux actions
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// responsive data for carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 2,
  },
};

const TopSlider = () => {
  // Get data from server
  const { loading, data } = useQuery(GET_HERO_PHOTOS);

  const dispatch = useDispatch();

  // Generate slug and title for store page that links to each photo
  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  // show loader before getting data from server
  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  return (
    <div>
      {/* photo slider or carousel */}
      <Carousel
        responsive={responsive}
        arrows={false}
        className=""
        containerClass={styles.container}
        dotListClass={styles.bottomDots}
        draggable={true}
        itemClass={styles.items}
        rtl={false}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable={true}
      >
        {data.heroPhotos.map((photo) => (
          <div key={photo.id}>
            <Link
              // generate slug and title for linked store page
              onClick={() =>
                slugHandler("whats-new", "new-arrivals", "new arrivals")
              }
              to="/whats-new/new-arrivals"
            >
              {window.innerWidth < 800 ? ( // show photo for small screens
                <img
                  src={photo.mobilePhoto.url}
                  alt="hero"
                  style={{ width: "100%" }}
                />
              ) : (
                // show photo for larger screens
                <img src={photo.laptopPhoto.url} alt="hero" />
              )}
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopSlider;
