// https://codepen.io/icutpeople/pen/whueK Text over video

import React from "react"
import Showreel from "../Images/behindthescenes.jpg"
import styled from "styled-components"
import { device } from "./ComponentStyles/Device"
import PrimaryButton from "../Components/PrimaryButton"

const VideoContainer = styled.div`
  position: relative;
  top: 3em;
  @media ${device.mobile} {
    margin-top: 15%;
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
`

const TopText = styled.h1`
  color: white;
  text-align: center;
  font-size: 5em;
  font-weight: 600;
  line-height: 1.1;
  margin: 0;
  padding: 0;
  letter-spacing: -5px;
  font-style: italic;
`
const TagLine = styled.h3`
  color: white;
  text-align: center;
  text-transform: uppercase;
`

const Bgroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 2em;
  @media ${device.mobile} {
    flex-direction: column;
  }
`

const HeaderVideo = () => {
  return (
    <VideoContainer>
      {/*<video autoPlay={true} muted={true} loop={true} width="100%" >
    
    <source src={Showreel} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>*/}
      <img src={Showreel} width="100vw" />

      <OverlayText>
        <TopText>George Simpson</TopText>
        <TagLine>Camera Operator | Steadicam </TagLine>
        <Bgroup>
          <PrimaryButton text={"View Showreel"} link={"/work/"} />
          <PrimaryButton text={"Contact"} link={"/contact/"} />
        </Bgroup>
      </OverlayText>
    </VideoContainer>
  )
}

export default HeaderVideo
