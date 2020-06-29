import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"

const Section = props => {
  const Container = styled.section`
    margin: 0 auto;
    width: 100%;
    padding-top: 2em;
  `
  return (
    <Container>
      <h2>{props.title}</h2>
      {props.children}
    </Container>
  )
}

export default Section
