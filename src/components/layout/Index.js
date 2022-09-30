import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import SupportEngine from "../SupportChat/SupportEngine";

// Styles
import styles from "./Index.module.css";

// Assets
import chatIcon from "../../assets/comment-dots.svg";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <div className={styles.chatIcon}>
        <img src={chatIcon} alt="chat" />
      </div>
      <Footer />
      {/* <SupportEngine/> */}
    </div>
  );
};

export default Layout;
