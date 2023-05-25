interface Props {
	text: string;
}

const WhiteButton = (props: Props) => {
	return (
		<button
			style={{
				padding: '20px 40px',
				maxWidth: '339px',
				width: '100%',
				height: '60px',
				left: 'calc(50% - 339px / 2 + 0.5px)',
				background: '#ffffff',
				borderRadius: '50px',
			}}
		>
			<p
				style={{
					fontWeight: '500',
					fontSize: '20px',
					lineHeight: '20px',
					textAlign: 'center',
					color: '#16191d',
				}}
			>
				{props.text}
			</p>
		</button>
	);
};

export default WhiteButton;
