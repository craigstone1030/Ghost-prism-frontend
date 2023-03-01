import Link from "next/link";
import { useRouter } from "next/router";
import BaseContainer from '@/components/BaseContainer';
import Logo from '@/components/home/logo';

const Header = () => {
	const router = useRouter();

	return (
		<>
			<BaseContainer>
				<div className="flex items-center justify-between px-2 md:px-0 py-4">
					<div className="flex items-center space-x-16">
						<Logo />
						<div className="hidden justify-between rounded-[40px] bg-[#0F1421] px-8 py-2 md:flex">
							<div className="flex items-center text-[#7FB5FF] space-x-1">
								<h1 className="font-chakraPetch uppercase">
									<Link href="/marketplace">Marketplace</Link>
								</h1>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
								</svg>
							</div>
							<div className="mx-5 text-[#7FB5FF] opacity-[0.2] rotate-[17deg]">/</div>
							<div className="flex items-center space-x-1 text-[#FEE2C5]">
								<h1 className="font-chakraPetch uppercase">
									<Link href="/crafting">Crafting</Link>
								</h1>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="flex space-x-4">
						<div className="relative">
							<div className="flex items-center justify-center relative z-20 bg-[#2b363c] rounded-full p-2 h-[40px] w-[40px]">
								<img width="16px" src="../images/user.svg" alt="wallet" />
							</div>
							<div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-[40px]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)"}}></div>
						</div>

						<div className="relative">
							<div className="flex items-center justify-center relative z-20 bg-[#FEE2C5]/20 rounded-full p-2 h-[40px] w-[40px]">
								<img width="16px" src="../images/plus.svg" alt="wallet" />
							</div>
							<div className="absolute z-10 -top-[1px] -left-[1px] rounded-[50%] bg-gradient-to-b from-[#FEE2C5]/[.32] to-[#FEE2C5]/[.01]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)"}}></div>
						</div>

						<div className="flex items-center justify-center space-x-2">
							<div className="relative">
								<div className="flex items-center justify-center relative z-20 bg-[#FEE2C5]/20 rounded-full p-2 h-[40px] w-[40px]">
									<img width="16px" src="../images/wallet.svg" alt="wallet" />
								</div>
								<div className="absolute z-10 -top-[1px] -left-[1px] rounded-full bg-gradient-to-b from-[#FEE2C5]/[.32] to-[#FEE2C5]/[.01]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)"}}></div>
							</div>
							<div className="w-full">
								<h1 className="font-chakraPetch text-xs tracking-widest">Wallet:</h1>
								<h1 className="font-chakraPetch text-xs tracking-widest font-semibold uppercase">Connected</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-8 md:hidden">
					<div className="flex justify-between rounded-[40px] bg-[#0F1421] px-8 py-2 w-[400px]">
						<div className="flex items-center m-auto text-[#7FB5FF] space-x-1">
							<h1 className="font-chakraPetch uppercase">
								Marketplace
							</h1>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
							</svg>
						</div>
						<div className="mx-5 text-[#7FB5FF] opacity-[0.2] rotate-[17deg]">/</div>
						<div className="flex items-center space-x-1 text-[#FEE2C5] m-auto">
							<h1 className="font-chakraPetch uppercase">
								Crafting
							</h1>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
							</svg>
						</div>
					</div>
				</div>
			</BaseContainer>
		</>
	)
}
export default Header;
