import './filter.css';

const FilterBtn = ({ children, text, handleOnClick }) => {
	return (
		<div className="filter-btn">
			<button value={text} onClick={handleOnClick}>
				{children} {text}
			</button>
		</div>
	);
};

export default FilterBtn;
