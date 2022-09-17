import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import SupportEngine from "../SupportChat/SupportEngine";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <SupportEngine/> */}
    </>
  );
};

export default Layout;
