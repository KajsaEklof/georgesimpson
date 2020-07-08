import React, { Component } from "react"
import videoStyles from "./video.module.css"

class VideoOverlay extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleTab = this.handleTab.bind(this)
  }

  handleClick(ev) {
    const thevid = document.getElementById(`${this.props.videoID}`)
    const thebutton = document.getElementById(`${this.props.buttonID}`)
    const theimage = document.getElementById(`${this.props.imageID}`)
    thebutton.style.display = "none"
    theimage.style.display = "none"
    thevid.style.display = "block"
    thevid.src += "?autoplay=1&modestbranding=1&color=red"
  }

  // handleTab(ev) {
  //   const thevid = document.getElementById(`${this.props.videoID}`)
  //   const thebutton = document.getElementById(`${this.props.buttonID}`)
  //   const theimage = document.getElementById(`${this.props.imageID}`)
  //   thebutton.style.display = "none"
  //   theimage.style.display = "none"
  //   thevid.style.display = "block"
  //   thevid.src += "?autoplay=1&modestbranding=1&color=red"
  // }

  render() {
    return (
      <div className={videoStyles.videocontainer}>
        <div className={videoStyles.overlayContainer}>
          <button
          type="button" name="play-button"
            id={this.props.buttonID}
            className={videoStyles.button}
            onClick={this.handleClick}
            // onKeyDown={this.handleTab}
          >
            Click me
          </button>
          <img
            id={this.props.imageID}
            alt={this.props.alt}
            src={this.props.overlay}
            className={videoStyles.overlay}
          />
          <iframe
            className={videoStyles.iframe}
            style={{ display: "none" }}
            id={this.props.videoID}
            src={this.props.videoSrcURL}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; picture-in-picture"
            title={this.props.videoTitle}
            width="350px"
            height="200px"
          ></iframe>
        </div>
      </div>
    )
  }
}

export default VideoOverlay
