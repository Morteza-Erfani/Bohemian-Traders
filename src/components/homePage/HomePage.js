import React from "react";
import Catalog from "./catalog/Catalog";
import { useQuery } from "@apollo/client/react";

// Components
import ImageSlider from "./imageSlider/ImageSlider";
import ProductCard from "../shared/productCard/ProductCard";

import { GET_PRODUCT_CARD_INFO } from "../../graphql/queries";

const HomePage = () => {
  const { loading, data, errors } = useQuery(GET_PRODUCT_CARD_INFO, {
    variables: { slug: "windbreaker-in-dusty-rose-and-terracotta" },
  });

  if (!loading) {
    console.log(data.products[0].modelImage.url);
  }

  return (
    <>
      <ImageSlider />
      <Catalog />
      {data && <ProductCard data={data} />}
    </>
  );
};

export default HomePage;
