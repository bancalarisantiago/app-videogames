//Hooks
import { Route, Routes } from 'react-router-dom'
import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'

//Actions
import {getAllVideogames, getGenres, getPlatforms} from '../src/redux/actions/index'

//Components 
import Home from './components/Home'
import VideogameDetail from './components/VideogameDetail/VideogameDetail.jsx'
import VideogameForm from './components/VideogameForm/VideogameForm.jsx'
import Landing from './components/Landing/Landing.jsx'

//Styles
import './App.css';

function App() {

const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllVideogames()) 
        dispatch(getGenres())
        dispatch(getPlatforms())
    },[dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/videogame/:id'element ={<VideogameDetail/>}/>
        <Route path='/createvg' element={<VideogameForm/>}/>
      </Routes>
    </div>
  );
}

export default App;