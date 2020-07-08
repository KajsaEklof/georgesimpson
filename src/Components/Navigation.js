import React from "react"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Navigation = props => {
  return (
    <nav className="navbar sticky-top navigationbar">
      <Link to="/" className={navigationStyles.logo}>
        George Simpson
      </Link>
      <ul className="nav justify-content-end">
        <li clasName="nav-item">
          <Link
            to="/"
            className={navigationStyles.navLink}
            activeClassName={navigationStyles.active}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/work/"
            className={navigationStyles.navLink}
            activeClassName={navigationStyles.active}
          >
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact/"
            className={navigationStyles.navLink}
            activeClassName={navigationStyles.active}
          >
            Contact/CV
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
