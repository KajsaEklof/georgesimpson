import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';

import Layout from '../Components/Layout';
import SEO from '../Components/Seo';
import HeaderVideo from '../Components/HeaderVideo';
import Videocontainer from '../Components/Video';
import Image from '../Components/Image';

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
library.add(fab, faArrowRight, faPlayCircle);

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Layout homepage="true">
        <HeaderVideo />
        <section className="section">
          <h2 className="section-heading">About me</h2>
          <div className="row">
            <div className="col">
              <h3>Hello!</h3>
            </div>
          </div>
          <div className="row about">
            <div className="col about-me base-0">
              <p>
                Thank you for visiting my website and checking out some of my
                work. I am an enthusiastic and passionate camera operator and
                steadicam operator/owner based in Dorking, Surrey.
              </p>
              <p>
                A bit about me, after graduating from Ravensbourne University
                with a degree in Broadcast Operations I went on to work at one
                of London's largest and busiest broadcast hire facilities. There
                I learnt the equipment inside and out and honed my operating and
                assisting skills when out crewing on such shows as Peep
                Show and Made in Chelsea. 
              </p>

              <p>
                After two and a half years working at the facilities company I
                went on to follow my true passion of Steadicam. I have now been
                operating for over four years working on multiple short films,
                music promos and corporate events.  As well as Steadicam, I
                operate for many talented DOPs, working across corporate,
                documentary, music promos, entertainment and TV drama.
              </p>
              <p>
                I strive to impress in any professional environment I work in,
                whether that is in a team or working solely. You can guarantee
                my hard working and adaptable nature will be present throughout
                production.
              </p>
              <p>Hope to work with you soon!</p>
            </div>
            <div className="col center col-image-about-me base-0">
              <div className="image-about-me">
                <Image
                  fileName="GeorgeSimpson_aboutMe.jpg"
                  alt="George Simpson"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-heading">Equipment</h2>
          <div className="row">
            <div className="col base-0">
              <h3>Steadicam</h3>
              <ul>
                <li>Steadicam EFP HD Carbon Fibre Rig</li>
                <li>Flowcine X-Arm</li>
                <li>Steadicam Exovest</li>
                <li>Sunbounce Winkiller</li>
                <li>V3 Antlers</li>
                <li>American Stand</li>
                <li>All necessary accessories, Cables, Batts, etc.</li>
              </ul>
            </div>

            <div className="col base-0">
              <h3>Camera / Lenses</h3>
              <ul>
                <li>Panasonic AU-EVA1 5.7K Camera</li>
                <li>Panasonic Lumix S5 and 20-60mm Lens</li>
                <li>16-35mm, 24-70mm, 70-200mm Canon Zoom Lenses</li>
                <li>Zacuto Gratical Eye EVF</li>
                <li>Tilta MB-T12 Mattebox plus Accessories</li>
                <li>4 x Angelbird 128GB SD cards</li>
                <li>3 x 96watt CORESWX V-Lok batteries</li>
                <li>IDX Quad Charger</li>
                <li>0.9 Grad Filter</li>
                <li>Rotating Polariser Filter</li>
              </ul>
            </div>

            <div className="col base-0">
              <h3>Monitors / Wireless</h3>
              <ul>
                <li>Atomos Sumo 19 inch Monitor/Recorder</li>
                <li>SmallHD 703 Bolt Director’s Monitor</li>
                <li>Teradek 500LT Wireless Transmitter and Receiver</li>
                <li>2 x 75watt IDX Batteries for Director's Monitor</li>
                <li>Blackmagic 5 inch Onboard Recorder / Monitor</li>
                <li>Portkeys BM5II Ultra Bright 5 Inch Onboard Monitor</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col base-0">
              <h3>Grip</h3>
              <ul>
                <li>
                  Freefly Movi Pro Gimbal with Mimic, intelligent batteries and
                  accessories
                </li>
                <li>Ronin RSC 2 Gimbal Kit</li>
                <li>Secced Tripod Head and Legs</li>
                <li>Hague Portrait Plate</li>
                <li>Addicam Camera Cart</li>
              </ul>
            </div>

            <div className="col base-0">
              <h3>Lighting</h3>
              <ul>
                <li>Aputure LS 300X Bi-Colour Light with light dome MKII</li>
                <li>Fomex FL-600 Flexible 1x1 LED Light</li>
                <li>Lighting Stands</li>
              </ul>
            </div>

            <div className="col base-0">
              <h3>Transport</h3>
              <ul>
                <li>VW T5 SWB Van with integrated shelving</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="recent-work">
          <section className="recent-work section">
            <div className="row flex-space-between">
              <h2 className="section-heading">Recent work</h2>
              <button className="button sink" title="View all work">
                View all work
                <FontAwesomeIcon
                  icon="arrow-right"
                  size="lg"
                  className="button-icon"
                />
              </button>
            </div>
            <div className="row work">
              <div className="col col-video">
                <Videocontainer
                  videoTitle="All to play for - Barclays"
                  videoSrcURL="https://www.youtube.com/embed/gS48Xy5oKWU?"
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
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
