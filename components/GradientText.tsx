type GradientTextProps = {
	from: string,
	to: string,
	text: string,
	sx: string
}

const GradientText = (props: GradientTextProps) => {

	return (
		<>
			{/* @ts-ignore */}
			<p className={`font-orbitron ${props.sx}`} style={{ background: "linear-gradient(180deg, #C4E2FE 0%, #7FB5FF 100%), linear-gradient(180deg, #E8F9FD 0%, #FEE2C5 100%)", backgroundClip: "text", textFillColor: "transparent" }}>
				{props.text}
			</p>
			<span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
				Hello world
			</span>
		</>
	)
}
export default GradientText;
