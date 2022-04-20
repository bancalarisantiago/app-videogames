//Libraries, Hooks
import React from "react";
import { Link } from "react-router-dom";

//Styles

import styles from "./VidegameCard.module.css";
//Images
import NoImage from "../../images/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg";

const VideogameCard = ({
  background_image,
  name,
  id,
  rating,
  genres,
  platforms,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>{name}</h3>
      </div>
      <Link to={`/videogame/${id}`}>
        <img
          className={styles.image}
          src={background_image || NoImage}
          alt="videogame pic"
        />
      </Link>
      <div className={styles.details}>
        <div className={styles.rating}>
          <p>{rating}</p>
          <span>⭐</span>
        </div>
        <div className={styles.genres}>
          {genres?.map((g) => (
            <span key={g.id}>{g.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideogameCard;
