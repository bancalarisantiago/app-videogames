//Libraries, Hooks
import React, { useState, useEffect } from 'react';

//Components
import VideogameCard from '../VideogameCard/VideogameCard';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

//Styles
import styles from './Videogames.module.css';

const Videogames = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  //const [loading, setLoading] = useState(true)
  const indexOfLastGames = currentPage * gamesPerPage;
  const indexOfFirstGames = indexOfLastGames - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGames, indexOfLastGames);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      {currentGames.length === 0 ? <Spinner></Spinner> : null}
      {currentGames[0] === 'Not Found' ? (
        <div className={styles.error}>
          <h1>--404--</h1>
          <h1>NO GAMES FOUND</h1>
        </div>
      ) : (
        <div className={styles.containerCards}>
          {currentGames?.map((vg) => (
            <VideogameCard
              name={vg.name}
              key={vg.id}
              background_image={vg.background_image}
              id={vg.id}
              rating={vg.rating}
              platforms={vg.platforms}
              genres={vg.genres}
            />
          ))}
        </div>
      )}
      <>
        <Pagination
          gamesPerPage={gamesPerPage}
          current={currentPage}
          totalGames={games.length}
          paginate={paginate}
        />
      </>
    </div>
  );
};

export default Videogames;
