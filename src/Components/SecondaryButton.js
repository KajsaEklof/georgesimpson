import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "gatsby"
import { device } from "./ComponentStyles/Device"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SecondaryButton = props => {
  const LinkButton = styled(GatsbyLink)`
    font-family: "Futura PT", sans-serif;
    font-size: 0.9em;
    font-weight: bold;
    color: black;
    background-color: var(--green);
    margin: 0.5em;
    cursor: pointer;
    padding: 0.5em 1.2em;
    /*border: solid var(--green) 3px;*/
    border-radius: 50px;
    text-decoration: none;
    /*box-shadow: 3px 3px 6px 1px #828282b5; */
    width: fit-content;

    &:hover {
      background-color: var(--green);
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
    <LinkButton to={props.link} role="button">
      {props.text} <FontAwesomeIcon icon={faArrowRight} style={iconStyle} />
    </LinkButton>
  )
}

export default SecondaryButton
