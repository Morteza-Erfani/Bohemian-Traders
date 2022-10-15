import React from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "./AddToCardModal.module.css";

// Assets
import paypal from "../../../assets/paypal.svg";
import gPay from "../../../assets/dark_gpay.svg";
import { Link } from "react-router-dom";

const AddToCardModal = ({ show, onClose, photo, name, price, size }) => {
  const count = useSelector((state) => state.cart.totalCount);
  const total = useSelector((state) => state.cart.totalPrice);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
          <h2>OK, {count} ITEMS WERE ADDED TO YOUR CART. WHAT'S NEXT?</h2>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.btnContainer}>
            <a className={styles.btn}>PROCEED TO CHECKOUT</a>
            <p className={styles.use}>-- or use --</p>
            <a className={styles.paypal}>
              <img src={paypal} />
            </a>
            <a className={styles.gPay}>
              <img src={gPay} />
            </a>
            <p className={styles.order}>Order subtotal</p>
            <p className={styles.totalPrice}>$ {total.toFixed(2)}</p>
            <p className={styles.cartItemCount}>
              Your cart contains {count} Items
            </p>
            <p onClick={onClose} className={styles.btn}>
              CONTINUE SHOPPING
            </p>
            <Link to="/cart" className={styles.viewCart}>
              VIEW OR EDIT YOUR CART
            </Link>
          </div>
          <div className={styles.productContainer}>
            <img src={photo} className={styles.photo} alt="model" />
            <div>
              <h4>{name}</h4>
              <p className={styles.brand}>BOHEMIAN TRADERS</p>
              <p className={styles.price}>$ {price}</p>
              <p className={styles.size}>size {size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCardModal;
