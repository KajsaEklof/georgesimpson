import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { device } from "./ComponentStyles/Device"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LayoutStyles from "./layout.module.css"

const PrimaryButton = props => {
  const LinkButton = styled(GatsbyLink)`
    font-family: "Futura PT", sans-serif;
    font-size: 0.9em;
    font-weight: bold;
    color: #000000;
    background-color: hsla(0, 0%, 100%, 0.7);
    margin: 0.5em;
    cursor: pointer;
    padding: 0.5em 1.2em;
    /*border: solid var(--olivegreen) 3px;*/
    border-radius: 50px;
    text-decoration: none;
    /*box-shadow: 3px 3px 6px 1px #828282b5; */
    width: 50%;
    text-align: center;

    &:hover {
      background-color: var(--seablue);
      transition: 0.3s ease-in-out;
      color: var(--sand);
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
        {props.text} <FontAwesomeIcon icon="arrow-right" style={iconStyle} size="lg"/>
      </LinkButton>
  )
}

export default PrimaryButton