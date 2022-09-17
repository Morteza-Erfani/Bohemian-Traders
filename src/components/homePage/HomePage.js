import React from "react";

// Components
import ImageSlider from "./imageSlider/ImageSlider";
import Catalog from "./catalog/Catalog";
import Products from "./products/Products";
import BottomSlider from "./bottomSlider/BottomSlider";
import Explore from "./explore/Explore";
import AboutUs from "./aboutUs/AboutUs";

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <Catalog />
      <Products />
      <BottomSlider />
      <Explore/>
      <AboutUs/>
    </>
  );
};

export default HomePage;
