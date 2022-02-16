import { BrowserRouter as BRWrapper, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './pages/MainPage';
import FavoritesPage from './pages/FavoritesPage';
import MovieProvider from './utils/Contexts/MoiveCtx';
import ErrorPage from './pages/404';
import Error from './components/error/Error';
import Showcase from './pages/Showcase';

function App() {
	return (
		<MovieProvider>
			<BRWrapper>
				<Error>
					<div className="container_app">
						<Header />
						<div className="routes_body">
							<Routes>
								<Route path="/" exact element={<MainPage />} />
								<Route path="/favorites" element={<FavoritesPage />} />
								<Route path="/:id" element={<Showcase />}/>
								<Route path="*" element={<ErrorPage />}/>
							</Routes>
						</div>
						<Footer />
					</div>
				</Error>
			</BRWrapper>
		</MovieProvider>
	);
}

export default App;
