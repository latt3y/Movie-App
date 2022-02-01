import { BrowserRouter as BRWrapper, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/MainPage';
import FavoritesPage from './pages/FavoritesPage';
import MovieProvider from './utils/Contexts/MoiveCtx';

function App() {
	return (
		<MovieProvider>
			<BRWrapper basename="https://laurathaga.github.io/Movie-App/">
				<div className="container_app">
					<Header />
					<div className="routes_body">
						<Routes>
							<Route path="/" exact element={<MainPage />} />
							<Route path="/favorites" element={<FavoritesPage />} />
							<Route />
						</Routes>
					</div>
					<Footer />
				</div>
			</BRWrapper>
		</MovieProvider>
	);
}

export default App;
