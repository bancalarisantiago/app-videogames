//Hooks
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Actions
import {
  getAllVideogames,
  getGenres,
  getPlatforms,
} from '../src/redux/actions/index';

//Components
import Home from './components/Home.jsx';
import VideogameDetail from './components/VideogameDetail';
import VideogameForm from './components/VideogameForm';
import Landing from './components/Landing';

//Styles
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/videogame/:id' element={<VideogameDetail />} />
        <Route path='/createvg' element={<VideogameForm />} />
      </Routes>
    </div>
  );
}

export default App;
