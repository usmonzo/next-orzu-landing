import BlackButton from '../Buttons/BlackButton';
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from './HeaderContent.module.scss';

export default function HeaderContent() {
	return (
		<>
			<div className={styles.header_main_content}>
				<div className={styles.main_content_horizontal}>
					<div className={styles.orange_box}>
						<h2 className={styles.orange_box_text}>Получите деньги почти сразу</h2>
						<BlackButton text={'Получить кредит'} />
					</div>
					<div className={styles.white_box}>
						<h2 className={styles.white_box_headline}>5 лет</h2>
						<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
							<p className={styles.white_box_secondary}>Единоразовое подключение</p>
							<p className={styles.white_box_paragraph}>Получайте деньги, не посещая офис, в течение 5 лет</p>
						</div>
						<PrimaryButton text="Подробнее" aligned="flex-start" />
					</div>
				</div>
				<h1 className={styles.header_main_content_headline}>Пользуйтесь где угодно и когда угодно</h1>
				<div className={styles.main_content_horizontal}>
					<div className={styles.white_box_timer}>
						<div>
							<span style={{ fontSize: '24px', marginBottom: '20px', color: '#ff6200' }}>Срок кредита</span>
							<p style={{ fontSize: '52px', fontWeight: 700, color: '#323438', marginTop: '20px' }}>
								От 15 дней <br /> до 3 лет
							</p>
						</div>
						<PrimaryButton text="Подробнее" aligned="flex-start" />
					</div>
					<div className={styles.blue_box}>
						<h2 className={styles.orange_box_text} style={{ fontWeight: '900' }}>
							Кредит <br />
							до
							<br /> 50 000 сомони
						</h2>
						<BlackButton text="Получить кредит" />
					</div>
				</div>
			</div>
		</>
	);
}
