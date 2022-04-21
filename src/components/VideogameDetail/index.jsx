//Libraries, Hooks
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//Actions
import { getVideogameById, clearVgId } from '../../redux/actions/index.js';

//Components
import Spinner from '../Spinner';
import Header from '../Header';
import Nav from '../Nav';

//Styles
import style from './VideogameDetail.module.css';

//Images
import NoImage from '../../images/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg';

const VideogameDetail = () => {
  const vgId = useSelector((state) => state.videogameId);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearVgId());
    dispatch(getVideogameById(params.id));
  }, [params.id, dispatch]);

  return vgId.length === 0 ? (
    <div className={style.container}>
      <Header />
      <Nav />
      <Spinner />
    </div>
  ) : (
    <div className={style.container}>
      <Header />
      <Nav />
      <div>
        <h1>{vgId.name}</h1>
        <div className={style.genres}>
          {vgId.genres?.map((ge) => (
            <span key={ge.id}>{ge.name}</span>
          ))}
        </div>
        <div className={style.containerImgDes}>
          <img
            className={style.imgDetail}
            src={vgId.background_image || NoImage}
            alt='videogame pic'
          ></img>
          <p>{vgId.description_raw}</p>
        </div>
        <div className={style.rating}>
          <span>{vgId.rating}</span>
          <span>⭐</span>
        </div>
        <div className={style.platforms}>
          {vgId.platforms?.map((vg) => (
            <span key={`sp${vg.platform.id}`}>{vg.platform.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideogameDetail;
