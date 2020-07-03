import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"
import Section from "./Section"
import SecondaryButton from "./SecondaryButton"
import "bootstrap/dist/css/bootstrap.min.css"
import Video from "./Video"

const RecentWork = () => {
  const Video2 = styled.div`
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
    justify-content: flex-start;
    padding-bottom: 1em;
    @media ${device.desktop} {
      justify-content: flex-end;
    }
  `

  return (
    <Section title="Recent Work">
      <ButtonContainer>
        <SecondaryButton link="/work/" text="View all work" />
      </ButtonContainer>

        <div className="row align-items-center">
          <div className="col-md-4">
            <h4>First video</h4>
            <Video
              videoSrcURL="https://www.youtube.com/embed/fKsuTtIHUwk"
              videoTitle="Official Music Video on YouTube"
            />
          </div>

          <div className="col-md-4">
            <h4>Second video</h4>
            <Video
              videoSrcURL="https://www.youtube.com/embed/fKsuTtIHUwk"
              videoTitle="Official Music Video on YouTube"
            />
          </div>

          <div className="col-md-4">
            <h4>Third video</h4>
            <Video
              videoSrcURL="https://www.youtube.com/embed/fKsuTtIHUwk"
              videoTitle="Official Music Video on YouTube"
            />
          </div>
        </div>

    </Section>
  )
}

export default RecentWork
