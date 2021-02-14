import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navigation.scss';

const Navigation = props => {
  const getLogo = homepage => {
    if (!homepage) {
      return (
        <Link to="/" className="logo">
          George Simpson
        </Link>
      );
    }
  };

  return (
    <nav
      className={
        'navbar sticky-top navigationbar ' +
        (props.homepage ? 'justify-end ' : 'justify-between ')
      }
    >
      {getLogo(props.homepage)}
      <ul className="nav justify-end">
        <li>
          <Link to="/work/" className="navLink" activeClassName="active">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact/" className="navLink" activeClassName="active">
            Contact/CV
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/george-simpson-82843541/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            title="LinkedIn profile"
            className="social-icon"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/steadi_g/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="social-icon"
            title="Instagram account."
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
