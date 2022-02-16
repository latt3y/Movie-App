import React from 'react';
import './cr.css';
import { img } from './img';
import { BsPlayFill } from 'react-icons/bs';

const Courusel = () => {
	const [ index, setindex ] = React.useState(0);
	const timerId = React.useRef();
	const currentNews = img[index];

	React.useEffect(() => {
		timerId.current = setTimeout(() => {
			setindex((prev) => (prev + 1) % img.length);
		}, 10000);
		return () => clearTimeout(timerId.current);
	});

	return (
		<div className="cr_wrapper">
			<div className="cr_img_wrapper" style={{ backgroundImage: `url(${currentNews.poster})` }}>
				<div className="cr_content">
					<h1>{currentNews.title}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<div className="hero-btn">
						<button className="play-btn">
							<BsPlayFill />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Courusel;
