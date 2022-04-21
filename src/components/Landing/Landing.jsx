//Libraries, Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/home'>
        <span className={styles.parpadea}>Insert coin's</span>
      </Link>
    </div>
  );
};

export default Landing;
