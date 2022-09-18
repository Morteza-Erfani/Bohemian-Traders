import React, { useEffect } from "react";

// Styles
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  useEffect(() => {
    document.title = "Bohemian Traders - Reset Password";
  }, []);

  return (
    <div className={styles.container}>
      <h2>RESET PASSWORD</h2>
      <p>
        Fill in your email below to request a new password. An email will be
        sent to the address below containing a link to verify your email
        address.
      </p>
      <form className={styles.form}>
        <label for="email">EMAIL ADDRESS</label>
        <input id="email" type="email" />
        <button type="submit">RESET PASSWORD</button>
      </form>
    </div>
  );
};

export default ResetPassword;
