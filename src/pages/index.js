import React, { useState } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import About from "../Components/About"
import HeaderVideo from "../Components/HeaderVideo"
import Menu from "../Components/Menu"
import Burger from "../Components/Burger"
import Footer from "../Components/Footer"
import layoutStyles from "../Components/layout.module.css"
import KitList from "../Components/Kitlist"
import RecentWork from "../Components/RecentWork"
import Navigation from "../Components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <Navigation />
      <div>
        <Burger open={open} setOpen={setOpen} color={"white"} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div className={layoutStyles.content}>
        <HeaderVideo />
        <About />
        <KitList />
        <RecentWork />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
