import React from "react";
import { Link } from "gatsby";
import Layout from "../Components/Layout";
import Heading from "../Components/Heading";
import styled from "styled-components";
import contactImage from '../images/contact.jpg';

const ContactPage = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  `


  return (
    <Layout>
      <Heading title="contact" />
     
      <Container>
        <Heading title="contact / CV" />
        <img
          src={contactImage}
          alt="Two camera men holding their cameras on their shoulders"
        />
      </Container>

      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default ContactPage
