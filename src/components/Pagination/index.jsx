//Libraries, Hooks
import React, { useState, useEffect } from 'react';

//Styles
import styles from './Pagination.module.css';

const Pagination = ({ gamesPerPage, totalGames, paginate, current }) => {
  const pageNumbers = [];
  const [page, setPage] = useState(1);
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }
  function handleOnClick(event, num) {
    setPage(num);
    paginate(num);
  }

  useEffect(() => {
    setPage(current);
  }, [current, page, totalGames]);

  return (
    <div className={styles.container}>
      {pageNumbers.map((num) => {
        if (num === current) {
          return (
            <button
              value={current}
              id={`btn${current}`}
              className={`${styles.btn} ${styles.active}`}
              onClick={(e) => handleOnClick(e, num)}
              key={current}
            >
              {current}
            </button>
          );
        } else if (num !== current) {
          return (
            <button
              value={num}
              id={`btn${num}`}
              className={`${styles.btn}`}
              onClick={(e) => handleOnClick(e, num)}
              key={num}
            >
              {num}
            </button>
          );
        } else {
          return num;
        }
      })}
    </div>
  );
};

export default Pagination;
