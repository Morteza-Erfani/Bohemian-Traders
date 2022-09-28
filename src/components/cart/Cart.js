import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "./Cart.module.css";

// Assets
import downArrow from "../../assets/chevron-down.svg";
import upArrow from "../../assets/chevron-up.svg";
import cross from "../../assets/x.svg";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.cart.totalCount);

  const [extraSpace, setExtraSpace] = useState("");

  const ref = useRef(null);

  // const fillSpace = () => {
  //   const usedSpace =
  //     document.getElementById("footer").clientHeight +
  //     document.getElementById("header").clientHeight;

  //   if (window.innerHeight > usedSpace) {
  //     setExtraSpace(
  //       `${window.innerHeight - usedSpace - ref.current.clientHeight}px`
  //     );
  //   }
  // };

  if (cart.length === 0) {
    return (
      <>
        <div className={styles.container} ref={ref}>
          <h1 className={styles.header}>YOUR CART ({cart.length} ITEMS)</h1>
          <h3 className={styles.empty} style={{ marginBottom: extraSpace }}>
            Your cart is empty
          </h3>
        </div>
        {/* {fillSpace()} */}
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>YOUR CART ({count} ITEMS)</h1>
      {cart.map((product) => (
        <div className={styles.productContainer} key={product.id}>
          <div className={styles.firstSection}>
            <div className={styles.photoContainer}>
              <img
                src={product.photo}
                alt="product"
                style={{ width: "20px" }}
              />
            </div>
            <div className={styles.titleContainer}>
              <p className={styles.brandName}>BOHEMIAN TRADERS</p>
              <a>{product.name}</a>
              <p className={styles.size}>
                Size: <span>{product.size}</span>
              </p>
              <button className={styles.change}>CHANGE</button>
            </div>
          </div>
          <div className={styles.secondSection}>
            <p className={styles.Title}>Price:</p>
            <p>$US {product.price}</p>
          </div>
          <div className={styles.thirdSection}>
            <p className={styles.title}>QuANTITY:</p>
            <div className={styles.quantityContainer}>
              <button className={styles.quantityBtn}>
                <img src={downArrow} alt="decrease" />
              </button>
              <p>{product.quantity}</p>
              <button className={styles.quantityBtn}>
                <img src={upArrow} alt="increase" />
              </button>
            </div>
          </div>
          <div className={styles.forthSection}>
            <p className={styles.title}>Total:</p>
            <div>
              <p className={styles.totalPrice}>
                $US {product.price * product.quantity}
              </p>
              <img src={cross} alt="delete" style={{width: '20px'}}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
