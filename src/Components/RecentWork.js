import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"
import Section from "./Section"
import SecondaryButton from "./SecondaryButton"
import "bootstrap/dist/css/bootstrap.min.css"
import Video from "./Video"
import Videooverlay from "./Video2"

const RecentWork = () => {
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

        <div className="col-md-4">
          <h4>Video Overlay </h4>
          <Videooverlay videoSrcURL="https://www.youtube.com/embed/fKsuTtIHUwk"
          imageID="1" videoID="2"/>

         
        </div>

        <div className="col-md-4">
          <h4>Video Overlay </h4>
          <Videooverlay videoSrcURL="https://player.vimeo.com/video/232319032" 
          imageID="3" videoID="4"/>
        </div>

      </div>
    </Section>
  )
}

export default RecentWork
