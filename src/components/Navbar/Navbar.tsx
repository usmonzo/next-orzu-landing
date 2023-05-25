import Image from 'next/image';
import logo from '../../../public/assets/Logo.png';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-content">
				<div className="navbar-logo-container">
					<Image src={logo} alt="2" width={300} height={120} className="navbar-logo" />
				</div>
				<button className="navbar-button"> Отправить заявку</button>
			</div>
		</nav>
	);
};

export default Navbar;
