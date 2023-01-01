import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux actions
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// API
import { GET_BOTTOM_HERO_PHOTOS } from "../../../graphql/queries";

// Loader
import loader from "../../../assets/loading.svg";

// Styles
import styles from "./BottomSlider.module.css";

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
    slidesToSlide: 1,
  },
};

const BottomSlider = () => {
  // Get photos from server
  const { loading, data, error } = useQuery(GET_BOTTOM_HERO_PHOTOS);

  const dispatch = useDispatch();

  // Generate slug and title for store page that links to each photo
  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  // show loader before getting data from server
  if (loading || error) {
    return (
      <section className={styles.container}>
        <img src={loader} alt="loader" className="loader" />
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
        {data.bottomPhotos.map((photo) => (
          <div key={photo.id}>
            <Link
              onClick={() => {
                // generate slug and title for linked store page
                slugHandler("Women", "view-all", "women");
              }}
              to="/women/view-all"
              className={styles.innerContainer}
            >
              {window.innerWidth < 800 ? ( // show photo for small screens
                <img
                  src={photo.mobilePhoto.url}
                  alt="bottom Slider"
                  style={{ width: "100vw" }}
                  className={styles.photo}
                />
              ) : (
                // show photo for larger screens
                <img
                  src={photo.laptopPhoto.url}
                  alt="bottom Slider"
                  className={styles.sliderPhoto}
                />
              )}
              <p className={styles.sliderLink}>SHOP COLOUR-BLOCK</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BottomSlider;
