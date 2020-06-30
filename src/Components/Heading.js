import React from "react";
import styled from "styled-components";

const Heading = props => {
  
  //This is the old heading with underline
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
    font-size: 3.25rem;
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

  const PageTitle = styled.h1`
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
    font-size: 3.052em;
    font-weight: bold;
    line-height: 1.1;
  `


  return <PageTitle>{props.title}</PageTitle>
}

export default Heading