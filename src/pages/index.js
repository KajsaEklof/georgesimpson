import React, { useState }  from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Heading from '../Components/Heading';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import Menu from '../Components/Menu';
import Burger from "../Components/Burger";

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => {
  const [open, setOpen ] = useState(false);
    return (
      <Layout>
      { /*<Heading title="Home"/>

      <PrimaryButton
      text={"Click me!"}
      link={"/contact/"}
      />
      <PrimaryButton
      text={"View Showreel"}
      link={"/contact/"}
    /> */ }
      <div> 
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      
      </div>
      </Layout>
    )
    };
    
    export default IndexPage;
