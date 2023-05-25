import { useState, useEffect, forwardRef } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './Calc.module.scss';
import PrimaryButton from '../Buttons/PrimaryButton';

interface IProp {
	number?: number;
	currency?: string;
}

const FormatedPrice = (props: IProp, currency = 'сомони') => {
	return <>{`${props.number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} `}</>;
	// ${currency}
};

const Calculator2 = forwardRef((props, requestFormRef: any) => {
	const [calcData, setCalcData] = useState<any>(null);
	const [creditPrice, setCreditPrice] = useState<any>(500);
	const [creditTermId, setCreditTermId] = useState(5);
	const [selectedCreditTerm, setSelectedCreditTerm] = useState<any>(null);
	const [monthlyPayment, setMonthlyPayment] = useState<any>(0);
	const [showLabelOnInput, setShowLabelOnInput] = useState(true);
	const [loading, setLoading] = useState(false);

	const makeShortlandTitle = (title: any) => {
		const [number, value] = title.split(' ');
		return `${number} ${value.substring(0, 1)}.`;
	};

	const handleCreditPrice = (event: any) => {
		let price = event.target.value.trim();
		const regex = /^(0{1}|([1-9]([0-9]+)?))(\.\d{1,2})?$/gim;
		const result = regex.test(price);

		if (price > calcData.maxSum) {
			price = calcData.maxSum;
		}

		if (result || price === '') {
			setCreditPrice(price);
		}
	};

	const handleCreditPriceOnBlur = () => {
		if (creditPrice < calcData?.minSum || creditPrice === null) {
			setCreditPrice(calcData.minSum);
		}
		setShowLabelOnInput(true);
	};

	const creditTermMarks = () => {
		const marks: any = new Object();
		for (const item of calcData?.periods || []) {
			marks[item.id] = makeShortlandTitle(item.result_ru);
		}
		return marks;
	};

	const percentage = (num: any, per: any) => (parseFloat(num) / 100) * parseFloat(per);

	useEffect(() => {
		if (calcData !== null) {
			const [filteredCreditTerm] = calcData?.periods.filter((item: any) => item.id === creditTermId);
			setSelectedCreditTerm(filteredCreditTerm);
		}
	}, [creditTermId, calcData]);

	useEffect(() => {
		if (selectedCreditTerm) {
			if (selectedCreditTerm.days < 30) {
				const result: any = (parseFloat(creditPrice) + percentage(creditPrice, selectedCreditTerm.percent)).toFixed(2);
				setMonthlyPayment(isNaN(result) ? 0 : result);
			} else {
				const creditPayment = creditPrice / selectedCreditTerm.days;
				const result: any = ((creditPayment + percentage(creditPayment, selectedCreditTerm.percent)) * 30).toFixed(2);
				setMonthlyPayment(isNaN(result) ? 0 : result);
				// console.log("Payment", ((creditPayment + percentage(creditPayment, selectedCreditTerm.percent)) * 30).toFixed(2) );
			}
		}
	}, [creditPrice, selectedCreditTerm]);

	useEffect(() => {
		// const controller = new AbortController();
		// const getCalcData = async () => {
		// 	try {
		// 		setLoading(true);
		// 		const apiConfig = {
		// 			method: 'GET',
		// 			headers: {
		// 				Accept: 'application/json',
		// 			},
		// 			signal: controller.signal,
		// 		};
		// 		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}get_calculate_days`, apiConfig);
		// 		const responseJson = await response.json();
		// 		setLoading(false);
		// 		setCalcData({
		// 			periods: responseJson.payload.calculate_days,
		// 			maxSum: responseJson.payload.max_sum,
		// 			minSum: responseJson.payload.min_sum,
		// 		});
		// 	} catch (error) {
		// 		console.log(error);
		// 		setLoading(false);
		// 	}
		// };
		// getCalcData();
		// Cancel request for first unmound for not dublicating request (React 18 useEffect double call feature)
		// return () => controller.abort();
	}, []);

	return (
		<section id="calculator" className={styles['calculator']}>
			<div className={`container ${styles.content_container}`}>
				<h2 className={styles.title}>Рассчитайте свой кредит</h2>
				{loading ? (
					<div></div>
				) : (
					<div className={styles.calculator_container}>
						<div className={styles.input_data_container}>
							<div className={styles.input_price_container}>
								<h4 className={styles.title}>Введите сумму, которую хотите получить</h4>
								<div>
									<input
										type="text"
										inputMode="numeric"
										value={`${creditPrice}${showLabelOnInput ? ' сомони' : ''}`}
										onChange={handleCreditPrice}
										onFocus={() => setShowLabelOnInput(false)}
										onBlur={handleCreditPriceOnBlur}
									/>
									<Slider
										className={styles.price_slider}
										// min={calcData?.minSum}
										// max={calcData?.maxSum}
										min={100}
										max={50000}
										value={creditPrice}
										onChange={(value) => setCreditPrice(value)}
										step={1000}
										trackStyle={{
											backgroundColor: '#ff5d02',
											borderRadius: 0,
											borderBottomLeftRadius: '8px',
											borderBottomRightRadius: '8px',
										}}
										railStyle={{
											backgroundColor: 'transparent',
											borderRadius: 0,
											borderBottomLeftRadius: '8px',
											borderBottomRightRadius: '8px',
										}}
										handleStyle={{
											backgroundColor: '#FFFFFF',
											opacity: '1',
											borderColor: '#FF5D02',
										}}
									/>
									<div className={styles.credit_price_steps}>
										<span>
											<FormatedPrice number={calcData?.minSum} currency="смн." />
										</span>
										<span>
											<FormatedPrice number={calcData?.maxSum / 2} currency="смн." />
										</span>
										<span>
											<FormatedPrice number={calcData?.maxSum} currency="смн." />
										</span>
										{/* <span>{`${(calcData?.maxSum / 2)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} смн.`}</span>
                        <span>{`${(calcData?.maxSum)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} смн.`}</span> */}
									</div>
								</div>
							</div>
							<div className={styles.input_term_container}>
								<h4 className={styles.title} style={{ color: '#090909' }}>
									Срок кредита
								</h4>
								<div className={styles.selected_term_period} style={{ color: '#090909' }}>
									{selectedCreditTerm?.result_ru}
								</div>
								<div>
									<Slider
										className={styles.credit_term_slider}
										min={1}
										max={calcData?.periods.length}
										value={creditTermId}
										dots={false}
										onChange={(value: any) => setCreditTermId(value)}
										step={1}
										marks={creditTermMarks()}
										trackStyle={{
											backgroundColor: '#ff5d02',
											borderRadius: 0,
											borderBottomLeftRadius: '8px',
											borderBottomRightRadius: '8px',
										}}
										railStyle={{
											backgroundColor: 'transparent',
											borderRadius: 0,
											borderBottomLeftRadius: '8px',
											borderBottomRightRadius: '8px',
											outline: 'none',
										}}
										handleStyle={{
											backgroundColor: '#FFFFFF',
											opacity: '1',
											borderColor: '#FF5D02',
										}}
										dotStyle={{
											display: 'none',
											border: '0.1px solid  orange',
											outline: 'none',
											fontSize: '20px',
										}}
									/>
								</div>
							</div>
						</div>
						<div className={styles.results_container}>
							<div className={styles.price_container}>
								<span className={styles.title}>Вы выбрали сумму:</span>
								<span className={styles.value}>
									<span style={{ fontSize: '40px', fontWeight: '600' }}>
										<FormatedPrice number={creditPrice} />
									</span>
									сомони
									{/* {creditPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} сомони */}
								</span>
							</div>
							<div className={styles.term_container}>
								<div className={styles.term}>
									<span className={styles.title}>На срок:</span>
									<span className={styles.value}>
										<span style={{ fontSize: '40px', fontWeight: '600' }}>{selectedCreditTerm?.result_ru}</span>
									</span>
								</div>
								<div className={styles.commission}>
									<span className={styles.title}>Комиссия:</span>
									<span className={styles.value}>
										<span style={{ fontSize: '40px', fontWeight: '600' }}>{selectedCreditTerm?.percent}</span>
										<span>%</span>
									</span>
								</div>
							</div>
							<div className={styles.monthly_payment_cointainer}>
								<span className={styles.title}>Ваш {selectedCreditTerm?.days >= 30 ? 'ежемесячный' : ''} платеж:</span>
								<span className={styles.value}>
									<span style={{ fontSize: '40px', fontWeight: '600' }}>
										<FormatedPrice number={monthlyPayment} />
									</span>
									сомони
								</span>
							</div>
						</div>
					</div>
				)}
				<div className={styles.scrollToContainer}>
					<PrimaryButton
						onClick={() => {
							requestFormRef.current.scrollIntoView();
						}}
						text="Отправить заявку"
					/>
				</div>
				<p className={styles.warning_info}>
					* Расчет калькулятора предварительный. При оформлении кредита «Орзу» методы расчета могут отличаться в
					приложении Хумо Онлайн и кассах ЗАО МДО Хумо.
				</p>
			</div>
		</section>
	);
});

export default Calculator2;
