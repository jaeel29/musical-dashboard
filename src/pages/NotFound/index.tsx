import NotFoundIllustration from 'assets/emptyStates/NotFoundIllustration';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <NotFoundIllustration />

      <div>
        <h1>Whooops! Lost in Space?</h1>
        <p>
          This page you're looking for isn't found :( <br /> We suggest you back to home
        </p>

        <Link to={'/'} className={styles.link}>
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
