import { useQuery } from "@apollo/client";
import React from "react";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// API
import { GET_BOTTOM_HERO_PHOTOS } from "../../../graphql/queries";

// Loader
import loader from "../../../assets/loading.svg";

// Styles
import styles from "./BottomSlider.module.css";

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
    items: 2,
    slidesToSlide: 2,
  },
};

const BottomSlider = () => {
  const { loading, data } = useQuery(GET_BOTTOM_HERO_PHOTOS);

  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className="loader" />
      </section>
    );
  }
  // console.log(data.bottomPhotos[0].mobilePhoto);

  return (
    <div>
      <Carousel
        responsive={responsive}
        arrows={false}
        className=""
        containerClass={styles.container}
        dotListClass={styles.bottomDots}
        draggable={true}
        itemClass=""
        rtl={false}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable={true}
      >
        {data.bottomPhotos.map((photo) => (
          <div key={photo.id}>
            <div className={styles.innerContainer}>
              {window.innerWidth < 800 ? (
                <img
                  src={photo.mobilePhoto.url}
                  alt="bottom Slider"
                  style={{ width: "100vw" }}
                  className={styles.photo}
                />
              ) : (
                <img
                  src={photo.laptopPhoto.url}
                  alt="bottom Slider"
                  className={styles.sliderPhoto}
                />
              )}
              <p className={styles.sliderLink}>SHOP COLOUR-BLOCK</p>
            </div>
          </div>
        ))}
        <div></div>
      </Carousel>
    </div>
  );
};

export default BottomSlider;
