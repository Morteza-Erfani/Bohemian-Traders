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
  // Set email validation result
  const [isValid, setIsValid] = useState(true);
  // Set user email
  const [email, setEmail] = useState("");
  // Set use password
  const [pass, setPass] = useState("0");
  // Set page Title
  useEffect(() => {
    document.title = "Bohemian Tarders - Sign in";
  }, []);
  // Check if value is not empty return valid style
  const isEmpty = (value) =>
    value !== "" && value !== "0" ? styles.green : "";
  // Send data to server
  const clickHandler = (event) => {
    event.preventDefault();
    if (pass && email && isValid) {
      // codes to send data to backend
    }
  };

  return (
    <div className={styles.container}>
      {/* User location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / LOGIN
      </p>
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
      <div className={styles.innerContainer}>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">EMAIL ADDRESS:</label>
            <input
              id="email"
              type="email"
              name="email"
              inputMode="email"
              onChange={(e) => {
                // Set email
                setEmail(e.target.value);
                // Validate email
                setIsValid(validateEmail(email));
              }}
              // Validate email
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
                // Set password
                setPass(e.target.value);
              }}
              className={pass ? isEmpty(pass) : styles.invalid}
              // Set password
              onBlur={(e) => setPass(e.target.value)}
            />
            <p className={pass ? "" : styles.show}>
              <img src={redCross} alt="cross" />
              You must enter a password.
            </p>
          </div>
          <div className={styles.buttons}>
            {/* On click send data to server */}
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
          <Link to="/sign-up" className={styles.create}>
            CREATE ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
