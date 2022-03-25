import './footer.css';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="col-12">
			<h2>MOVIES</h2>
			<p>
				© Created by <span>Laurat Hajrullaaga</span>
			</p>
			<ul className="social_links">
				<li>
					<a href="https://github.com/laurathaga/Movie-App" target="_blank"><BsGithub /></a>
				</li>
				<li>
					<a href="#" ><BsTwitter /></a>
				</li>
				<li>
					<a href="#" ><BsLinkedin /></a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
