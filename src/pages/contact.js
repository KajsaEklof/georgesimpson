import React from "react"
import Heading from "../Components/Heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "bootstrap/dist/css/bootstrap.min.css"
import contactStyles from "./contact.module.css"
import Layout from "../Components/Layout"
import CV from "../files/George-Simpson-CV-2019.pdf"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactImage {
      image: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fixed(width: 600) {
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
    <Layout>
      <h1>Contact / CV</h1>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-auto">
            <p>
              Mobile:&nbsp;
              <a href="tel:+44 (0)7767398693" className={contactStyles.link}>
                +44 (0)7767398693
              </a>
            </p>
            <p>
              Email:&nbsp;
              <a
                href="mailto:georgesimpsonwork@gmail.com"
                className={contactStyles.link}
              >
                georgesimpsonwork@gmail.com
              </a>
            </p>
          </div>

          <div className="col-lg-auto">
            <div className={contactStyles.container}>
              <a
                href="https://www.instagram.com/steadi_g/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  size="2x"
                  className={contactStyles.icon}
                />
              </a>
              <a
                href="https://www.instagram.com/steadi_g/"
                className={contactStyles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>

            <div className={contactStyles.container}>
              <a
                href="https://www.linkedin.com/in/george-simpson-82843541/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="2x"
                  className={contactStyles.icon}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/george-simpson-82843541/"
                className={contactStyles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <a
              href={CV}
              download
              className={`${contactStyles.download} ${contactStyles.sink}`}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className={contactStyles.img}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="George Simpson and another cameraman standing up holding their cameras on their shoulders facing the camera with the sun setting behind them."
          />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
