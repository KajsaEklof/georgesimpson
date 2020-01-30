import React from "react"
import footerStyles from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <Link
          to="/contact/"
          className={[footerStyles.links, footerStyles.underline].join(" ")}
        >
          Contact
        </Link>
        <div className={footerStyles.social}>
          <a
            href="https://www.instagram.com/steadi_g/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              className={footerStyles.icon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/george-simpson-82843541/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="2x"
              className={footerStyles.icon}
            />
          </a>
        </div>
      </div>
      <p className={footerStyles.para}>© George Simpson {year}</p>
    </footer>
  )
}

export default Footer
