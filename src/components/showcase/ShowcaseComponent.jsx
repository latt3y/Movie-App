import React from 'react';
import { MovieCtx } from '../../utils/Contexts/MoiveCtx';
import './showcase.css';


const ShowcaseComponent = ({id}) => {
    const movies = React.useContext(MovieCtx);
    const MOVIE = movies?.data?.find(movie => movie.id === +id) ?? [];
    const bgImage = {backgroundImage: `url(${MOVIE.poster})`}

    return (
        <div className="showcase__container" >
            <div className="showcase__wrapper">
                <div className="showcase__poster"  style={bgImage} />
                <div className="showcase__content" > 
                    <h1>{MOVIE.name}</h1>
                    <p className="showcase__content__desc" >{MOVIE.description}</p>
                    <p className='showcase__content__rating' >Imbd - <span>{MOVIE.rating}</span> / 10</p>
                    <p className='showcase__content__genre' >Genre  <span>{MOVIE.genre}</span></p>
                    <p className='showcase__content__type' >{MOVIE.type}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseComponent;