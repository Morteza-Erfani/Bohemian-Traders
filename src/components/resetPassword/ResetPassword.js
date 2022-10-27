import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./ResetPassword.module.css";

// functions
import { validateEmail } from "../../helpers/functions";

// Assets
import redCross from "../../assets/redCross.svg";

const ResetPassword = () => {
  // Set email validation
  const [isValid, setIsValid] = useState(true);
  // Set email
  const [email, setEmail] = useState("");
  // Set page Title
  useEffect(() => {
    document.title = "Bohemian Traders - Forget Password";
  }, []);
  // Check if value is not empty return valid class name
  const isEmpty = (value) => (value !== "" ? styles.green : "");
  // Send data to server
  const clickHandler = (event) => {
    if (email && isValid) {
      // codes to send data to backend
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
    {/* User location in site */}
      <p className={styles.location}>
        <Link to="/">HOME</Link> / FORGET PASSWORD
      </p>
      <h2>RESET PASSWORD</h2>
      <p>
        Fill in your email below to request a new password. An email will be
        sent to the address below containing a link to verify your email
        address.
      </p>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValid(validateEmail(email));
            }}
            // validate email
            onBlur={() => setIsValid(validateEmail(email))}
            className={isValid ? isEmpty(email) : styles.invalid}
          />
          {/* invalid email error */}
          <p className={isValid ? "" : styles.show}>
            <img src={redCross} alt="cross" />
            Please use a valid email address, such as user@example.com.
          </p>
        </div>
        <Link to="/signin">
          <button type="submit" onClick={(e) => clickHandler(e)}>
            RESET PASSWORD
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
