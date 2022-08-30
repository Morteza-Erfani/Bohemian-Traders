import React from "react";
import Catalog from "./catalog/Catalog";

// Components
import ImageSlider from "./imageSlider/ImageSlider";

const HomePage = () => {
  return (
    <>
      <ImageSlider />
      <Catalog />
    </>
  );
};

export default HomePage;
