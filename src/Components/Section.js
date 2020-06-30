import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"

const Section = props => {
  const Container = styled.section`
    margin: 0 auto;
    width: 100%;
    padding-top: 2em;
  `

  const Heading = styled.h2`
    letter-spacing: -2px;
  `
  return (
    <Container>
      <Heading>{props.title}</Heading>
      {props.children}
    </Container>
  )
}

export default Section
