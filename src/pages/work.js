import React from "react"
import Layout from "./Components/Layout"
import { Link } from 'gatsby';



const WorkPage = () => {
  return (
    <Layout>
      <h1>Work</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default WorkPage;