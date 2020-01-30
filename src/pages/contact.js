import React from "react"
import Layout from "./Components/Layout"

import { Link } from 'gatsby';


const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default ContactPage;
