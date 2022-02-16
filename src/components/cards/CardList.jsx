import React from 'react';
import Card from './Card';
import useScroll from '../../utils/customHooks/useScroll';
import './card.css';
import { MovieCtx } from '../../utils/Contexts/MoiveCtx';
import Loader from '../loaders/Loader';

const CardList = ({ currFilter }) => {
	const movies = React.useContext(MovieCtx);
	const scroll = useScroll();
	const filteredItems = movies?.data.filter(movie => movie.type === currFilter);

	return (
		<div className="card_wrapper" ref={scroll}>
			{movies.error && <p>{movies.error}</p>}
			{movies.isLoading ? <Loader /> : filteredItems.map((m) => <Card {...m} key={m.id} />)}
		</div>
	);
};

export default CardList;
