import white from '../../../public/assets/whiteCard.webp';

import black from '../../../public/assets/blackCard.webp';
import PrimaryButton from '../Buttons/PrimaryButton';

import styles from './Header.module.scss';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';

const Header = () => {
	return (
		<>
			<header className={styles.header_container}>
				<h1 className={styles.header_title}>
					Выгодный кредит для <br />
					<span className={styles.text_gradient}>покупки бытовой техники</span>
				</h1>
				<p className={styles.header_paragraph}>Получите одобрение в течении дня и получайте деньги, не посещая офис</p>
				<PrimaryButton text="Получить кредит" />
				<div className={styles.header_icons_container}>
					<Image src={white} alt="2" width={1650} height={800} className={styles.header_icons} />
					<Image src={black} alt="2" width={1650} height={800} className={styles.header_icons} />
				</div>
			</header>
			<section className={styles.header_content_section}>
				<div className={styles.header_content_color}>
					<HeaderContent />
				</div>
			</section>
		</>
	);
};

export default Header;
