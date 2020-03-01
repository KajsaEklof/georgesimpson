// https://codepen.io/icutpeople/pen/whueK Text over video 

import React from "react";
import Showreel from "../Images/Ismar Website Loop - Placeholder Cut-_1.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
position: relative;
`
const OverlayText = styled.div`
background: rgba(0,0,0,0);
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const TopText = styled.h1`
color: white;
text-align: center;
font-family: "Bebas Neue",sans-serif;
font-size: 4em;
font-weight: bold;
line-height: 1.1;
letter-spacing: 0.03em;
margin: 0;
padding: 0;
`
const TagLine = styled.h2`
color: white;
text-align: center;
text-transform: uppercase;
`


const HeaderVideo = () => {
  return (
      <VideoContainer>
    <video autoPlay={true} muted={true} loop={true} width="100%" >
    
    <source src={Showreel} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
    </video>

    <OverlayText>
        <TopText>George Simpson</TopText>
        <TagLine>Steadicam | Camera Operator</TagLine>
    </OverlayText>
    </VideoContainer>
  )
}

export default HeaderVideo;
