import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import Layout from "../Components/Layout"
import PrimaryButton from "../Components/PrimaryButton"
import About from "../Components/About"
import CenteredContainer from "../Components/ComponentStyles/CenteredContainer"

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => {
  console.log(window.location.pathname)
  return (
    <React.Fragment>
      <Layout>
        <CenteredContainer>
          <PrimaryButton text={"View Showreel"} link={"/contact/"} />
        </CenteredContainer>
        <About />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
