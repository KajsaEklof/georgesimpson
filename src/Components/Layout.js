import React from "react";
// import "../Styles/index.css";
import '../Styles/style.css';
import layoutStyles from "./layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import "typeface-source-sans-pro";
import "typeface-bebas-neue";
import "typeface-poppins";
import 'focus-visible';

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header {}/>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
