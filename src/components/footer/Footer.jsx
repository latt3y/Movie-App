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
					<BsGithub />
				</li>
				<li>
					<BsTwitter />
				</li>
				<li>
					<BsLinkedin />
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
