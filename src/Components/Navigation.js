import React from "react"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.css"
import styled from "styled-components"
import { device } from "./ComponentStyles/Device"
import "bootstrap/dist/css/bootstrap.min.css"

const Navigation = props => {
  const Bar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background: white;
    z-index: 99999;

    @media ${device.mobile} {
      display: none;
    }
  `
  const StyledLink = styled(Link)`
    color: #000000;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 1em;
    position: relative;
    text-decoration: none;

    &:hover {
      color: var(--green);
      transition: color 0.4s ease;
      -webkit-transition: color 0.4s ease;
    }
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      display: block;
      right: 0;
      background: #fff;
      transition: width 0.4s ease;
      -webkit-transition: width 0.4s ease;
    }
    &:hover:after {
      width: 100%;
      left: 0;
      background: var(--green);
    }
  `

  return (
    <nav className="navbar sticky-top navigationbar">
    <Link to="/" className={navigationStyles.logo}> George Simpson</Link>  
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
            to="/behind-the-scenes/"
            className={navigationStyles.navLink}
            activeClassName={navigationStyles.active}
          >
            Behind the Scenes
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
