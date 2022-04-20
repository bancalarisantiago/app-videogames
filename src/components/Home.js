//Hooks
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Actions
import {
  clearVgId,
  getGenres,
  getPlatforms,
  getAllVideogames,
} from "../redux/actions/index";

//Components
import Videogames from "./Videogames/Videogames.jsx";
import Header from "./Header/Header.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import FilterBar from "./FilterBar/FilterBar.jsx";
import Nav from "./Nav/Nav.jsx";

//Styles
import style from "./Home.module.css";

const Home = () => {
  const stateVideogames = useSelector((state) => state.videogamesCopy);
  const statePlatforms = useSelector((state) => state.platforms);
  const vgId = useSelector((state) => state.videogameId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!statePlatforms.length) {
      dispatch(getGenres());
      dispatch(getPlatforms());
      dispatch(getAllVideogames());
    }
    if (vgId.length > 0) {
      dispatch(clearVgId());
    }
  }, [dispatch, vgId.length, statePlatforms.length]);

  return (
    <div className={style.container}>
      <Header />
      <Nav />
      <SearchBar />
      <FilterBar />
      <div>
        <Videogames games={stateVideogames} />
      </div>
    </div>
  );
};

export default Home;
