
import BaseContainer from '@/components/BaseContainer';

const PromptSection = () => {

	const ButtonLayout = (props: { text: string, link: string, active: boolean }) => {
		return (
			<a href={props.link}>
				<div className="flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] w-[180px] md:w-[240px] h-[60px] space-x-3">
					{
						props.active ? (
							<img src="./images/leftArrow.svg" width="40px" alt="left arrow" />
						) : null

					}
					<h1 className={`font-chakraPetch text-xs uppercase ${props.active ? "text-[#7FB5FF]" : "text-[#FEE2C5]"}`}>
						{props.text}
					</h1>
					{
						props.active ? (
							null
						) : (
							<img src="./images/rightArrow.svg" width="40px" alt="right arrow" />
						)
					}
				</div>
			</a>
		)
	}

	return (
		<BaseContainer>
			<div className='mt-32 md:mt-[320px] p-8 bg-[#080B13] rounded-[40px]'>
				<p className='nft-gradient text-5xl font-orbitron'>
					Interoperability<br /> Metaverses / Games
				</p>
				<div className='mt-[50px]'>
					<img src="./images/prompt_graph.png" width="100%" alt="graph" />
				</div>
				<div className='flex flex-col md:flex-row justify-between items-center mt-12'>
					<div className='text-center md:text-left'>
						<p className='dlc-gradient text-[40px]'>
							1024%
						</p>
						<p className='text-base font-orbitron text-[#C4E2FE] font-medium'>
							In recent years, Metaverses /<br /> Games growth has been:
						</p>
					</div>
					<div className='flex flex-row space-x-6 mt-4 md:mt-0'>
						<ButtonLayout text="crafting" link="crating" active={true} />
						<ButtonLayout text="featured drops" link="featured" active={false} />
					</div>
				</div>
			</div>
		</BaseContainer>
	)
}
export default PromptSection;
