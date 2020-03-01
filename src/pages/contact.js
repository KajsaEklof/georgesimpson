import React from "react";
import Layout from "../Components/Layout";
import Heading from "../Components/Heading";
import styled from "styled-components";
import contactImage from "../images/contact.jpg";
import contactStyles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {

  return (
    <Layout>
      <Heading title="contact / CV" />

      <p>Mobile:{" "}<a href="tel:+44 (0)7767398693" className={contactStyles.link}>+44 (0)7767398693</a> 
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:georgesimpsonwork@gmail.com"
          className={contactStyles.link}
        >
         georgesimpsonwork@gmail.com
        </a>
      </p>
      <div className={contactStyles.container}>
        <a
          href="https://www.instagram.com/steadi_g/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" className={contactStyles.icon}/>
        </a>
        <a href="https://www.instagram.com/steadi_g/" className={contactStyles.socialLink}>Instagram</a>
        </div>
        <div className={contactStyles.container}> 
        <a
        href="https://www.linkedin.com/in/george-simpson-82843541/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" className={contactStyles.icon}/>
      </a>

        <a href="https://www.linkedin.com/in/george-simpson-82843541/" className={contactStyles.socialLink}>LinkedIn</a>
      </div>
      <img
        src={contactImage}
        alt="Two camera men holding their cameras on their shoulders"
      />
    </Layout>
  )
}

export default ContactPage
