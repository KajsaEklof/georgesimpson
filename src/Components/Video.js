import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Components/Image';

const Video = ({ videoSrcURL, videoTitle, width, height, ...props }) => {
  // const Videocontainer = styled.div`
  //   width: 100%;
  //   height: 100%;
  // `

  const defaultHeight = '275';
  const defaultWidth = '550';

  const proportions = {
    height: height || defaultHeight,
    width: width || defaultWidth,
  };

  return (
    <div className="video-container">
      <div className="aspect-ratio">
        <div className="video-container__overlay">
          <Image
            style={{ position: 'absolute' }}
            fileName="GeorgeSimpson_aboutMe.jpg"
            alt="George Simpson"
            className="video-container__overlay-image"
          />
          <button title="Play video" className="play-button">
            <FontAwesomeIcon icon="play-circle" className="play-button__icon" />
          </button>
        </div>
        <iframe
          src={`${videoSrcURL}?&modestbranding=1`}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          controls="0"
          iv_load_policy="3"
          width={proportions.width}
          height={proportions.height}
        />
      </div>
      <p className="video-title">{videoTitle}</p>
    </div>
  );
};
export default Video;
