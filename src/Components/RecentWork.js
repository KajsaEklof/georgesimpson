import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"
import Section from "./Section"
import SecondaryButton from "./SecondaryButton"
import "bootstrap/dist/css/bootstrap.min.css"
import VideoOverlay from "./Video2"
import Image from "../../static/images/Video Layover Images/BlackHoneyDig.jpg"
import { v4 as uuidv4 } from 'uuid';

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

      <div className="container">
      <div className="row display-flex">
        <div className="col-xl-4">
          <h4>First video</h4>
          <VideoOverlay
            videoSrcURL="https://www.youtube.com/embed/E19S8FVbA4E"
            videoTitle="Lush - #SPYCOPS"
            imageID={uuidv4()}
            videoID={uuidv4()}
            buttonID={uuidv4()}
            overlay={Image}
          />
        </div>

        <div className="col-xl-4">
          <h4>Second video</h4>
          <VideoOverlay
            videoSrcURL="https://www.youtube.com/embed/rJ6XIL9o9eg"
            videoTitle="George Five - Should I Be Afraid?"
            imageID={uuidv4()}
            videoID={uuidv4()}
            buttonID={uuidv4()}
            overlay={Image}
          />
        </div>

        <div className="col-xl-4">
          <h4>Third video</h4>
          <VideoOverlay
            videoSrcURL="https://www.youtube.com/embed/YKKuLzYzH2E"
            videoTitle="Black Honey -Dig"
            imageID={uuidv4()}
            videoID={uuidv4()}
            buttonID={uuidv4()}
            overlay={Image}
          />
        </div>

        <div className="col-xl-4">
          <h4>Video Overlay </h4>
          <VideoOverlay
            videoSrcURL="https://www.youtube.com/embed/fKsuTtIHUwk"
            imageID={uuidv4()}
            videoID={uuidv4()}
            buttonID={uuidv4()}
            overlay={Image}
          />
        </div>

        <div className="col-xl-4">
          <h4>Video Overlay </h4>
          <VideoOverlay
            videoSrcURL="https://player.vimeo.com/video/232319032"
            imageID={uuidv4()}
            videoID={uuidv4()}
            buttonID={uuidv4()}
            overlay={Image}
          />
        </div>
      </div>
      </div>
    </Section>
  )
}

export default RecentWork
