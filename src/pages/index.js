import React, { useState } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import PrimaryButton from "../Components/PrimaryButton"
import About from "../Components/About"
import CenteredContainer from "../Components/ComponentStyles/CenteredContainer"
import HeaderVideo from "../Components/HeaderVideo"
import Header from "../Components/Header"
import Menu from "../Components/Menu"
import Burger from "../Components/Burger"
import Footer from "../Components/Footer"
import layoutStyles from "../Components/layout.module.css"
import KitList from "../Components/Kitlist";

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div>
        <Burger open={open} setOpen={setOpen} color={"white"} />
        <Menu open={open} setOpen={setOpen} />
      </div>

      <HeaderVideo />
      <div className={layoutStyles.content}>
        <About />
        <KitList />
        </div>

      <Footer />
    </div>
  )
}

export default IndexPage
