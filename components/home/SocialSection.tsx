import Link from 'next/link';
import BaseContainer from '@/components/BaseContainer';

const SocialSection = () => {
	const SocialLinksData = [
		{
			text: "Instagram",
			link: "https://instagram.com/"
		},
		{
			text: "Discord",
			link: "https://discord.com/"
		},
		{
			text: "Twitter",
			link: "https://twitter.com/"
		},
		{
			text: "Youtube",
			link: "https://youtube.com/"
		},
		{
			text: "Tiktok",
			link: "https://tiktok.com/"
		}
	]

	const SocialButton = (props: { text: string, link: string }) => {
		return (
			<Link href={props.link}>
				<div className="flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#080B13] rounded-[40px] w-[330px] h-[90px] space-x-3">
					<h1 className="font-orbitron text-2xl uppercase">
						{props.text}
					</h1>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7FB5FF" className="bi bi-arrow-up-right font-bold" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
					</svg>
				</div>
			</Link>
		)
	}

	return (
		<BaseContainer>
			<div className='mt-32 md:mt-[320px]'>
				<p className="text-[50px] md:text-[80px] text-center leading-[80px] uppercase nft-gradient">
					Join the<br /> community for the<br /> latest news!
				</p>
				<div className='flex flex-row flex-wrap justify-center items-center gap-[30px] mt-20 md:mt-[160px]'>
					{
						SocialLinksData.map((item, index) => (
							<div key={index} className="">
								<SocialButton text={item.text} link={item.link} />
							</div>
						))
					}
				</div>
			</div>
		</BaseContainer>
	)
}
export default SocialSection;
