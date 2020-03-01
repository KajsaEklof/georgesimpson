import React, { useState } from "react"
// import "../Styles/index.css";
import "../Styles/style.css"
import layoutStyles from "./layout.module.css"
import Footer from "./Footer"
import Header from "./Header"
import "typeface-source-sans-pro"
import "typeface-bebas-neue"
import "typeface-poppins"
import "focus-visible"
import Menu from "./Menu"
import Burger from "./Burger"
import HeaderVideo from "../Components/HeaderVideo"

const Layout = props => {
  const [open, setOpen] = useState(false)

  const url = window.location.pathname

  return (
    <div className={layoutStyles.container}>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Header />

      {url === "/" ? (
        <HeaderVideo
          src="https://www.youtube.com/embed/z_wrM8ZjCyc?rel=1&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1"
          width="100%"
        />
      ) : null}
      
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
