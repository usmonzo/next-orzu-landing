import { ReactNode } from 'react';
import './MerchantBox.scss';

interface Props {
	text: string;
	rotate?: string;
	children: ReactNode;
}

const MerchBox = (props: Props) => {
	return (
		<div className="merch-box">
			{props.children}
			<p className="merch-box-text">{props.text}</p>
		</div>
	);
};

export default MerchBox;
