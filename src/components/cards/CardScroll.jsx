import CardList from './CardList';
import './card.css';
import React from 'react';
import { MovieFiltersCtx } from '../../utils/Contexts/MoiveCtx';

const CardScroll = () => {
	const currFilter = React.useContext(MovieFiltersCtx);
	let topic = [ `Upcoming ${currFilter}`, 'Popular', "What's hot"];

	return (
		<React.Fragment>
			{topic.map((g) => {
				return (
					<div key={g} className="card_scroll col-12">
						<h2 className="card_scroll_header">{g}</h2>
						<CardList currFilter={currFilter} />
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default CardScroll;
