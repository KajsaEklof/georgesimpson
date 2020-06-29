import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"
import Section from "./Section"
import SecondaryButton from "./SecondaryButton"

const RecentWork = () => {
  const Video = styled.div`
    width: 30%;
    height: 200px;
    background: var(--blue);
  `

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom:1em ;
  `

  return (
    <Section title="Recent Work">
      <ButtonContainer>
        <SecondaryButton link="/work/" text="View all work" />
      </ButtonContainer>

      <Container>
        <Video>
          <h4>First video</h4>
        </Video>
        <Video>
          <h4>Second video</h4>
        </Video>
        <Video>
          <h4>Third video</h4>
        </Video>
      </Container>
    </Section>
  )
}

export default RecentWork
