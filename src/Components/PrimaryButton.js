import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink} from "gatsby";
import { device } from "./Device";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrimaryButton = props => {
  const LinkButton = styled(GatsbyLink)`
    font-family: "Source Sans Pro", sans-serif;
    font-size: 0.9em;
    font-weight: bold;
    color: black;
    background-color: #fafafa;
    margin: 0.5em;
    cursor: pointer;
    padding: 0.5em 1.2em;
    border: solid #e54c14 3px;
    text-decoration: none;
    /*box-shadow: 3px 3px 6px 1px #828282b5; */

    &:hover {
      box-shadow: 2px 3px 6px grey;
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

export default PrimaryButton
