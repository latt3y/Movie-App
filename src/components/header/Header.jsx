import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { MovieCtx } from '../../utils/Contexts/MoiveCtx';
import { VscSearch } from 'react-icons/vsc'
import DropDown from '../dropdown/DropDown';

const Header = () => {
	const { data } = React.useContext(MovieCtx);
	const [ input, setInput ] = React.useState('');
	const [ searchValue, setSearchValue ] = React.useState([]);
	const [ menuBar, setMenubar ] = React.useState(false);
	

	const handleOnChange = (e) => {
		setInput(e.target.value);
		let	SV = data?.filter((movie) => movie.name.replace(/ /g, '').toLowerCase().includes(input.replace(/ /g, '').toLowerCase()));
		setSearchValue(SV)
	};

	return (
		<header className="header_container">
			<div className="header_logo">
				<h1>MOVIES</h1>
				{/* Mobile only */}
				<button 
					className='burger-menu' 
					onClick={() => setMenubar(prev => !prev)} 
				>
					{!menuBar ? '|||' : 'X'}
				</button>
			</div>

			

			<ul className={`header_list ${menuBar ? 'isOpen' : ''}`}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<DropDown text='TvShows' genre='action'/>
				</li>
				<li>
					<DropDown text="Movies"/>
				</li>
				<li>
					<NavLink to="/favorites" >My List</NavLink>
				</li>
			</ul>

			<div className="header_input">
				<div className="header_search" >
					<input type="text" placeholder="search" onChange={handleOnChange} value={input} />
					{
						input && 
							<ul className="dropdown" >
								{searchValue.length > 0  ? searchValue.map(movie => {
									return (
										<li className="dropdown_menu" >
											<p>{movie.name}</p>						
										</li>
									)
								}) : <p>Didnt find anything</p>
								}
							</ul>
					}
				</div>
				<button><VscSearch /></button>
			</div>
		</header>
	);
};

export default Header;
