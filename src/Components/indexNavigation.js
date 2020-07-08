import React, { useState } from "react"
import layoutStyles from "./layout.module.css"
import Menu from "./Menu"
import Burger from "./Burger"
import { Link } from "gatsby"
import Navigation from "./Navigation"

const IndexNavigation = props => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Navigation />
      <div className={layoutStyles.mobilenavbar}>
        <Link to="/" className={layoutStyles.logo}>
          George Simpson
        </Link>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  )
}

export default IndexNavigation
