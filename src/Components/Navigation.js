import React from "react";
import { Link } from "gatsby";
import navigationStyles from "./navigation.module.css";
import styled from "styled-components";
import { device } from "./ComponentStyles/Device";


const Navigation = props => {
  const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background: white;
    z-index: 99999;

    @media ${device.mobile} {
      display:none;
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
    <Nav>
      <Link
        to="/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Home
      </Link>
      <Link
        to="/work/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Work
      </Link>
      <Link
        to="/behind-the-scenes/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Behind the Scenes
      </Link>
      <Link
        to="/contact/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Contact/CV
      </Link>
    </Nav>
  )
}

export default Navigation
