import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/cards/Card';
import { FavMovieCtx, MovieCtx } from '../utils/Contexts/MoiveCtx';

const FavoritesPage = () => {
	const favorites = React.useContext(FavMovieCtx);
	const allMovies = React.useContext(MovieCtx);
	const navigate = useNavigate();
	const myFav = [ ...new Set(favorites.map((movie) => allMovies.data.find((m) => m.id === +movie))) ] || [];
	const style = {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};

	return (
		<div className="favorites_container" style={style}>
			{myFav.length > 0 ? (
				myFav.map((movie) => <Card {...movie} isFav={true} key={movie.id} />)
			) : (
				<div>
					<h2 style={{ width: 'fit-content', color: 'whitesmoke' }}>You havent saved any movies yet</h2>
					<button onClick={() => navigate('/')}>Go and Save Some</button>
				</div>
			)}
		</div>
	);
};

export default FavoritesPage;
