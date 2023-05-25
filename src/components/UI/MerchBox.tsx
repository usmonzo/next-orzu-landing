import { ReactNode, useEffect, useState } from 'react';
import './MerchantBox.scss';

interface Props {
	text: string;
	children: ReactNode;
}

const MerchBox = (props: Props) => {
	const [rotateDeg, setRotateDeg] = useState<number>();
	useEffect(() => setRotateDeg(Math.floor(Math.random() * 18) - 9), []);
	return (
		<div className="merch-box" style={{ transform: `rotate(${rotateDeg}deg)` }}>
			{props.children}
			<p className="merch-box-text">{props.text}</p>
		</div>
	);
};

export default MerchBox;
