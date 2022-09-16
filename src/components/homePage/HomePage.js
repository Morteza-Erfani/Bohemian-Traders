import React from "react";

// Components
import ImageSlider from "./imageSlider/ImageSlider";
import Catalog from "./catalog/Catalog";
import Products from "./products/Products";
import BottomSlider from "./bottomSlider/BottomSlider";

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <Catalog />
      <Products />
      <BottomSlider />
    </>
  );
};

export default HomePage;
