// https://codepen.io/icutpeople/pen/whueK Text over video

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { device } from "./ComponentStyles/Device"
import HeaderVideoStyles from "./headerVideo.module.css"

const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  @media ${device.desktop} {
    margin-top: 0;
    height: calc(100vh / 2);
  }
`
const OverlayText = styled.div`
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 6em);

  @media ${device.desktop} {
    height: calc(100vh / 2);
  }
`

const TopText = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 3em;
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  letter-spacing: -3px;
  font-style: italic;
`
const TagLine = styled.h3`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.17em;
`

const Bgroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 15%;
  padding-top: 2em;
  width: 100%;
  @media ${device.desktop} {
    flex-direction: row;
    max-width: 50%;
    height: 0%;
    justify-content: ;
  }
`

const HeaderVideo = () => {
  const data = useStaticQuery(graphql`
    query HeaderImage {
      image: file(relativePath: { eq: "GS_inhills_800.jpg" }) {
        childImageSharp {
          fixed {
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
    <VideoContainer>
      {/*<video autoPlay={true} muted={true} loop={true} width="100%" >
        <source src={Showreel} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      
      <PrimaryButton text={"View Showreel"} link={"/work/"} />
      <PrimaryButton text={"Contact"} link={"/contact/"} />
    
    */}

      <Img
        fluid={data.image.childImageSharp.fluid}
        className={HeaderVideoStyles.heroimage}
      />
      <OverlayText>
        <TopText>George Simpson</TopText>
        <TagLine>Camera Operator | Steadicam </TagLine>
        <Bgroup>
          <button className="button sink" title="Download CV">
            View Showreel
            <FontAwesomeIcon
              icon="arrow-right"
              size="lg"
              className="button-icon"
            />
          </button>
          <button className="button sink" title="Download CV">
            Contact
            <FontAwesomeIcon
              icon="arrow-right"
              size="lg"
              className="button-icon"
            />
          </button>
        </Bgroup>
      </OverlayText>
    </VideoContainer>
  )
}

export default HeaderVideo
