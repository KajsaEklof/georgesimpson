import React, { useState } from "react";
// import "../Styles/index.css";
import "../Styles/style.css";
import layoutStyles from "./layout.module.css";
import Footer from "./Footer";
import "typeface-source-sans-pro";
import "typeface-bebas-neue";
import "typeface-poppins";
import "focus-visible";
import Menu from "./Menu";
import Burger from "./Burger";




const Layout = props => {
  const [open, setOpen] = useState(false)

  return (

    <div className={layoutStyles.container}>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <main className={layoutStyles.content}>{props.children}</main>
      <Footer />
    </div>

  )
}

export default Layout
