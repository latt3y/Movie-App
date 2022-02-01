import React from 'react';
import CardScroll from '../components/cards/CardScroll';
import Courusel from '../components/courusel/Courusel';
import Filters from '../components/filters/Filters';
import { MovieCtx } from '../utils/Contexts/MoiveCtx';

const MainPage = () => {
	return (
		<React.Fragment>
			<Courusel />
			<Filters />
			<CardScroll />
		</React.Fragment>
	);
};

export default MainPage;
