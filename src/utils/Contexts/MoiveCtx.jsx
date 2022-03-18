import React from 'react';
import useFetch from '../customHooks/useFetch';

export const MovieCtx = React.createContext();
export const FavMovieCtx = React.createContext();
export const SetFavMovieCtx = React.createContext();
export const MovieFiltersCtx = React.createContext();
export const MovieSetFilterCtx = React.createContext();

const url = 'https://fake-movie-api.herokuapp.com/movie';

const MovieProvider = ({ children }) => {
	const [ favorites, setFavorites ] = React.useState([]);
	const movies = useFetch(url);
	const [ filter, setFilter ] = React.useState('movies');

	return (
		<MovieCtx.Provider value={movies}>
			<SetFavMovieCtx.Provider value={setFavorites}>
				<FavMovieCtx.Provider value={favorites}>
					<MovieFiltersCtx.Provider value={filter}>
						<MovieSetFilterCtx.Provider value={setFilter}>
							{children}
						</MovieSetFilterCtx.Provider>
					</MovieFiltersCtx.Provider>
				</FavMovieCtx.Provider>
			</SetFavMovieCtx.Provider>
		</MovieCtx.Provider>
	);
};

export default MovieProvider;
