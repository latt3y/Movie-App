import React from 'react';
import './dropdown.css';
import { useNavigate } from 'react-router';
import { MovieSetFilterCtx } from '../../utils/Contexts/MoiveCtx';

const DropDown = (props) => {
	const setCurrentFilter = React.useContext(MovieSetFilterCtx);
	const [ isOpen, setIsOpen ] = React.useState(false);
	const navigate = useNavigate();
	const ref = React.useRef();
	const genres = [
		'drama',
		'action',
		'thriller',
		'fiction',
		'science fiction',
		'biography',
		'western',
		'comedy',
		'fantasy',
		'horror',
		'space opera',
		'adventure',
		'romantic comedy',
		'dark comedy',
		'comedy drama',
		'mystery',
		'science fantasy',
		'true crime',
		'satire',
		'action fiction',
		'anime',
		'space western'
	];

	const handleOnClick = genre => {
		setCurrentFilter(ref.current.textContent.toLowerCase());
		navigate(`genres/${genre}`);
	};

	return (
		<div>
			<a  ref={ref} className="dropdown_btn" onClick={() => setIsOpen((prev) => !prev)}>
				{props.text}
			</a>
			{isOpen && (
				<div className="dropdown_wrapper" onMouseLeave={() => setIsOpen(false)}>
					{genres.sort().map((g) => (
						<p className="dropdown_option" key={g} onClick={() => handleOnClick(g)} >
							{g}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDown;
