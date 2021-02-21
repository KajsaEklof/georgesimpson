import React from 'react';
import { Link } from 'gatsby';

const PageNotFound = () => {
  return (
    <main className="not-found-page">
      <h1 className="--heading">Oh snap!</h1>
      <h3>Sorry that page doesn't seem to exist.</h3>
      <Link to="/" className="--link">
        Take me back to the home page
      </Link>
    </main>
  );
};
export default PageNotFound;
