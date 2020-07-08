import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"
import Section from "./Section"
import SecondaryButton from "./SecondaryButton"
import "bootstrap/dist/css/bootstrap.min.css"
import Video from "./Video"
import VideoOverlay from "./Video2"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
  const data = useStaticQuery(graphql`
    query OverlayImage {
      image: file(relativePath: { eq: "GeorgeSimpson_bythesea_400.jpg" }) {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section title="Recent Work">
      <ButtonContainer>
        <SecondaryButton link="/work/" text="View all work" />
      </ButtonContainer>

      <div className="row align-items-center">
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
    </Section>
  )
}

export default RecentWork
