import BlackButton from '../Buttons/BlackButton';
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from './HeaderContent.module.scss';
import Image from 'next/image';
import timer from '../../../public/assets/timer.svg';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeaderContent() {
	const { scrollY } = useScroll();
	const orangeBoxTranslate = useTransform(scrollY, [166, 630], [300, -500]);
	const whiteBoxTranslate = useTransform(scrollY, [166, 630], [300, -500]);
	const whiteBoxTimerTranslate = useTransform(scrollY, [600, 1000], [50, -600]);
	const blueBoxTranslate = useTransform(scrollY, [600, 1000], [50, -600]);
	const textTranslate = useTransform(scrollY, [480, 1050, 1500], [-650, -550, -80]);
	const filter = useTransform(scrollY, [480, 1050, 1500], ['blur(4px)', 'blur(0px)', 'blur(4px)']);
	const textOpacity = useTransform(scrollY, [1250, 1500], [1, 0]);

	return (
		<>
			<div className={styles.header_main_content}>
				<div className={styles.main_content_horizontal}>
					<motion.div
						className={styles.orange_box}
						style={{
							translateY: orangeBoxTranslate,
							transition: '.2s all linear',
						}}
					>
						<h2 className={styles.orange_box_text}>Получите кредит наличными почти сразу</h2>
						<BlackButton text={'Получить кредит'} />
					</motion.div>
					<motion.div
						className={styles.white_box}
						style={{
							translateY: whiteBoxTranslate,
							transition: '.2s all linear',
						}}
					>
						<h2 className={styles.white_box_headline}>5 лет</h2>
						<div className={styles.wh}>
							<p className={styles.white_box_secondary}>Единоразовое подключение</p>
							<p className={styles.white_box_paragraph}>Получайте деньги, не посещая офис, в течение 5 лет</p>
						</div>
						<PrimaryButton text="Подробнее" aligned="flex-start" justify="end" />
					</motion.div>
				</div>
				<motion.h1
					className={styles.header_main_content_headline}
					style={{
						translateY: textTranslate,
						filter,
						opacity: textOpacity,
						// filter: `blur(${filter.get()})px`,
					}}
				>
					Пользуйтесь где угодно и когда угодно
				</motion.h1>
				<div className={styles.main_content_horizontal}>
					<motion.div
						className={styles.white_box_timer}
						style={{
							translateY: whiteBoxTimerTranslate,
							transition: '.2s all linear',
						}}
					>
						<div style={{ zIndex: 5 }}>
							<span
								style={{
									fontSize: '24px',
									marginBottom: '20px',
									color: '#ff6200',
								}}
								className={styles.white_box_timer_span}
							>
								Срок кредита
							</span>
							<p className={styles.white_box_timer_headline}>
								От 15 дней <br /> до 3 лет
							</p>
						</div>
						<PrimaryButton text="Подробнее" aligned="flex-start" />
						<Image src={timer} alt={'timer'} className={styles.white_box_timer_icon} />
					</motion.div>
					<motion.div
						className={styles.blue_box}
						style={{
							translateY: blueBoxTranslate,
							transition: '.2s all linear',
						}}
					>
						<h2 className={styles.blue_box_text}>
							Кредит <br />
							до
							<br /> 50 000 сомони
						</h2>
						<BlackButton text="Получить кредит" />
					</motion.div>
				</div>
			</div>
		</>
	);
}
