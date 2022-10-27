import React from "react";

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Styles
import styles from "./Index.module.css";

// Assets
import chatIcon from "../../assets/comment-dots.svg";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      {/* fixed chat icon */}
      <div className={styles.chatIcon}>
        <img src={chatIcon} alt="chat" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
