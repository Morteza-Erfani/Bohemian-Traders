import React from "react";
import { useQuery } from "@apollo/client/react";

// Components
import ProductCard from "../../shared/productCard/ProductCard";

// API
import { GET_CATEGORY_PRODUCTS } from "../../../graphql/queries";

const Products = () => {
  const { loading, data, errors } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: {
      category: "CAMPAIGN",
    },
  });

  if (loading) {
    return <></>;
  }

  const categoryProducts = data.categories[0].products.slice(0,4);
  if (!loading) {
    console.log(categoryProducts);
  }
  return (
    <div>
      {categoryProducts.map((product) => (
        <ProductCard data={product} key={product.id} titleType='upper'/>
      ))}
    </div>
  );
};

export default Products;
