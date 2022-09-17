import React from "react";
import { useQuery } from "@apollo/client/react";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components
import ProductCard from "../../shared/productCard/ProductCard";

// API
import { GET_CATEGORY_PRODUCTS } from "../../../graphql/queries";

// Styles
import "./Products.css";

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

const Products = (props) => {
  const { loading, data } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: {
      category: "CAMPAIGN",
    },
  });

  if (loading) {
    return <></>;
  }

  const categoryProducts = data.categories[0].products.slice(0, 4);
  if (!loading) {
    // console.log(categoryProducts);
  }
  return (
    <div className="container">
      <Carousel arrows responsive={responsive}>
        {categoryProducts.map((product) => (
          <div key={product.id}>
            <ProductCard data={product} titleType="upper" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Products;
