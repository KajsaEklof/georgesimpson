import React from "react"
// import headerStyles from './header.module.css';
import Navigation from "./Navigation"
import styled from "styled-components"


const Header = props => {
  const StyledHeader = styled.div`
    height: 50%;
    background: blue;
  `

  return (
    <StyledHeader>
      <Navigation />
      
    </StyledHeader>
  )
}

export default Header
