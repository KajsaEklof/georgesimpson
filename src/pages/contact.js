import React from "react"
import Layout from "./Components/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'gatsby';

library.add(fab, faCheckSquare, faCoffee)

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default ContactPage;
