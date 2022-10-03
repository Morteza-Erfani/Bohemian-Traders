import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
import { useDispatch, useSelector } from "react-redux";
import { restoreCart } from "../../../redux/cart/cartSlice";

const Header = () => {
  const [humShow, setHumShow] = useState(false);
  const count = useSelector((state) => state.cart.totalCount);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [showSearch, setShowSearch] = useState(false);

  // useEffect(() => {
  //   dispatch(
  //     restoreCart({
  //       prevCart: JSON.parse(localStorage.getItem("cart")),
  //       totalPrice: JSON.parse(localStorage.getItem("totaPrice")),
  //       totalCount: JSON.parse(localStorage.getItem("totaCount")),
  //     })
  //   );
  //   console.log(JSON.parse(localStorage.getItem("cart")));
  //   console.log(cart);
  // }, []);

  return (
    <header className={styles.container} id="header">
      {/* top header over menu */}
      <div className={styles.topHeader}>
        <p>FREE SHIPPING FOR ALL AUSTRALIAN ORDERS OVER $200</p>
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

          {humShow && (
            <div className={styles.humMenu}>
              <HumMenu onClose={() => setHumShow(false)} />
            </div>
          )}
        </div>
        {/* brand name in header */}
        <div className={styles.brandName}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* header buttons */}
        <div className={styles.mobileRight}>
          <a>
            <img
              className={styles.button}
              src={searchIcon}
              alt="search"
              onClick={() => setShowSearch(true)}
            />
          </a>
          <Link to="./signin">
            <img className={styles.button} src={profileIcon} alt="sign in" />
          </Link>
          <Link to="cart" className={styles.cartContainer}>
            <img className={styles.button} src={cartIcon} alt="cart" />
            {count > 0 && <span className={styles.cartNumber}>{count}</span>}
          </Link>
        </div>
        <Search show={showSearch} onClose={() => setShowSearch(false)} />
      </div>
    </header>
  );
};

export default Header;
