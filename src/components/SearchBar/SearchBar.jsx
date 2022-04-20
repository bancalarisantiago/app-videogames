//Libraries, Hooks
import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Actions
import {
  getVideogameByName,
  clearFilter,
  getMyGames,
} from "../../redux/actions/index.js";

//Styles
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleInputOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    dispatch(getVideogameByName(input));
  }

  function handleOnClickMyGames() {
    dispatch(getMyGames());
  }

  function handleClearData() {
    setInput("");
    dispatch(clearFilter());
  }
  return (
    <div className={style.container}>
      <input
        className={style.search}
        name="search"
        onChange={handleInputOnChange}
        size="25"
        value={input}
        autoComplete="off"
        placeholder="Search..."
      ></input>
      <button
        className={style.btnSearch}
        type="button"
        onClick={handleOnSubmit}
      >
        🔎
      </button>
      <div>
        <button
          className={`${style.btnFilter} ${style.btnClear}`}
          onClick={handleClearData}
        >
          CLEAR FILTER
        </button>
      </div>
      <button
        className={`${style.btnFilter} ${style.myGames}`}
        value="myGames"
        onClick={handleOnClickMyGames}
      >
        My Games
      </button>
    </div>
  );
};

export default SearchBar;
