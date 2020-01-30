import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PrimaryButton = props => {
  const Button = styled.button`
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background-color: #e54c14;
    border-radius: 1em;
    cursor: pointer;
    padding: 0.5em 2em;
    border: none;
    box-shadow: 3px 3px 6px 1px #828282b5;
    &:hover {
      box-shadow: 2px 3px 6px grey;
    }
  `
  return (
    <Link to={props.link}>
      <Button>{props.text}</Button>
    </Link>
  )
}

export default PrimaryButton
