import React, { useState, useEffect } from 'react';
// import "../Styles/index.css";
import '../Styles/style.scss';
import '../Styles/layout.css';
import Footer from './Footer';
import 'typeface-source-sans-pro';
import 'typeface-bebas-neue';
import 'typeface-poppins';
import 'focus-visible';
import Menu from './Menu';
import Burger from './Burger';
import Navigation from './Navigation';
import { Link } from 'gatsby';

const Layout = props => {
  const [open, setOpen] = useState(false);
  const homepage = props.homepage;

  useEffect(() => {
    console.log('This is open:', open);
    console.log('Layout homepage', props.homepage);
  });

  return (
    <div className="layout">
      <Navigation homepage={homepage} />
      <div className="mobilenavbar sticky-top">
        <Link to="/" className="logo">
          George Simpson
        </Link>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>

      <main className={homepage ? 'content homepage' : 'content'}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
