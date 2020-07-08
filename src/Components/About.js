import React from "react"
import Styled from "styled-components"
import { device } from "./ComponentStyles/Device"
import aboutStyles from "./about.module.css"
import SecondaryButton from "./SecondaryButton"
import Section from "./Section"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const ContentContainer = Styled.div`
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;

      @media ${device.desktop} {
        flex-direction: row;
      }
    `
  const data = useStaticQuery(graphql`
    query AboutImage {
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

  console.log(data)

  return (
    <Section title="About me">
      <ContentContainer>
        <div className={aboutStyles.blurb}>
          <p>Hello!</p>
          <p>
            Thank you for visiting my website and checking out some of my work.
            I am an enthusiastic and passionate camera operator and steadicam
            operator/owner based in Dorking, Surrey.
          </p>
          <p>
            A bit about me, after graduating from Ravensbourne University with a
            degree in Broadcast Operations I went on to work at one of London's
            largest and busiest broadcast hire facilities. There I learnt the
            equipment inside and out and honed my operating and assisting skills
            when out crewing on such shows as Peep Show and Made in Chelsea. 
          </p>

          <p>
            After two and a half years working at the facilities company I went
            on to follow my true passion of Steadicam. I have now been operating
            for over four years working on multiple short films, music promos
            and corporate events.  As well as Steadicam, I operate for many
            talented DOPs, working across corporate, documentary, music promos,
            entertainment and TV drama.
          </p>
          <p>
            I strive to impress in any professional environment I work in,
            whether that is in a team or working solely. You can guarantee my
            hard working and adaptable nature will be present throughout
            production.
          </p>
          <p>Hope to work with you soon!</p>

          <div className={aboutStyles.bgroup}>
            <SecondaryButton text={"View Showreel"} link={"/work/"} />
            <SecondaryButton text={"Contact"} link={"/contact/"} />
          </div>
          <Img fixed={data.image.childImageSharp.fixed} />
        </div>
      </ContentContainer>
    </Section>
  )
}

export default About
