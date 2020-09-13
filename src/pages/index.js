import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css"
import Styles from "./index.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false
library.add(fab, faArrowRight)



const CoverPage = () => {

  return (
    <main className={Styles.container}>
        <div className={Styles.text}>
            <h1>George Simpson</h1>
            <h2>Camera Operator / Steadicam Operator</h2>
            <h3 style={{margin: "2em 0em", color: "var(--sand)"}}>New website coming soon!</h3>
            <div className={Styles.links}>
                <a href="tel:+44 (0)7767398693" className={Styles.contacts}>
                +44 (0)7767398693
                </a>
                <a href="mailto:georgesimpsonwork@gmail.com" className={Styles.contacts}>
                    georgesimpsonwork@gmail.com
                </a>
                <div className={Styles.socials}>
                    <a
                    href="https://www.instagram.com/george___simpson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Instagram"
                    className={Styles.social}
                    >
                    <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    size="2x"
                    />
                    </a>

                    <a
                    href="https://www.linkedin.com/in/george-simpson-82843541/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn"
                    className={Styles.social}
                    >
                    <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    size="2x"
                    />
                    </a>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CoverPage
