import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { device } from "./ComponentStyles/Device"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LayoutStyles from "./layout.module.css"

const PrimaryButton = props => {
  const LinkButton = styled(GatsbyLink)`
    background-color: var(--olivegreen);
    border-radius: 50px;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.9em;
    font-family: "Futura PT", sans-serif;
    font-weight: bold;
    padding: 0.5em 1.2em;
    text-align: center;
    text-decoration: none;
    width: 50%;
    min-width: fit-content;

    &:hover {
      background-color: hsla(134, 16%, 38%, 0.83);
      color: #ffffff;
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
    <LinkButton to={props.link} role="button" className={LayoutStyles.sink}>
      {props.text}
      <FontAwesomeIcon icon="arrow-right" style={iconStyle} size="lg" />
    </LinkButton>
  )
}

export default PrimaryButton
