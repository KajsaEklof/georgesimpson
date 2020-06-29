import React from "react"
// import headerStyles from './header.module.css';
import Navigation from "./Navigation"
import styled from "styled-components"

const Header = props => {
  const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
  `

  const Logo = styled.div`
    font-family: "Futura PT";
    font-size: 2em;
    display: flex;
    align-items: center;
    padding: 0em 0em 0em 1em;
    letter-spacing: -3px;
    font-weight: 600;
    font-style: italic;
  `

  return (
    <StyledHeader>
      <Logo>George Simpson</Logo>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
