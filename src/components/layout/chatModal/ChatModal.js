import React from "react";

// Styles
import styles from "./ChatModal.module.css";

const ChatModal = ({ onClose, show }) => {
  // hide modal when its deactivated
  if (!show) {
    return null;
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
        </div>
        <div className={styles.modalBody}>
          <h1>Sorry, Chat service is not available now!</h1>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
