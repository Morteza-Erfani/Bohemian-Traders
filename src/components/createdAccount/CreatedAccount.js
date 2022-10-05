import React from "react";

// Styles
import styles from "./CreatedAccount.module.css";

const CreatedAccount = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>YOUR ACCOUNT HAS BEEN CREATED</h1>
      <p className={styles.para}>
        Thank you for creating your account at Bohemian Traders. Your account
        details have been emailed to{" "}
        <span className={styles.email}>'.......'</span>
      </p>
      <div className={styles.btnContainer}>
        <a className={styles.continueBtn}>CONTINUE SHOPPING</a>
      </div>
    </div>
  );
};

export default CreatedAccount;
