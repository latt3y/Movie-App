import React from 'react';
import CardScroll from '../components/cards/CardScroll';
import Carousel from '../components/carousel/Carousel';
import Filters from '../components/filters/Filters';

const MainPage = () => {
	return (
		<React.Fragment>
			<Carousel />
			<Filters />
			<CardScroll />
		</React.Fragment>
	);
};

export default MainPage;
