import React from "react";

// Components
import Catalog from "./catalog/Catalog";
import Products from "./products/Products";
import BottomSlider from "./bottomSlider/BottomSlider";
import Explore from "./explore/Explore";
import AboutUs from "./aboutUs/AboutUs";
import TopSlider from "./topSlider/TopSlider";

const HomePage = () => {
  return (
    <>
      {/* <ImageSlider /> */}
      <TopSlider />
      <Catalog />
      <Products />
      <BottomSlider />
      <Explore />
      <AboutUs />
    </>
  );
};

export default HomePage;
