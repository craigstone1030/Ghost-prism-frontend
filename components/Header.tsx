import Link from "next/link";
import { useRouter } from "next/router";
import BaseContainer from '@/components/BaseContainer';
import Logo from '@/components/home/logo';

const Header = () => {
	const router = useRouter();

	return (
		<>
			<BaseContainer>
				<div className="flex items-center justify-between py-4">
					<div className="flex items-center space-x-16">
						<Logo />
						<div className="flex justify-between rounded-[40px] bg-[#0F1421] px-8 py-2">
							<div className="flex items-center text-[#7FB5FF] space-x-1">
								<h1 className="font-chakraPetch uppercase">
									Marketplace
								</h1>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
								</svg>
							</div>
							<div className="mx-5 text-[#7FB5FF] opacity-[0.2] rotate-[17deg]">/</div>
							<div className="flex items-center space-x-1">
								<h1 className="font-chakraPetch uppercase">
									Crafting
								</h1>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="flex space-x-4">
						<div className="relative">
							<div className="flex items-center justify-center relative z-20 bg-[#7FB5FF]/20 rounded-full p-2">
							<img width="100%" src="../images/user.svg" alt="wallet" />
							</div>
							<div className="absolute z-10 w-[calc(100%+2px)] h-[calc(100%+2px)] -left-[1px] -top-[1px] rounded-full bg-gradient-to-b from-[#7FB5FF]/[.84] to-[#7FB5FF]/[.01] p-2"></div>
						</div>

						<div className="relative">
							<div className="flex items-center justify-center relative z-20 bg-[#FEE2C5]/20 rounded-full p-2">
								<img width="100%" src="../images/plus.svg" alt="wallet" />
							</div>
							<div className="absolute z-10 w-[calc(100%+2px)] h-[calc(100%+2px)] -left-[1px] -top-[1px] rounded-full bg-gradient-to-b from-[#FEE2C5]/[.32] to-[#FEE2C5]/[.01] p-2"></div>
						</div>

						<div className="flex items-center justify-center">
							<div className="relative w-[40px]">
								<div className="flex items-center justify-center relative z-20 bg-[#FEE2C5]/20 rounded-full p-2">
									<img width="100%" src="../images/wallet.svg" alt="wallet" />
								</div>
								<div className="absolute z-10 w-[calc(100%+2px)] h-[calc(100%+2px)] -left-[1px] -top-[1px] rounded-full bg-gradient-to-b from-[#FEE2C5]/[.32] to-[#FEE2C5]/[.01] p-2"></div>
							</div>
							<div className="w-full ml-2">
								<h1 className="font-chakraPetch text-xs">Wallet:</h1>
								<h1 className="font-chakraPetch text-xs uppercase">Connected:</h1>
							</div>
						</div>
					</div>
				</div>
			</BaseContainer>
		</>
	)
}
export default Header;
