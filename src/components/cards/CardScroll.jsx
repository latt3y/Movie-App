import CardList from './CardList';
import './card.css';
import React from 'react';

const CardScroll = () => {
	let genres = [ 'Upcoming Movies', 'Popular', "What's hot", 'Coming this week' ];
	return (
		<React.Fragment>
			{genres.map((g) => {
				return (
					<div key={g} className="card_scroll col-12">
						<h2 className="card_scroll_header">{g}</h2>
						<CardList />
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default CardScroll;
