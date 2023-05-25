interface Props {
	text: string;
}

const BlackButton = (props: Props) => {
	return (
		<button
			style={{
				alignSelf: 'flex-start',
				padding: '15px 30px',
				gap: '12px',
				background: '#16191d',
				borderRadius: ' 50px',
				color: '#fff',
				fontWeight: '500',
				fontSize: '20px',
				border: 'none',
			}}
		>
			{props.text}
		</button>
	);
};

export default BlackButton;
