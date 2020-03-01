import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <h2>{props.title}</h2>
    <iframe
      src={props.src}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width={props.width}
      height={props.height}
    />
  </div>
)
export default Video
