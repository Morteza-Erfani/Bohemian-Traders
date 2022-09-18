import React, { useEffect, useState } from "react";

// Styles
import styles from "./SignIn.module.css";

// Assets
import redCross from "../../assets/redCross.svg";

// functions
import { validateEmail } from "../../helpers/functions";

const SignIn = () => {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("0");

  const isEmpty = (value) => (value !== "" ? styles.green : "");

  const clickHandler = (event) => {
    event.preventDefault();
    if (pass && email && isValid) {
      // codes to send data to backend
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>SIGN IN</h1>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">EMAIL ADDRESS:</label>
          <input
            id="email"
            type="email"
            name="email"
            inputMode="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValid(validateEmail(email));
              // console.log(email);
            }}
            onBlur={() => setIsValid(validateEmail(email))}
            className={isValid ? isEmpty(email) : styles.invalid}
          />
          <p className={isValid ? "" : styles.show}>
            <img src={redCross} alt="cross" />
            Please use a valid email address, such as user@example.com.
          </p>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">PASSWORD:</label>
          <input
            id="password"
            name="password"
            type="password"
            inputMode="text"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className={pass ? isEmpty(email) : styles.invalid}
            onBlur={(e) => setPass(e.target.value)}
          />
          <p className={pass ? "" : styles.show}>
            <img src={redCross} alt="cross" />
            You must enter a password.
          </p>
        </div>
        <div className={styles.buttons}>
          <button type="submit" onClick={(e) => clickHandler(e)}>
            SIGN IN
          </button>
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
