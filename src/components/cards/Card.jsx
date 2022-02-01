import React from 'react';
import './card.css';
import { SetFavMovieCtx, FavMovieCtx } from '../../utils/Contexts/MoiveCtx';
import { BiAddToQueue } from 'react-icons/bi';

const Card = ({ description, genre, id, name, poster, rating, isFav }) => {
	//isFav prop comes from FavoritesPage and indicates the favorite Cards, not the regular cards

	const [ clicked, setClicked ] = React.useState(false);
	const setFavorites = React.useContext(SetFavMovieCtx);
	const favMoviesList = React.useContext(FavMovieCtx);

	const handleOnClick = (e) => {
		setFavorites((prev) => [ ...prev, e.target.value ]);
		setClicked(true);
	};

	const handleRemoveFav = (e) => {
		let newList = favMoviesList.filter((movie) => movie !== e.target.value);
		setFavorites(newList);
	};

	return (
		<div className="card">
			<div className="img_wrapper" style={{ backgroundImage: `url(${poster})` }}>
				{!isFav ? (
					<button
						className="fav-btn"
						value={id}
						disabled={clicked}
						onClick={handleOnClick}
						title="Add to favorites"
					>
						★
					</button>
				) : (
					<button className="fav-btn" value={id} onClick={handleRemoveFav} title="Remove from favorites">
						x
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
