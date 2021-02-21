// https://codepen.io/icutpeople/pen/whueK Text over video

import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from './ComponentStyles/Device';
import ShowreelVideo from '../files/Website Cover Video.mp4';

const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  @media ${device.desktop} {
    margin-top: 0;
    height: unset;
  }
`;
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
    height: 60vh;
  }
`;

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
`;
const TagLine = styled.h3`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.17em;
`;

const Bgroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  padding-top: 2em;
  width: 100%;
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 50%;
    height: 0%;
  }
`;

// <Image
//   fileName="GeorgeSimpson_aboutMe.jpg"
//   alt="George Simpson"
//   className={HeaderVideoStyles.heroimage}
// />;

const HeaderVideo = () => {
  return (
    <VideoContainer>
      <video className="header-video" loop muted autoPlay>
        <source src={ShowreelVideo} type="video/mp4" />
      </video>
      <OverlayText>
        <TopText>George Simpson</TopText>
        <TagLine>Camera Operator | Steadicam </TagLine>
        <Bgroup>
          <Link
            className="header-video-container button sink"
            title="View showreel"
            to="/work"
          >
            View Showreel
            <FontAwesomeIcon
              icon="arrow-right"
              size="lg"
              className="button-icon"
            />
          </Link>
          <Link
            className="header-video-container button sink"
            title="Contact"
            to="/contact"
          >
            Contact
            <FontAwesomeIcon
              icon="arrow-right"
              size="lg"
              className="button-icon"
            />
          </Link>
        </Bgroup>
      </OverlayText>
    </VideoContainer>
  );
};

export default HeaderVideo;
