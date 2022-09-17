import React from "react";

// Styles
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>SIGN IN</h1>
      <form className={styles.form}>
        <label for="email">EMAIL ADDRESS:</label>
        <input id="email" type="email" inputMode="email" />
        <label for="password">PASSWORD:</label>
        <input id="password" type="password" inputMode="text" />
        <div className={styles.buttons}>
          <button type="submit">SIGN IN</button>
          <a>FORGOT YOUR PASSWORD?</a>
        </div>
      </form>
      <div className={styles.description}>
        <h2>NEW CUSTOMER?</h2>
        <p>Create an account with us and you'll be able to:</p>
        <ul>
          <li>Check out faster</li>
          <li>Save multiple shipping addresses</li>
          <li>Access your order history</li>
          <li>Track new orders</li>
          <li>Save items to your wish list</li>
        </ul>
        <a className={styles.create}>CREATE ACCOUNT</a>
      </div>
    </div>
  );
};

export default SignIn;
