import React, { useState } from "react";

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Styles
import styles from "./Index.module.css";

// Assets
import chatIcon from "../../assets/comment-dots.svg";

// Modals
import ChatModal from "./chatModal/ChatModal";

const Layout = ({ children }) => {
  // set state from showing Chat Modal
  const [showChat, setShowChat] = useState(false);

  // Disable scorlling backgronf when Modal is active
  if (showChat) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      {/* fixed chat icon */}
      <div className={styles.chatIcon} onClick={() => setShowChat(true)}>
        <img src={chatIcon} alt="chat" />
      </div>
      <ChatModal
        // give modal show modal status
        show={showChat}
        // give modal close modal function
        onClose={() => setShowChat(false)}
      />
      <Footer />
    </div>
  );
};

export default Layout;
