import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "./Device";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrimaryButton = props => {
  const Button = styled.button`
    font-family: "Source Sans Pro", sans-serif;
    font-size: 0.9em;
    font-weight: bold;
    color: black;
    background-color: #fafafa;
    margin: 0.5em;
    cursor: pointer;
    padding: 0.5em 1.2em;
    border: solid #e54c14 3px;
    /*box-shadow: 3px 3px 6px 1px #828282b5; */

    &:hover {
      box-shadow: 2px 3px 6px grey;
    }
    &:active {
      box-shadow: inset 1px 2px 4px grey;
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
    <Link to={props.link}>
      <Button>
        {props.text} <FontAwesomeIcon icon={faArrowRight} style={iconStyle} />
      </Button>
    </Link>
  )
}

export default PrimaryButton
