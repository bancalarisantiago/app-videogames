//Libraries, Hooks
import React from 'react';
import { Link } from 'react-router-dom'

//Styles
import { Image , Wrapper , Details, Rating , Genres, Title} from './VideogameCard.styles.js'

//Images
import NoImage from '../../images/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg'

const VideogameCard = ({background_image, name, id, rating, genres, platforms}) => {
     
    return (
        <Wrapper>
                <Title>
                    <h3>{name}</h3>
                </Title>
                <Link to={`/videogame/${id}`}>        
                <Image src={background_image || NoImage} alt='videogame pic'/>
                </Link>
                <Details>
                        <Rating>
                                <p>{rating}</p><span>⭐</span>
                        </Rating>
                        <Genres>
                            {genres?.map( g => <span key={g.id}>{g.name}</span>)}
                        </Genres>
                </Details>
                
        </Wrapper>
    );
};

export default VideogameCard;