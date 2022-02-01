import FilterBtn from '../buttons/filter/FilterBtn';
import { RiMovie2Line, RiMovieFill } from 'react-icons/ri';
import { MdLocalMovies } from 'react-icons/md';
import './filters.css';

const Filters = () => {
	const filter = [
		{ name: 'Movies', elem: <RiMovie2Line /> },
		{ name: 'Serials', elem: <RiMovieFill /> },
		{ name: 'Documentaries', elem: <MdLocalMovies /> }
	];

	return (
		<div className="filters_wrapper">
			{filter.map((f) => {
				return (
					<FilterBtn key={f.name} text={f.name}>
						{f.elem}
					</FilterBtn>
				);
			})}
		</div>
	);
};

export default Filters;
