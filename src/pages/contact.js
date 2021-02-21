import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactStyles from './contact.module.css';
import Layout from '../Components/Layout';
import SEO from '../Components/Seo';
import Image from '../Components/Image';
import CV from '../files/George_Simpson_CV_2020.pdf';

const ContactPage = () => {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <Layout className="fit-window" homepage={false}>
        <div className="row">
          <div className="col base-0">
            <h1 className="page-title">Contact / CV</h1>
          </div>
        </div>
        <div className="row">
          <div className="col base-0 align-center">
            <div className="contact-wrapper">
              <p className="top-margin">
                Mobile:&nbsp;
                <a
                  href="tel:+44 (0)7767398693"
                  title="Mobile contact number."
                  className="link"
                >
                  +44 (0)7767398693
                </a>
              </p>
              <p>
                Email:&nbsp;
                <a
                  href="mailto:georgesimpsonwork@gmail.com"
                  title="Contact email address."
                  className="link"
                >
                  georgesimpsonwork@gmail.com
                </a>
              </p>
              <div className="social-wrapper">
                <a
                  href="https://www.instagram.com/george___simpson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="social-icon"
                  title="Instagram account."
                >
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    size="2x"
                    className={contactStyles.icon}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/george-simpson-82843541/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  title="LinkedIn profile"
                  className="social-icon"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="2x"
                    className={contactStyles.icon}
                  />
                </a>
                <a
                  className="button sink"
                  title="Download CV"
                  download="GeorgeSimpsonCV"
                  href={CV}
                >
                  Download CV
                  <FontAwesomeIcon
                    icon="arrow-right"
                    size="lg"
                    className="button-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col base-0">
            <div className="image-contact">
              <Image
                fileName="Contact.jpg"
                alt="George Simpson standing on the quay filming a boat on the water."
              />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default ContactPage;
