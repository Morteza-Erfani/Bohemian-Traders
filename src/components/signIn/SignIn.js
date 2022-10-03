import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./SignIn.module.css";

// Assets
import redCross from "../../assets/redCross.svg";
import exclamation from "../../assets/circle-exclamation.svg";

// functions
import { validateEmail } from "../../helpers/functions";

const SignIn = () => {
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("0");

  useEffect(() => {
    document.title = "Bohemian Tarders - Sign in";
  },[]);

  const isEmpty = (value) =>
    value !== "" && value !== "0" ? styles.green : "";

  const clickHandler = (event) => {
    event.preventDefault();
    if (pass && email && isValid) {
      // codes to send data to backend
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>SIGN IN</h1>
      {/* Caution message */}
      <div style={{ display: "none" }}>
        <div className={styles.cautionInnerContainer}>
          <div className={styles.exclamation}>
            <img src={exclamation} alt="caution" />
          </div>
          <p>
            If the entered email address is associated with this store, you will
            receive a password reset email. If you don't receive this e-mail,
            please check your junk mail folder or contact us for further
            assistance.
          </p>
        </div>
      </div>
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
            className={pass ? isEmpty(pass) : styles.invalid}
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
          <Link to="/reset">FORGOT YOUR PASSWORD?</Link>
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
