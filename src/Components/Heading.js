import React from "react";
import styled from "styled-components";

const Heading = props => {
  const Title = styled.h1`
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: #000000;
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.25rem;
    font-weight: bold;
    line-height: 1.1;
    display: inline-block;
    clear: both;
    :after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background: #e54c14;
    }
  `

  return <Title>{props.title}</Title>
}

export default Heading
