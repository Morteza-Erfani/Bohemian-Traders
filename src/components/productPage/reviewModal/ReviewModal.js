import React from "react";

// Styles
import styles from "./ReviewModal.module.css";

const ReviewModal = ({ onClose, show, photo, name }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
          <h2>hello</h2>
        </div>
        <div className={styles.modalBody}>
          <img src={photo.url} alt="product" />
          <h5 className={styles.productName}>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
