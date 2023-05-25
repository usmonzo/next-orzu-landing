import './Merchants.scss';
import WhiteButton from '../Buttons/WhiteButton';
import MerchBox from '../UI/MerchBox';
import tech from '../../../public/assets/Vector.png';
import phone from '../../../public/assets/Vector1.png';
import clothes from '../../../public/assets/Vector2.png';
import couch from '../../../public/assets/Vector3.png';
import comp from '../../../public/assets/Vector4.png';
import ring from '../../../public/assets/Vector5.png';
import food from '../../../public/assets/Vector6.png';
import parfum from '../../../public/assets/Vector7.png';
import halmet from '../../../public/assets/Vector8.png';
import tea from '../../../public/assets/Vector9.png';
import gift from '../../../public/assets/Vector10.png';
import medicine from '../../../public/assets/Vector11.png';
import azs from '../../../public/assets/Vector12.png';
import education from '../../../public/assets/Vector13.png';
import child from '../../../public/assets/Vector14.png';
import Image from 'next/image';

const Merchants = () => {
	return (
		<section>
			<div className="merch-container">
				<div>
					<h1 className="merch-headline">Где же оплатить?</h1>
					<p className="merch-paragraph">Выберите категорию для того, чтобы посмотреть список магазинов</p>
				</div>
				<div className="merch-list">
					<MerchBox text="Бытовая техника">
						<Image src={tech} width={120} height={123} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Телефоны и аксессуары">
						<Image src={phone} width={106} height={133} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Одежда и обувь">
						<Image src={clothes} width={141} height={120} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Мебель и товары для дома">
						<Image src={couch} width={133} height={106} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Компьютеры и оргтехника">
						<Image src={comp} width={133} height={133} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Ювелирные изделия">
						<Image src={ring} width={112} height={146} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Продукты">
						<Image src={food} width={118} height={134} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Парфюмерия и косметика">
						<Image src={parfum} width={132} height={126} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Стройматериалы">
						<Image src={halmet} width={132} height={80} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Кафе и рестораны">
						<Image src={tea} width={131} height={134} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Цветы и подарки">
						<Image src={gift} width={126} height={134} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Медицинские услуги и лекарства">
						<Image src={medicine} width={120} height={134} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="АЗС и автозапчасти">
						<Image src={azs} width={143} height={138} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Образование">
						<Image src={education} width={133} height={119} alt="2" className="merch-icon" />
					</MerchBox>
					<MerchBox text="Товары для детей">
						<Image src={child} width={120} height={120} alt="2" className="merch-icon" />
					</MerchBox>
				</div>
				<WhiteButton text="Посмотреть все магазины" />
			</div>
		</section>
	);
};

export default Merchants;
