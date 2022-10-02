import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  viewType,
} from "../../redux/productsPage/productsPageSlice";

// Styles
import styles from "./Store.module.css";

// Assets
import header from "../../assets/athleticblue__01897.original.jpg";
import leftArrow from "../../assets/chevron-left.svg";
import rightArrow from "../../assets/chevron-right.svg";

// Components
import FilterSort from "./filterSort/FilterSort";
import ProductCard from "../shared/productCard/ProductCard";

// Product
import pImage from "../../assets/product/ETCH-SIZING-TEMPLATE_02__42182.jpg";
import mImage from "../../assets/product/SS22-ACT12-BLACK_01__01552.jpg";
import sImage from "../../assets/product/SS22-ACT12-BLACK_02__22867.jpg";
import { slugMaker } from "../../helpers/functions";

const products = [
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 217.83,
    id: 1,
    sizes: ["xxs", "xs", "s", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 127.83,
    id: 2,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 147.83,
    id: 3,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 137.83,
    id: 4,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 5,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 6,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 7,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 8,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 9,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 10,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 11,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 12,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 13,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 14,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 15,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 16,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 17,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 18,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 19,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 20,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
  {
    productImage: { url: pImage },
    modelImage: { url: mImage },
    sideImage: { url: sImage },
    name: "swing jacket in black",
    prices: 117.83,
    id: 21,
    sizes: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
  },
];

const Store = ({ collection, category }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const view = useSelector((state) => state.productsPage.view);
  const allProducts = useSelector((state) => state.productsPage.products);
  const filteredProducts = useSelector(
    (state) => state.productsPage.filteredProducts
  );

  useEffect(() => {
    dispatch(viewType({ view: "product" }));
    dispatch(setProducts({ products: products }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let pages;
  if (filteredProducts.length === 0) {
    pages = Math.ceil(products.length / 10);
  } else {
    pages = Math.ceil(filteredProducts.length / 10);
  }

  const numbers = [];

  const productsInPage = [];

  for (let i = 1; i <= pages; i++) {
    const startI = (i - 1) * 10;
    const endI = i * 10;
    if (filteredProducts.length === 0) {
      productsInPage.push(allProducts.slice(startI, endI));
    } else {
      productsInPage.push(filteredProducts.slice(startI, endI));
    }
    numbers.push(i);
  }
  // console.log(productsInPage);
  // console.log(numbers);

  return (
    <div className={styles.container}>
      {header && <img className={styles.headPhoto} src={header} alt="header" />}
      {collection ? (
        <h1 className={styles.header}>{collection}</h1>
      ) : (
        <h1 className={styles.header}>{category}</h1>
      )}
      <FilterSort />
      <div className={styles.view}>
        <p
          onClick={() => dispatch(viewType({ view: "model" }))}
          className={view === "model" ? styles.underline : ""}
        >
          MODEL VIEW
        </p>
        <p
          onClick={() => dispatch(viewType({ view: "product" }))}
          className={view === "product" ? styles.underline : ""}
        >
          PRODUCT VIEW
        </p>
      </div>
      <div className={styles.productsContainer}>
        {productsInPage[pageNumber - 1].map((product) => (
          <div key={product.id} className={styles.productContainer}>
            <ProductCard
              data={product}
              titleType="capital"
              slug={slugMaker(product.name)}
            />
          </div>
        ))}
      </div>
      <div className={styles.pageNumbersContainer}>
        <a
          href="#top"
          className={styles.previous}
          onClick={() => {
            setPageNumber((prevPageNumber) => prevPageNumber - 1);
          }}
        >
          <img src={leftArrow} alt="previous" />
          <p>PREVIOUS</p>
        </a>
        {numbers.map((number) => (
          <a
            key={number}
            href="#top"
            className={`${styles.number} ${
              pageNumber === number && styles.active
            }`}
            onClick={() => {
              setPageNumber(number);
            }}
          >
            {number}
          </a>
        ))}
        <a
          href="#top"
          className={styles.next}
          onClick={() => {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }}
        >
          <p>NEXT</p>
          <img src={rightArrow} alt="next" />
        </a>
      </div>
    </div>
  );
};

export default Store;
