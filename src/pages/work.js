import React from 'react';
import Layout from '../Components/Layout';
import SEO from '../Components/Seo';
import Videocontainer from '../Components/Video';

const WorkPage = () => {
  // <div className="col">
  // </div>
  return (
    <React.Fragment>
      <SEO title="Work" />
      <Layout className="fit-window" homepage={false}>
        <div className="row">
          <h1 className="page-title">Work</h1>
        </div>

        <div className="row work">
          <div className="col showreel">
            <Videocontainer
              videoTitle="Steadicam Showreel"
              videoSrcURL="https://www.youtube.com/embed/gS48Xy5oKWU"
            />
          </div>
          <div className="col showreel">
            <Videocontainer
              videoTitle="Operator Showreel"
              videoSrcURL="https://www.youtube.com/embed/gS48Xy5oKWU"
            />
          </div>
        </div>

        {/*FIRST ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="All to play for - Barclays"
              videoSrcURL="https://www.youtube.com/embed/gS48Xy5oKWU"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Nadiya Bakes - BBC"
              videoSrcURL="https://www.youtube.com/embed/xHr9Iunc7pw"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Jack Whitehall and Michael Dapaah — Lost in the Countryside "
              videoSrcURL="https://www.youtube.com/embed/rfJDqegn31I"
            />
          </div>
        </div>

        {/*SECOND ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="The Wine Show Series 3"
              videoSrcURL="https://www.youtube.com/embed/pwucr7k7JHI"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Pep Guardiola loves his NISSAN LEAF"
              videoSrcURL="https://www.youtube.com/embed/i7No02beugA"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Lutalo Muhammad - Every second counts - Bridgestone UK"
              videoSrcURL="https://www.youtube.com/embed/_7d_EjuZ47U"
            />
          </div>
        </div>

        {/*THRID ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="Purplebricks Advert – Dan Goodfellow Dive 3m"
              videoSrcURL="https://www.youtube.com/embed/Kbp1U2BSCAs"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Purplebricks Advert – Bianca Walkden Kicking Practice"
              videoSrcURL="https://www.youtube.com/embed/D2ehgRpbpI4"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Purplebricks Advert - Laura Kenny Gold Medals"
              videoSrcURL="https://www.youtube.com/embed/FWkKKOKyUkY"
            />
          </div>
        </div>

        {/*FOURTH ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="AMA | Short Documentary"
              videoSrcURL="https://player.vimeo.com/video/345753033?title=0&byline=0&portrait=0"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Remarkable Places to Eat, Series 1"
              videoSrcURL="https://www.bbc.co.uk/programmes/p07g3dk2/player"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Nadiya’s Time to Eat Season 1"
              videoSrcURL="https://www.youtube.com/embed/4HzTUffpNLs"
            />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default WorkPage;
