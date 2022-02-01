import './filter.css';

const FilterBtn = ({ children, text }) => {
	return (
		<div className="filter-btn">
			<button>
				{children} {text}
			</button>
		</div>
	);
};

export default FilterBtn;
