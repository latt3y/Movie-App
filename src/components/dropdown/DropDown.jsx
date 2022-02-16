import React from 'react';
import './dropdown.css';

const DropDown = (props) => {
	const [ isOpen, setIsOpen ] = React.useState(false);
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

	return (
		<div>
			<a className="dropdown_btn" onClick={() => setIsOpen((prev) => !prev)}>
				{props.text}
			</a>
			{isOpen && (
				<div className="dropdown_wrapper" onMouseLeave={() => setIsOpen(false)}>
					{genres.sort().map((g) => (
						<p className="dropdown_option" key={g}>
							{g}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDown;
