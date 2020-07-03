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
        modestbranding="1"
        width="100%"
        height="100%"
      />
    </Videocontainer>
  )
}
export default Video
