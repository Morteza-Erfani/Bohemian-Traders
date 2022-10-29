import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Redux actions
import {
  setProducts,
  showDetails,
  viewType,
} from "../../redux/productsPage/productsPageSlice";

// Styles
import styles from "./Store.module.css";

// Assets
import leftArrow from "../../assets/chevron-left.svg";
import rightArrow from "../../assets/chevron-right.svg";

// Components
import FilterSort from "./filterSort/FilterSort";
import ProductCard from "../shared/productCard/ProductCard";

// Functions
import { slugMaker, slugToNormal } from "../../helpers/functions";

// APIs
import { GET_STORE_PRODUCTS } from "../../graphql/queries";

// Loader
import loader from "../../assets/loading.svg";

const Store = ({ collection, category, searchProducts }) => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.productsPage.view);
  const title = useSelector((state) => state.productsPage.title);
  const allProducts = useSelector((state) => state.productsPage.products);
  const filteredProducts = useSelector(
    (state) => state.productsPage.filteredProducts
  );

  // Set page number
  const [pageNumber, setPageNumber] = useState(1);

  // Get data from server
  const { data, loading } = useQuery(GET_STORE_PRODUCTS, {
    variables: {
      category: slugToNormal(category.toUpperCase()),
      collection: slugToNormal(collection.toUpperCase()),
    },
  });

  // Set default view type to 'product' and set page title
  useEffect(() => {
    dispatch(viewType({ view: "product" }));
    document.title = `${slugToNormal(category)} - ${slugToNormal(
      collection
    )} - page ${pageNumber} - Bohemian Traders`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Show loader before getting data from server
  if (loading) {
    return (
      <section className="styles.container">
        <img src={loader} alt="loader" className={styles.loader} />
      </section>
    );
  }
  // Set products to redux store
  dispatch(setProducts({ products: data.products }));
  // define a variable for products to show in page
  let products;
  // Check which porudct must be shown in store => all products or filter and sort products or searched products
  if (filteredProducts.length > 0) {
    products = filteredProducts; // If filter or sort products
  } else if (searchProducts !== undefined) {
    if (searchProducts.length === 0) {
      return null; // If search is active but search text in ''
    } else {
      products = searchProducts; // If search is active
    }
  } else {
    products = allProducts; // If no filter and sort and no search is active
  }
  // define a variable for number of pages
  let pages;
  if (filteredProducts.length === 0) {
    pages = Math.ceil(products.length / 10);
  } else {
    pages = Math.ceil(filteredProducts.length / 10);
  }
  // define an array for page numbers
  const numbers = [];
  // define an array forn products that show in each page
  const productsInPage = [];
  // Split product for 10 products in each page
  for (let i = 1; i <= pages; i++) {
    const startIndex = (i - 1) * 10; // find index of first product in page
    const endIndex = i * 10; // find index of last product in page
    // check which products to show between 'all product' and 'searched products' and 'filtered products'
    productsInPage.push(products.slice(startIndex, endIndex));
    // add page number to page numbers array
    numbers.push(i);
  }
  // Generate slug and title for linked product page
  const slugHandler = (category, collection, title) => {
    dispatch(
      showDetails({
        category: category,
        collection: collection,
        title: title,
      })
    );
  };

  return (
    <div className={styles.container}>
      {/* User location in site */}
      <p className={styles.location} id="top">
        <Link to="/">HOME</Link> /{" "}
        {collection === "view-all" ? (
          category.toUpperCase()
        ) : (
          <Link
            onClick={() => {
              // link to category
              slugHandler(slugMaker(category), "view-all", category);
            }}
            to={`/${slugMaker(category)}/view-all`}
          >
            {category.toUpperCase()}
          </Link>
        )}
        {/* link to collection */}
        {collection !== "view-all" &&
          ` / ${slugToNormal(collection).toUpperCase()}`}
      </p>
      {searchProducts !== undefined ? null : products.collections[0].header !== // If search product is active => dont show header
        null ? ( // If collection has header
        <img
          className={styles.headPhoto}
          src={products.collections[0].header.url}
          alt="header"
        />
      ) : // If collections dosent have header
      products.categories[0].header !== null ? ( // If category has header
        <img
          className={styles.headPhoto}
          src={products.categories[0].header.url}
          alt="header"
        />
      ) : // If category dosent have header
      null}
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>{slugToNormal(title)}</h1>
        {/* show filter and sort section for small screens */}
        {window.innerWidth < 800 && <FilterSort />}
        <div className={styles.view}>
          <p
            // Change view type to model
            onClick={() => dispatch(viewType({ view: "model" }))}
            className={view === "model" ? styles.underline : ""}
          >
            MODEL VIEW
          </p>
          <p
            // Change view type to product
            onClick={() => dispatch(viewType({ view: "product" }))}
            className={view === "product" ? styles.underline : ""}
          >
            PRODUCT VIEW
          </p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        {/* show filter and sort section for large screens */}
        {window.innerWidth >= 800 && <FilterSort />}
        <div className={styles.productPage}>
          <div className={styles.productsContainer}>
            {/* shoe product card for each product */}
            {productsInPage[pageNumber - 1].map((product) => (
              <div key={product.id} className={styles.productContainer}>
                <ProductCard
                  category={category}
                  collection={collection}
                  data={product}
                  titleType="capital"
                  slug={slugMaker(product.name)}
                  quickView={true}
                />
              </div>
            ))}
          </div>
          <div className={styles.pageNumbersContainer}>
            <a
              // Scroll to top
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
                // Scroll to top
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
              // Scroll to top
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
      </div>
    </div>
  );
};

export default Store;
