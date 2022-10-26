import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSize, selectSize } from "../../../redux/cart/cartSlice";

// Styles
import styles from "./ChangeSizeModal.module.css";

const ChangeSizeModal = ({
  show,
  onClose,
  allSize,
  name,
  onChangeSize,
  onSave,
}) => {
  const modalSelectedSize = useSelector((state) => state.cart.selectedSize);

  console.log(allSize)

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
          <h2>
            CONFIGURE
            <br />'{name}'
          </h2>
        </div>
        <div className={styles.modalBody}>
          <p>SIZE:</p>
          <div className={styles.modalSizes}>
            {allSize.map((size) => (
              <div
                key={size.name}
                className={modalSelectedSize === size.name ? styles.selected : ""}
                onClick={() => onChangeSize(size.name)}
              >
                {size.name}
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              onSave();
              onClose();
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeSizeModal;
