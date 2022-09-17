import React from "react";

// Components
import ImageSlider from "./imageSlider/ImageSlider";
import Catalog from "./catalog/Catalog";
import Products from "./products/Products";
import BottomSlider from "./bottomSlider/BottomSlider";
import Explore from "./explore/Explore";

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <Catalog />
      <Products />
      <BottomSlider />
      <Explore/>
    </>
  );
};

export default HomePage;
