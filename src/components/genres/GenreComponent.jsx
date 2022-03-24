import React from 'react';
import { useParams } from 'react-router';
import { MovieCtx, MovieFiltersCtx } from '../../utils/Contexts/MoiveCtx';
import Card from '../cards/Card';
import './genre.css';

const GenreComponent = () => {
    const { genre } = useParams();
    const movies = React.useContext(MovieCtx);
    const currentFilter = React.useContext(MovieFiltersCtx);
    const relatedMovies = movies?.data?.filter(movie => (movie.genre === genre && movie.type === currentFilter)) ?? [];
    
    return (
        <section className="genre__container" >
            <div className={relatedMovies.length > 0 ? 'genre__wrapper' : 'genre__center'} >
                {
                    relatedMovies.length > 0
                    ?  
                    relatedMovies.map(m => <Card key={m.id} {...m} />)
                    :
                    <p className="genre__error__msg" >Didn't find any related {currentFilter} to this genre</p>
                }
            </div>
        </section>
    )
}

export default GenreComponent;