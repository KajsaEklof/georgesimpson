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
              videoTitle="Remarkable Places to Eat : Christmas | BBC TWO"
              videoSrcURL="https://www.youtube.com/embed/oxmx_HZby_U"
              overlay="Remarkable_Christmas.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Nadiya Bakes - BBC"
              videoSrcURL="https://www.youtube.com/embed/xHr9Iunc7pw"
              overlay="Nadiya_bakes.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Jack Whitehall and Michael Dapaah — Lost in the Countryside "
              videoSrcURL="https://www.youtube.com/embed/rfJDqegn31I"
              overlay="Lost_In_The_Countryside.png"
            />
          </div>
        </div>

        {/*SECOND ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="The Wine Show Series 3"
              videoSrcURL="https://www.youtube.com/embed/pwucr7k7JHI"
              overlay="The_Wine_Show.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Pep Guardiola loves his NISSAN LEAF"
              videoSrcURL="https://www.youtube.com/embed/i7No02beugA"
              overlay="Nissan.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Lutalo Muhammad - Every second counts - Bridgestone UK"
              videoSrcURL="https://www.youtube.com/embed/_7d_EjuZ47U"
              overlay="BridgeStone.png"
            />
          </div>
        </div>

        {/*THRID ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="Purplebricks Advert – Dan Goodfellow Dive 3m"
              videoSrcURL="https://www.youtube.com/embed/Kbp1U2BSCAs"
              overlay="Purple_Bricks3.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Purplebricks Advert – Bianca Walkden Kicking Practice"
              videoSrcURL="https://www.youtube.com/embed/D2ehgRpbpI4"
              overlay="Purple_Bricks2.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Purplebricks Advert - Laura Kenny Gold Medals"
              videoSrcURL="https://www.youtube.com/embed/FWkKKOKyUkY"
              overlay="Purple_Bricks1.png"
            />
          </div>
        </div>

        {/*FOURTH ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="AMA | Short Documentary"
              videoSrcURL="https://player.vimeo.com/video/345753033?title=0&byline=0&portrait=0"
              overlay="AMA.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Remarkable Places to Eat, Series 1"
              videoSrcURL="https://www.bbc.co.uk/programmes/p07g3dk2/player"
              overlay="Remarkable_Places_to_Eat.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Nadiya’s Time to Eat Season 1"
              videoSrcURL="https://www.youtube.com/embed/4HzTUffpNLs"
              overlay="Nadiya_Time_to_eat.png"
            />
          </div>
        </div>

        {/*FIFTH ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="All to play for - Barclays"
              videoSrcURL="https://www.youtube.com/embed/gS48Xy5oKWU"
              overlay="Barclays.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Winning Charades with Ian Wright | Portal UK"
              videoSrcURL="https://www.youtube.com/embed/SXauM5wvO7s"
              overlay="Portal.png"
            />
          </div>
          <div className="col col-video">
            <Videocontainer
              videoTitle="Paul Epworth x 360 Reality Audio"
              videoSrcURL="https://www.youtube.com/embed/n5widAXjeK8"
              overlay="360Audio.png"
            />
          </div>
        </div>

        {/*SIXTH ROW*/}
        <div className="row work">
          <div className="col col-video">
            <Videocontainer
              videoTitle="ReFresh with HelloFresh & Davina McCall| HelloFresh"
              videoSrcURL="https://www.youtube.com/embed/eKoif5xUHC8"
              overlay="HelloFresh.png"
            />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default WorkPage;
