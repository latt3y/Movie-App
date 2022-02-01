import React from 'react';
import Card from './Card';
import useScroll from '../../utils/customHooks/useScroll';
import './card.css';
import { MovieCtx } from '../../utils/Contexts/MoiveCtx';

const CardList = () => {
	const movies = React.useContext(MovieCtx);
	const scroll = useScroll();

	return (
		<div className="card_wrapper" ref={scroll}>
			{movies.error && <p>{movies.error}</p>}
			{movies.isLoading ? <h1>Loading...</h1> : movies.data.map((m) => <Card {...m} key={m.id} />)}
		</div>
	);
};

export default CardList;
