//Libraries, hooks
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { createVideogame } from '../../redux/actions/index.js';

//Components
import Nav from '../Nav/Nav';
import Header from '../Header/Header';

//Images
import imgForm from '../../images/imgForm.png';

//Styles
import style from './VideogameForm.module.css';

const VideogameForm = () => {
  const genresForm = useSelector((state) => state.genres);
  const platformsForm = useSelector((state) => state.platformsComplete);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState({ genres: true, platforms: true });

  const [game, setGame] = useState({
    name: '',
    description_raw: '',
    release: '',
    rating: '',
    genres: [],
    genresGame: [],
    platforms: [],
    platformsGame: [],
    background_image: '',
  });

  function validate(input) {
    let errors = {};
    if (game.name.length === 0) {
      errors.name = 'Name is invalid';
      //let inputName = document.getElementById("inputName")
      //inputName.className = 'invalid'
      return false;
    }
    if (game.description_raw.length === 0) {
      errors.description_raw = 'Description is invalid';
      // let inputTextarea = document.getElementById("inputTextarea")
      return false;
    }
    if (game.rating.length === 0) {
      errors.rating = 'Rating is invalid';
      return false;
    }
    if (game.release.length === 0) {
      errors.release = 'Release is invalid';
      //let inputDate = document.getElementById("inputDate")
      return false;
    }
    if (game.platformsGame.length < 1 || game.genresGame.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  function handleInputOnChange(event) {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
  }

  function handleInputOnChangeList(event) {
    const { name, value } = event.target;

    if (name === 'Genres') {
      setClicked({ ...clicked, genres: false });
      if (game.genresGame.includes(value)) {
      } else {
        game.genresGame.push(value);
      }
    }
    if (name === 'Platforms') {
      setClicked({ ...clicked, platforms: false });
      if (game.platformsGame.includes(value)) {
      } else {
        game.platformsGame.push(value);
      }
    }
    setGame({ ...game });
  }

  function genresNameArr(g) {
    let array = g.genres;
    let arrayId = g.genresGame;
    for (const id of arrayId) {
      let nameG = genresForm.find((e) => e.id === parseInt(id));

      let obj = { name: nameG.name, id: nameG.id };
      array.push(obj);
    }
    let arrayP = g.platforms;
    let arrayIdP = g.platformsGame;

    for (const id of arrayIdP) {
      let nameP = platformsForm.find((e) => e.id === parseInt(id));

      let objPlat = { platform: { name: nameP.name, id: nameP.id } };
      arrayP.push(objPlat);
    }

    g.genresName = array;
    g.platforms = arrayP;
    g.platformsGame = arrayIdP;
    return g;
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    if (!validate(game)) {
      alert(`Please complete form `);
    } else {
      dispatch(createVideogame(genresNameArr(game)));
      let list = document.getElementsByClassName('inputs');
      for (let i = 0; i < list.length; i++) {
        list[i].value = '';
      }
      setGame({
        name: '',
        description_raw: '',
        release: '',
        rating: '',
        genres: [],
        platforms: [],
        platformsGame: [],
        genresGame: [],
        background_image: '',
      });

      let inputName = document.getElementById('inputName');
      let inputTextarea = document.getElementById('inputTextarea');
      let inputDate = document.getElementById('inputDate');
      let inputImage = document.getElementById('inputImage');
      inputTextarea.value = '';
      inputName.value = '';
      inputDate.value = '';
      inputImage.value = '';
      alert(`Video Game successfully created`);
      setClicked({ genres: true, platforms: true });
    }
  }

  function deleteFromList(event) {
    if (game.platformsGame.includes(event.target.value)) {
      let copy = game.platformsGame.filter((p) => p !== event.target.value);
      setGame({ ...game, platformsGame: copy });
    }
    if (game.genresGame.includes(event.target.value)) {
      let copy = game.genresGame.filter((g) => g !== event.target.value);
      setGame({ ...game, genresGame: copy });
    }
  }

  return (
    <div className={style.container}>
      <Header />
      <Nav />

      <form className={style.container} onSubmit={handleOnSubmit}>
        <h4>CREATE YOUR GAME</h4>
        <div className={style.containerInputsImg}>
          <div className={style.inputs}>
            <label>
              <br />
              Name:
              <br />
              <input
                id='inputName'
                type='text'
                name='name'
                placeholder='Write Name...'
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label>
              Description:
              <br />
              <textarea
                id='inputTextarea'
                type='textarea'
                name='description_raw'
                placeholder='Description...'
                onChange={handleInputOnChange}
                required
              />
            </label>
            <label>
              Image link:
              <br />
              <input
                id='inputImage'
                type='text'
                name='background_image'
                placeholder='https://www.imagelink...'
                onChange={handleInputOnChange}
                required
              />
            </label>
            <div className={style.releaseRating}>
              <label>
                Date:
                <br />
                <input
                  id='inputDate'
                  type='date'
                  name='release'
                  placeholder='Release Date...'
                  onChange={handleInputOnChange}
                  required
                />
              </label>
              <label>
                Rating:
                <br />
                <input
                  id='inputForm'
                  className='inputs'
                  type='number'
                  name='rating'
                  min='0'
                  max='5'
                  step='0.25'
                  placeholder='Rating'
                  onChange={handleInputOnChange}
                />
              </label>
            </div>
            <div className={style.selects}>
              <div>
                <select
                  className={style.selectPlatforms}
                  name='Platforms'
                  onChange={handleInputOnChangeList}
                >
                  <option disabled selected={clicked.platforms}>
                    Choose Platforms
                  </option>
                  {platformsForm?.map((plat) => (
                    <option value={plat.id} key={plat.id}>
                      {plat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className={style.selectGenres}
                  name='Genres'
                  onChange={handleInputOnChangeList}
                >
                  <option disabled selected={clicked.genres}>
                    Choose Genres
                  </option>
                  {genresForm?.map((gen) => (
                    <option value={gen.id} key={gen.id}>
                      {gen.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={style.imgGenPlat}>
            <img src={game.background_image || imgForm} alt='game img' />
            <div className={style.containerPlatGen}>
              <div>
                <ul>
                  {game?.platformsGame.map((p) => {
                    let game = platformsForm.find(
                      (ele) => ele.id === parseInt(p)
                    );
                    return (
                      <li key={`${p}key`}>
                        {game.name}
                        <button
                          type='button'
                          value={p}
                          onClick={deleteFromList}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <ul>
                  {game?.genresGame.map((g) => {
                    let game = genresForm.find((ele) => ele.id === parseInt(g));

                    return (
                      <li key={`${g}key`}>
                        {game.name}
                        <button
                          type='button'
                          value={g}
                          onClick={deleteFromList}
                        >
                          X
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button className={style.btnForm} value='submit' type='submit'>
          <div className={style.svgWrapper}>
            <div className='svg-wrapper'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path
                  fill='currentColor'
                  d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                ></path>
              </svg>
            </div>
          </div>
          <span>SUBMIT</span>
        </button>
      </form>
    </div>
  );
};

export default VideogameForm;
