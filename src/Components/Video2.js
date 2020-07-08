import React, { Component } from "react"
import Image from "../images/behind.jpg"
import videoStyles from "./video.module.css"

class Videooverlay extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleTab = this.handleTab.bind(this)
  }

  handleClick(ev) {
    const thevid = document.getElementById(`${this.props.videoID}`)
    console.log(thevid)
    const overlay = document.getElementById(`${this.props.imageID}`)
    overlay.style.display = "none"
    thevid.style.display = "block"
    thevid.src += "?autoplay=1&modestbranding=1&color=red"
    console.log(thevid)
  }

  handleTab(ev) {
    const thevid = document.getElementById(`${this.props.videoID}`)
    console.log(thevid)
    const overlay = document.getElementById(`${this.props.imageID}`)
    overlay.style.display = "none"
    thevid.style.display = "block"
    thevid.src += "?autoplay=1&modestbranding=1&color=red"
    console.log(thevid)
  }

  render() {
    return (
      <div className={videoStyles.videocontainer}>
        <img
          alt={this.props.alt}
          tabIndex="0"
          src={Image}
          id={this.props.imageID}
          className={videoStyles.overlay}
          onClick={this.handleClick}
          onKeyDown={this.handleTab}
        />
        <iframe
          className={videoStyles.iframe}
          style={{ display: "none" }}
          id={this.props.videoID}
          src={this.props.videoSrcURL}
          frameborder="0"
          allowfullscreen
          allow="autoplay; picture-in-picture"
          title={this.props.videoTitle}
        ></iframe>
      </div>
    )
  }
}

export default Videooverlay
