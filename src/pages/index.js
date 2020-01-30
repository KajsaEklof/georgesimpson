import React from "react";
import Layout from "./Components/Layout";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";
import PrimaryButton from "./Components/PrimaryButton";


library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => {
    return (
      <Layout>
      <h1>Home</h1>

      <PrimaryButton
      text={"Click me!"}
      link={"/contact/"}
      />
      <PrimaryButton
      text={"View Showreel"}
      link={"/contact/"}
      />
      </Layout>
    )
    };
    
    export default IndexPage;
