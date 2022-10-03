import React, { useEffect } from "react";

// Components
import Catalog from "./catalog/Catalog";
import Products from "./products/Products";
import BottomSlider from "./bottomSlider/BottomSlider";
import Explore from "./explore/Explore";
import AboutUs from "./aboutUs/AboutUs";
import TopSlider from "./topSlider/TopSlider";

const HomePage = () => {
  useEffect(() => {
    document.title = "Bohemian Traders | Classic European Cuts | For The Modern Bohemian";
  }, []);

  return (
    <>
      {/* <ImageSlider /> */}
      <TopSlider />
      <Catalog />
      <Products category="CAMPAIGN" />
      <BottomSlider />
      <Explore />
      <AboutUs />
    </>
  );
};

export default HomePage;
