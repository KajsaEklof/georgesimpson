import React, { Component } from "react"
import videoStyles from "./video.module.css"

class VideoOverlay extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this)
    // this.handleTab = this.handleTab.bind(this)
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
    const myButtonID = this.props.buttonID  

    const handleClick = event => {
      event.preventDefault();
      const theButton = event.target
      const theImage = theButton.nextElementSibling
      const theVideo = theImage.nextElementSibling

      theButton.style.display = "none"
      theImage.style.display = "none"
      theVideo.style.display = "block"
      theVideo.src += "?autoplay=1&modestbranding=1&color=red"

    }
    

    return (
      <div className={videoStyles.videocontainer}>
        <div className={videoStyles.overlayContainer}>
          <button
            style={{ display: " " }}
            type="button"
            id={this.props.buttonID}
            value={this.props.buttonID}
            className={videoStyles.button}
            onClick={handleClick}
            // onKeyDown={this.handleTab}
          >
            Play
          </button>
          <img
            style={{ display: " " }}
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
          ></iframe>
        </div>
      </div>
    )
  }
}

export default VideoOverlay
