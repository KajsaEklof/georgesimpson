import React from "react"
import styled from "styled-components"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const Videocontainer = styled.div`
    width: 100%;
    height: 100%;
  `

  return (
    <Videocontainer>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        modestbranding="0"
        width="350px"
        height="200px"
      />
      
    </Videocontainer>
  )
}
export default Video
