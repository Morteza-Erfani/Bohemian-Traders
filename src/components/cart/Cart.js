import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import styles from "./Cart.module.css";

// Assets
import downArrow from "../../assets/chevron-down.svg";
import upArrow from "../../assets/chevron-up.svg";
import cross from "../../assets/x.svg";
import {
  addToCart,
  changeSize,
  decrease,
  remove,
  selectSize,
} from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";

// Assets
import zip from "../../assets/zip-button-wht.svg";
import paypal from "../../assets/paypal.svg";
import gPay from "../../assets/dark_gpay.svg";

// Modals
import ChangeSizeModal from "./changeSizeModal/ChangeSizeModal";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.cart.totalCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const selectedSize = useSelector((state) => state.cart.selectedSize);
  const tax = (totalPrice * 0.091).toFixed(2);

  const [showChange, setShowChange] = useState(false);

  const [selectedSizeForChange, setSelectedSizeForChange] = useState();

  // console.log(totalPrice);

  const dispatch = useDispatch();

  // const [extraSpace, setExtraSpace] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    document.title = "Bohemian Traders - Shopping Cart";
  }, []);

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

  if (showChange) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }

  if (cart.length === 0) {
    return (
      <>
        <div className={styles.container} ref={ref}>
          <p className={styles.location}>
            <Link to="/">HOME</Link> / YOUR CART
          </p>
          <h1 className={styles.header}>YOUR CART ({cart.length} ITEMS)</h1>
          <h3 className={styles.empty}>Your cart is empty</h3>
        </div>
        {/* {fillSpace()} */}
      </>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.location}>
        <Link to="/">HOME</Link> / YOUR CART
      </p>
      <h1 className={styles.header}>YOUR CART ({count} ITEMS)</h1>
      {cart.map((product) => (
        <div
          className={styles.productContainer}
          key={`${product.id}${product.size}`}
        >
          <div className={styles.firstSection}>
            <p className={styles.title}>Item</p>
            <div className={styles.innerFirstSection}>
              <div className={styles.photoContainer}>
                <img src={product.photo} alt="product" />
              </div>
              <div className={styles.titleContainer}>
                <p className={styles.brandName}>Boheamian Traders</p>
                <a>{product.name}</a>
                <p className={styles.size}>
                  Size: <span>{product.size}</span>
                </p>
                <button
                  className={styles.change}
                  onClick={() => {
                    setShowChange(true);
                    dispatch(selectSize({ size: product.size }));
                    setSelectedSizeForChange(product.size);
                  }}
                >
                  CHANGE
                </button>
                <ChangeSizeModal
                  show={showChange}
                  onClose={() => setShowChange(false)}
                  allSize={product.allSize}
                  name={product.name}
                  onChangeSize={(size) => {
                    dispatch(selectSize({ size: size }));
                  }}
                  onSave={() => {
                    dispatch(
                      changeSize({
                        id: product.id,
                        prevSize: selectedSizeForChange,
                        newSize: selectedSize,
                        quantity: product.quantity,
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.innerSection}>
            <div className={styles.secondSection}>
              <p className={styles.title}>Price</p>
              <p className={styles.price}>
                $<span className={styles.us}>US</span> {product.price}
              </p>
            </div>
            <div className={styles.thirdSection}>
              <p className={styles.title}>
                Quantity<span className={styles.quantitySemiColon}>:</span>
              </p>
              <div className={styles.quantityContainer}>
                <div className={styles.quantityInnerContainer}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => {
                      product.quantity !== 1
                        ? dispatch(
                            decrease({
                              id: product.id,
                              size: product.size,
                              price: product.price,
                            })
                          )
                        : dispatch(
                            remove({
                              id: product.id,
                              size: product.size,
                              price: product.price,
                            })
                          );
                    }}
                  >
                    <img src={downArrow} alt="decrease" />
                  </button>
                  <p className={styles.quantitySmall}>{product.quantity}</p>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                          size: product.size,
                          price: product.price,
                          name: product.name,
                          photo: product.photo,
                        })
                      );
                    }}
                  >
                    <img src={upArrow} alt="increase" />
                  </button>
                </div>
                <p className={styles.quantityMedium}>{product.quantity}</p>
              </div>
            </div>
            <div className={styles.forthSection}>
              <p className={styles.title}>Total</p>
              <div>
                <p className={styles.totalPrice}>
                  $<span className={styles.us}>US</span>{" "}
                  {product.price * product.quantity}
                </p>
                <img
                  className={styles.cross}
                  src={cross}
                  alt="delete"
                  onClick={() => {
                    dispatch(
                      remove({
                        id: product.id,
                        size: product.size,
                        price: product.size,
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.checkoutContainer}>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>SUBTOTAL:</p>
          <p className={styles.price}>
            $<span className={styles.us}>US</span> {totalPrice}
          </p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>SHIPPING:</p>
          <div>
            <button className={styles.change}>ADD INFO</button>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>TAX:</p>
          <p className={styles.price}>
            $<span className={styles.us}>US</span> {tax}
          </p>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>COUPON CODE:</p>
          <div>
            <button className={styles.change}>ADD COUPON</button>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <p className={styles.checkoutTitle}>GRAND TOTAL:</p>
          <p className={styles.grandTotal}>
            $<span className={styles.us}>US</span> {+totalPrice + +tax}
          </p>
        </div>
        <div className={styles.zip}>
          <p>ZIP IT NOW, PAY LATER</p>
          <img src={zip} alt="zip" />
          <p>&#9432;</p>
        </div>
        <button className={styles.checkoutBtn}>CHECK OUT</button>
        <p className={styles.use}>-- or use --</p>
        <div className={styles.paypal}>
          <img src={paypal} alt="paypal" />
        </div>
        <div className={styles.gPay}>
          <img src={gPay} alt="g-pay" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
