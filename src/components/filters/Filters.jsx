import React from 'react';
import FilterBtn from '../buttons/filter/FilterBtn';
import { RiMovie2Line, RiMovieFill } from 'react-icons/ri';
import { MdLocalMovies } from 'react-icons/md';
import { MovieSetFilterCtx } from '../../utils/Contexts/MoiveCtx';
import './filters.css';

const Filters = () => {
	const setMovieFilter = React.useContext(MovieSetFilterCtx);
	const filter = [
		{ name: 'Movies', elem: <RiMovie2Line /> },
		{ name: 'Serials', elem: <RiMovieFill /> },
		{ name: 'Documentaries', elem: <MdLocalMovies /> }
	];

	const handleOnClick = (e) => {
		const value = e.target.value || 'movie';
		setMovieFilter(value.toLowerCase());
	};

	return (
		<div className="filters_wrapper">
			{filter.map((f) => {
				return (
					<FilterBtn key={f.name} text={f.name} handleOnClick={handleOnClick}>
						{f.elem}
					</FilterBtn>
				);
			})}
		</div>
	);
};

export default Filters;
