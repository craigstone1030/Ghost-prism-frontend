import BaseContainer from '@/components/BaseContainer';

const HeroSection = () => {

	return (
		<BaseContainer>
			<div className="flex flex-col justify-center items-center mt-8 md:mt-24">
				<h1 className='text-center text-[50px] md:text-[80px] leading-[80px] font-orbitron dlc-gradient'>
					Market With<br /> Quality 3D assets<br /> / NFT / DLC
				</h1>
				<p className='text-[#C4E2FE] text-[14px] leading-6 font-chakraPetch text-center mt-10'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='mt-[200px]'>
					<img src="./images/ScrollDownBtn.svg" width="100px" alt="scroll down button" />
				</div>
				<p className='text-[#FEE2C5] text-center font-chakraPetch text-base my-2'>
					Scroll to more<br />Crafting
				</p>
			</div>
		</BaseContainer>
	)
}
export default HeroSection;
