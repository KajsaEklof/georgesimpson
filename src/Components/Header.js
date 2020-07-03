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
  `

  const Logo = styled.div`
    font-family: futura-pt-bold, sans-serif;
    font-weight: 600;
    font-style: italic;
    font-size: 2em;
    display: flex;
    align-items: center;
    padding: 0em 0em 0em 1em;
    letter-spacing: -3px;
  `

  return (
    <StyledHeader>
      <Logo>George Simpson</Logo>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
