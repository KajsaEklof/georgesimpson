import React from "react"
import Layout from "../Components/Layout"
import { Link } from "gatsby"
import Heading from "../Components/Heading"
import Navigation from "../Components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import About from "../Components/About"

const WorkPage = () => {
  return (
    <div>
      <Navigation />
      <Layout>
        <Heading title="Work" />
        <About />

        <Link to="/" style={{ clear: "both" }}>
          Back to home
        </Link>
      </Layout>
    </div>
  )
}

export default WorkPage
