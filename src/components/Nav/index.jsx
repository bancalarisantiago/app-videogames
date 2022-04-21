//Libraries, Hooks
import React from 'react';
import { NavLink } from 'react-router-dom';

//Styles
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.container}>
    <NavLink className={styles.link} to='/'>
      Landing&nbsp;|
    </NavLink>
    <NavLink className={styles.link} to='/home'>
      Home&nbsp;|
    </NavLink>
    <NavLink className={styles.link} to='/createvg'>
      Create Game&nbsp;{' '}
    </NavLink>
  </div>
);

export default Nav;
