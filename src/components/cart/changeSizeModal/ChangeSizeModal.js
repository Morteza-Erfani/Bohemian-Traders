import React from "react";

// Styles
import styles from "./ChangeSizeModal.module.css";

const ChangeSizeModal = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <img />
          <h1>CONFIGURE TITLE</h1>
        </div>
        <div className={styles.modalBody}>
          <p>SIZE:</p>
          <div>xxs</div>
        </div>
        <div className={styles.modalFooter}>
          <button>save</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeSizeModal;
