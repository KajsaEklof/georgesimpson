import React from "react";
import { Link } from "gatsby";
import navigationStyles from "./navigation.module.css";
import styled from 'styled-components';

const Navigation = props => {
    const Nav = styled.nav`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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
