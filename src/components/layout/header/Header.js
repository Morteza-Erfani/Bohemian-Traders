import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux actions
import { restoreCart } from "../../../redux/cart/cartSlice";

// Logo
import logo from "../../../assets/logo.gif";

// Icons
import searchIcon from "../../../assets/searchicon.jpeg";
import profileIcon from "../../../assets/profileicon.jpeg";
import cartIcon from "../../../assets/carticon.png";

// Components
import HumMenu from "./HumMenu";
import Search from "./search/Search";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  // set show and hide for humberger menu
  const [humShow, setHumShow] = useState(false);

  const count = useSelector((state) => state.cart.totalCount);

  const dispatch = useDispatch();

  // set show and hide for search modal
  const [showSearch, setShowSearch] = useState(false);

  // get previous cart data from local storage
  useEffect(() => {
    dispatch(
      restoreCart({
        prevCart: JSON.parse(localStorage.getItem("cart")),
        totalPrice: JSON.parse(localStorage.getItem("totaPrice")),
        totalCount: JSON.parse(localStorage.getItem("totaCount")),
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // disable scrolling when search modal is activated
  if (showSearch) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <header className={styles.container} id="header">
      {/* top header over menu */}
      <div className={styles.topHeader}>
        <p>FREE SHIPPING FOR ALL DOMESTIC AUSTRALIAN ORDERS OVER $200</p>
      </div>
      {/* menu */}
      <div className={styles.header}>
        {/* humberger menu */}
        <div className={styles.hum}>
          {/* humberger icon */}

          <div onClick={() => setHumShow(!humShow)} className={styles.humIcon}>
            <div
              className={humShow ? styles.firstCross : styles.firstHum}
            ></div>
            <div
              className={humShow ? styles.secondCross : styles.secondHum}
            ></div>
            <div
              className={humShow ? styles.thirdCross : styles.thirdHum}
            ></div>
          </div>

          {/* humberger menu for small screens */}
          {humShow && (
            <div className={styles.humMenu}>
              <HumMenu onClose={() => setHumShow(false)} />
            </div>
          )}
        </div>
        {/* navbar for larger screens */}
        <div className={styles.navContainer}>
          <HumMenu onClose={() => null} />
        </div>
        {/* brand name in header */}
        <div className={styles.brandName}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* header buttons */}
        <div className={styles.mobileRight}>
          <img
            className={styles.button}
            src={searchIcon}
            alt="search"
            onClick={() => setShowSearch(true)}
          />
          <Link to="./signin">
            <img className={styles.button} src={profileIcon} alt="sign in" />
          </Link>
          <Link to="cart" className={styles.cartContainer}>
            <img className={styles.button} src={cartIcon} alt="cart" />
            {count > 0 && <span className={styles.cartNumber}>{count}</span>}
          </Link>
        </div>
        {/* search modal */}
        <Search show={showSearch} onClose={() => setShowSearch(false)} />
      </div>
    </header>
  );
};

export default Header;
