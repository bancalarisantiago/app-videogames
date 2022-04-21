//Hooks
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import {
  clearVgId,
  getGenres,
  getPlatforms,
  getAllVideogames,
} from '../redux/actions/index';

//Components
import Videogames from './Videogames';
import Header from './Header';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Nav from './Nav';

//Styles
import style from './Home.module.css';

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
  }, [dispatch, vgId, statePlatforms]);

  return (
    <div className={style.container}>
      <Header />
      <Nav />
      <SearchBar />
      <FilterBar />
      <Videogames games={stateVideogames} />
    </div>
  );
};

export default Home;
