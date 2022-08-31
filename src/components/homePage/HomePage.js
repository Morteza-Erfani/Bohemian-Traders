import React from "react";
import Catalog from "./catalog/Catalog";

// Components
import ImageSlider from "./imageSlider/ImageSlider";
import Products from "./products/Products";



const HomePage = () => {

  return (
    <>
      <ImageSlider />
      <Catalog />
      <Products />
    </>
  );
};

export default HomePage;
