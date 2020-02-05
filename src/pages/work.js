import React from "react"
import Layout from "../Components/Layout"
import { Link } from 'gatsby';
import Heading from "../Components/Heading";



const WorkPage = () => {
  return (
    <Layout>
      <Heading title="Work"/>
      <Link to="/" style={{clear: 'both'}}>Back to home</Link>
    </Layout>
  )
}

export default WorkPage;