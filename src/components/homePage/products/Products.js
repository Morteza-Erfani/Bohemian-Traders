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

// Functions
import { slugMaker } from "../../../helpers/functions";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 800, min: 550 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const Products = ({ category, number }) => {
  // console.log(category)

  const { loading, data } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: {
      category: category,
    },
  });

  if (loading) {
    return <></>;
  }

  const categoryProducts = data.categories[0].products.slice(0, +number);
  if (!loading) {
    // console.log(categoryProducts);
  }
  return (
    <div className="container">
      <Carousel arrows responsive={responsive} containerClass="innerContainer">
        {categoryProducts.map((product) => (
          <div key={product.id}>
            <ProductCard
              data={product}
              titleType="capital"
              slug={slugMaker(product.name)}
              quickView={false}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Products;
