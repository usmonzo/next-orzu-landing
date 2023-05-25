import Calculator from '../Calculator/Calculator';
import styles from './PreFooterSection.module.scss';

export default function PreFooterSection() {
	return (
		<section className={styles.prefooter_container}>
			<div className={styles.container}>
				<h1 className={styles.calc_headline}>Посчитайте свой кредит</h1>
				<Calculator />
			</div>
		</section>
	);
}
