import Logo from '@/components/home/logo';
import BaseContainer from '@/components/BaseContainer';

type ButtonLayoutProps = {
	title: string,
	children: React.ReactNode,
}

const Footer = () => {

	const ButtonLayout = ({ title, children }: ButtonLayoutProps) => {
		return (
			<div className='flex items-center justify-center md:justify-between bg-[#080B13] rounded-[40px] px-2 md:px-8 text-[#C4E2FE] tracking-widest space-x-0 md:space-x-16'>
				<div className="hidden md:flex items-center justify-center text-xs font-chakraPetch opacity-40">
					<p>/</p>
					<p className="ml-1">{title}</p>
				</div>
				<div className="flex flex-wrap justify-center md:justify-between space-x-5 md:space-x-6">
					{children}
				</div>
			</div>
		)
	}

	const ArrowText = (props: { text: string, link: string }) => {
		return (
			<a href={props.link}>
				<div className="flex items-center space-x-1 py-8">
					<h1 className="font-chakraPetch text-xs uppercase">
						{props.text}
					</h1>
					<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
					</svg>
				</div>
			</a>
		)
	}

	return (
		<BaseContainer>
			<div className="flex flex-col md:flex-row-reverse justify-between mt-32 md:mt-[320px] mb-10">
				<div className="ml-3 space-y-6">
					<ButtonLayout title="Navigation">
						<ArrowText text="Marketplace" link="marketplace" />
						<ArrowText text="Crafting" link="crafting" />
					</ButtonLayout>

					<ButtonLayout title="Join In">
						<ArrowText text="Instagram" link="/" />
						<ArrowText text="Discord" link="/" />
						<ArrowText text="Twitter" link="/" />
						<ArrowText text="Youtube" link="/" />
						<ArrowText text="Tiktok" link="/" />
					</ButtonLayout>

					<ButtonLayout title="Document">
						<ArrowText text="Legal Overview" link="legal" />
						<ArrowText text="Privacy Policy" link="policy" />
						<ArrowText text="Terms & Conditions" link="terms" />
					</ButtonLayout>
				</div>
				<div className="flex flex-col flex-grow justify-center md:justify-between items-center md:items-start mt-10 md:mt-0 ">
					<Logo />
					<p className="text-2xl font-orbitron nft-gradient md:max-w-[240px] text-center md:text-left mt-8 md:mt-0">
						Market With Quality 3D assets / NFT / DLC
					</p>
					<div className="text-[#C4E2FE] text-xs font-chakraPetch mt-8 md:mt-0">
						<p>@ Ghost Prisms.</p>
						<p>All right reserved.</p>
					</div>
				</div>

			</div>
		</BaseContainer>
	)
}
export default Footer;
