import React from "react"
import Layout from "../Components/Layout"
import { Link } from 'gatsby';
import Heading from "../Components/Heading";



const BHTSPage = () => {
  return (
    <Layout>
      <Heading title="Behind the Scenes"/>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default BHTSPage;