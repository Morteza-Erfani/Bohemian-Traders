import React from "react";
import { useQuery } from "@apollo/client";

// Styles
import styles from "./TopSlider.module.css";

// API
import { GET_HERO_PHOTOS } from "../../../graphql/queries";

// Loader
import loader from "../../../assets/loading.svg";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showDetails } from "../../../redux/productsPage/productsPageSlice";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
  const { loading, data } = useQuery(GET_HERO_PHOTOS);

  const dispatch = useDispatch();

  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({ category: category, collection: collection, title: title })
    );
  };

  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }

  // console.log(data.heroPhotos);

  return (
    <div>
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
            {window.innerWidth < 800 ? (
              <Link
                onClick={() =>
                  slugHandler("whats-new", "new-arrivals", "new arrivals")
                }
                to="/whats-new/new-arrivals"
              >
                <img
                  src={photo.mobilePhoto.url}
                  alt="hero"
                  style={{ width: "100%" }}
                />
              </Link>
            ) : (
              <img src={photo.laptopPhoto.url} alt="hero" />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopSlider;
