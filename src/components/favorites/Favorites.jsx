import React from 'react';
import './favorites.css';
import Card from '../cards/Card';
import { FavMovieCtx, MovieCtx } from '../../utils/Contexts/MoiveCtx';
import { useNavigate } from 'react-router';

const Favorites = () => {
	const favorites = React.useContext(FavMovieCtx);
	const allMovies = React.useContext(MovieCtx);
	const navigate = useNavigate();
	const myFav = [ ...new Set(favorites.map((movie) => allMovies.data.find((m) => m.id === +movie))) ];

	return (
		<React.Fragment>
			{myFav.length > 0 ? (
				<div className="favorites_container">
					<div className="favorites_grid">
						{myFav.map((movie) => <Card {...movie} isFav={true} key={movie.id} />)}
					</div>
				</div>
			) : (
				<div className="favorites_container_flex">
					<h2 className="fav-header">You havent saved any movies yet !</h2>
					<button className="favBtn" onClick={() => navigate('/')}>
						Go and Save Some
					</button>
				</div>
			)}
		</React.Fragment>
	);
};

export default Favorites;
