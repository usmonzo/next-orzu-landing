interface Props {
	text: string;
	aligned?: string;
}

const PrimaryButton = (props: Props) => {
	return (
		<button
			style={{
				padding: '17px 30px',
				gap: '12px',
				background: '#ff6200',
				borderRadius: '50px',
				border: 'none',
				fontWeight: '500',
				fontSize: '.8rem',
				lineHeight: '20px',
				textAlign: 'center',
				color: '#ffffff',
				alignSelf: `${props.aligned}`,
			}}
		>
			{props.text}
		</button>
	);
};

export default PrimaryButton;
