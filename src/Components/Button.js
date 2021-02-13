import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { device } from "./ComponentStyles/Device"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LayoutStyles from "./layout.module.css"

const Button = props => {
  const Button = styled.button`
    background-color: var(--olivegreen);
    border-radius: 50px;
    border: none;
    /*box-shadow: 3px 3px 6px 1px #828282b5; */
    color: #ffffff;
    cursor: pointer;
    font-family: "Futura PT", sans-serif;
    font-size: 0.9em;
    font-weight: bold;
    margin: 0.5em;
    padding: 0.5em 1.2em;
    text-align: center;
    text-decoration: none;
    width: 50%;

    &:hover {
      background-color: hsla(134, 16%, 38%, 0.83);
      transition: 0.3s ease-in-out;
    }
    &:active {
      box-shadow: none;
    }

    @media ${device.desktop} {
      font-size: 1em;
      padding: 0.5em 2em;
    }
  `

  const iconStyle = {
    paddingLeft: "0.3em",
  }

  return (
    <Button type="button" className={LayoutStyles.sink}>
      {props.text}
      <FontAwesomeIcon icon="arrow-right" style={iconStyle} size="lg" />
    </Button>
  )
}

export default Button
