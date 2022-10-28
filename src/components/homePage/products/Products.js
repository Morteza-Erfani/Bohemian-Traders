import React from "react";
import { useQuery } from "@apollo/client/react";

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components
import ProductCard from "../../shared/productCard/ProductCard";

// APIs
import { GET_CATEGORY_PRODUCTS } from "../../../graphql/queries";

// Styles
import "./Products.css";

// Functions
import { slugMaker } from "../../../helpers/functions";

// Loader
import loader from "../../../assets/loading.svg";

// responsive data for carousel
const responsive = {
  superLargeDesktop: {
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
  // Get data from server
  const { loading, data } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: {
      category: category.toUpperCase(),
    },
  });

  // show loader before getting data from server
  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={"loader"} />
      </section>
    );
  }

  console.log(category)

  // split numbers of products that wants to show in carousel
  const categoryProducts = data.categories[0].products.slice(0, +number);


  return (
    <div className="container">
    {/* product carousel */}
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
