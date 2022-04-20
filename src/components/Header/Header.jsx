//Libraries, Hooks
import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Header.module.css";

//Images
import img from "../../images/pngfind.com-video-game-controller-png-70884.png";

const Header = () => (
  <header className={styles.container}>
    <Link to="/">
      <img src={img} alt="logo gaming" />
    </Link>
  </header>
);

export default Header;
