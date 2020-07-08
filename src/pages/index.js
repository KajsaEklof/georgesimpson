import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import HeaderVideo from "../Components/HeaderVideo"
import RecentWork from "../Components/RecentWork"
import "bootstrap/dist/css/bootstrap.min.css"
import layoutStyles from "../Components/layout.module.css"
import IndexNavigation from "../Components/IndexNavigation"
import Section from "../Components/Section"
import aboutStyles from "../Components/about.module.css"
import SecondaryButton from "../Components/SecondaryButton"
import Footer from "../Components/Footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Link from 'gatsby'
library.add(fab, faArrowRight)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GeorgeImage {
      image: file(relativePath: { eq: "GeorgeSimpson_square.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  

  return (
    <div>
      <IndexNavigation />
      <HeaderVideo />
      <main className={layoutStyles.content}>
        <Section title="About me">
          <div className="row">
            <div className="col-lg">
              <h3>Hello!</h3>
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
              <div className={aboutStyles.bgroup}>
                <SecondaryButton text={"View Showreel"} link={"/work/"} />
                <SecondaryButton text={"Contact"} link={"/contact/"} />
              </div>
            </div>

            <div className="col-lg">
              <Img
                fluid={data.image.childImageSharp.fluid}
                className={aboutStyles.portrait}
              />
            </div>
          </div>
        </Section>

        <Section title="Equipment">
          <div className="row">
            <div class="col-lg">
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

              <h3>Camera / Lenses</h3>
              <ul>
                <li>Panasonic AU-EVA1 5.7K Camera</li>
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
            <div className="col-lg">
              <h3>Monitors / Wireless</h3>
              <ul>
                <li>Atomos Sumo 19 inch Monitor/Recorder</li>
                <li>SmallHD 703 Bolt Director’s Monitor</li>
                <li>Teradek 500LT Wireless Transmitter</li>
                <li>2 x 75watt IDX Batteries</li>
                <li>Blackmagic 5 inch Onboard Recorder / Monitor</li>
                <li>Portkeys BM5II Ultra Bright 5 Inch Onboard Monitor</li>
              </ul>
              <h3>Grip</h3>
              <ul>
                <li>
                  Freefly Movi Pro Gimbal with Mimic, 4 x inteligent batteries
                  and accessories
                </li>
                <li>Secced Tripod Head and Legs</li>
                <li>Addicam Camera Cart</li>
              </ul>
              <h3>Transport</h3>
              <ul>
                <li>VW T5 SWB Van with integrated shelving</li>
              </ul>
            </div>
          </div>
        </Section>

        <RecentWork />
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
