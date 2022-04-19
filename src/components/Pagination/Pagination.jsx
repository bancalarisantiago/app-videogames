//Libraries, Hooks
import React, { useState, useEffect } from "react";

//Styles
import style from "./Pagination.module.css";

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
    <div className={style.container}>
      {pageNumbers.map((num) => {
        if (num === current) {
          return (
            <button
              value={current}
              id={`btn${current}`}
              className={`${style.btn} ${style.active}`}
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
              className={`${style.btn}`}
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
