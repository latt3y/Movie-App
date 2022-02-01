import React from 'react';
import useFetch from '../customHooks/useFetch';

export const MovieCtx = React.createContext();
export const FavMovieCtx = React.createContext();
export const SetFavMovieCtx = React.createContext();

const url = 'https://fake-movie-api.herokuapp.com/';

const MovieProvider = ({ children }) => {
	const [ favorites, setFavorites ] = React.useState([]);
	const movies = useFetch(url);
	return (
		<MovieCtx.Provider value={movies}>
			<SetFavMovieCtx.Provider value={setFavorites}>
				<FavMovieCtx.Provider value={favorites}>{children}</FavMovieCtx.Provider>
			</SetFavMovieCtx.Provider>
		</MovieCtx.Provider>
	);
};

export default MovieProvider;
