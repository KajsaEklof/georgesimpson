import React from "react"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.css"
import styled from "styled-components"

const Navigation = props => {
  const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `
  const StyledLink = styled(Link)`
    margin: 1em;
    color: #000000;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    text-decoration: none;
    position: relative;
    &:hover {
        color: #e54c14;
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
        background: #e54c14;
      }  
  `

  return (
    <Nav>
      <StyledLink
        to="/"
        activeClassName={navigationStyles.active}
      >
        Home
      </StyledLink>
      <StyledLink
        to="/work/"
        activeClassName={navigationStyles.active}
      >
        Work
      </StyledLink>
      <StyledLink
        to="/behind-the-scenes/"
        activeClassName={navigationStyles.active}
      >
        Behind the Scenes
      </StyledLink>
      <StyledLink
        to="/contact/"
        activeClassName={navigationStyles.active}
      >
        Contact/CV
      </StyledLink>
    </Nav>
  )
}

export default Navigation
