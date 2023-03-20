import Link from "next/link";
import { useRouter } from "next/router";
import BaseContainer from '@/components/BaseContainer';
import NFTCard from '@/components/home/NFTCard';
import { useState } from 'react';

const MarketplaceSection = () => {
	const NFTs = [
		{
			id: "0x123sdkf34kj4kj4kjk2jk34jkqjb", 
			image: 'nft1.png',
			nft: true
		},
		{
			id: "0x83j4j453jkhj4jtkwerlwkelrekrl", 
			image: 'nft2.png',
			nft: true
		},
		{
			id: "0xdfeklefjkdfiueifdkifklllelee", 
			image: 'nft3.png',
			nft: false
		},
		{
			id: "0x2k3jkjakdjkewjdkasjdkdjfkjdfk", 
			image: 'nft4.png',
			nft: false
		},
		{
			id: "0x23k4jkjsifjksdjfiusdofjldkfls", 
			image: 'nft5.png',
			nft: true
		},
		{
			id: "0x2k34jkjdsfijsidfjksdjfksdjfksdjf", 
			image: 'nft6.png',
			nft: true
		}
	]

	const CREATORS = [
		{
			name: "clegfx"
		},
		{
			name: "Ghost Prisms"
		},
		{
			name: "Ravel"
		},
		{
			name: "Jaiden"
		},
		{
			name: "Loopify"
		},
		{
			name: "Loopify"
		},
		{
			name: "Zoowist"
		},
		{
			name: "Williams"
		},
		{
			name: "Jonatan"
		}
	]

	const CATEGORIES = [
		{
			name: "avatar"
		}
	]

	const router = useRouter();

	const [isFilter, setIsFilter] = useState<boolean>(false);

	const ButtonLayout = (props: { text: string, link: string, active: boolean }) => {
		return (
			<Link href={props.link}>
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
			</Link>
		)
	}

	const DetailLayout = (props: { name: string, items: Array<{ name: string }> }) => {
		return (
			<div className='px-3 md:px-0'>
				<div className='flex items-center'>
					<h1 className='nft-gradient text-base font-orbitron uppercase'>
						{props.name}
					</h1>
					<div className="relative ml-2">
						<div className="flex items-center justify-center relative z-20 bg-[#2b363c] rounded-2xl p-2 h-[24px] w-[34px]">
							<h1 className='nft-gradient'>{props.items.length}</h1>
						</div>
						<div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-2xl" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
					</div>
				</div>
				<div className='flex flex-wrap gap-x-2 gap-y-4 mt-6'>
					{
						props.items.map((item, index) => (
							<DetailButton key={index} name={item.name} index={index} />
						))
					}
				</div>
			</div>
		)
	}

	const DetailButton = (props: { name: string, index: number }) => {
		return (
			<div className={`flex items-center justify-center text-3xl font-orbitron text-[#C4E2FE] ${props.index !== 1 ? "bg-[#080B13]" : "bg-[#2b363c]"}  border-2 border-[#0F1421] rounded-[40px] h-[48px] space-x-3 px-5 py-2"`}>
				<h1 className="font-chakraPetch text-xs uppercase whitespace-nowrap">
					@ &nbsp;&nbsp; {props.name}
				</h1>
			</div>
		)
	}

	return (
		<BaseContainer>
			<div className={`flex flex-col md:flex-row justify-between items-center ${router.pathname === "/marketplace" ? "mt-4 md:mt-24" : "mt-32 md:mt-[320px]"}`}>
				<p className='nft-gradient text-[45px] md:text-5xl font-orbitron uppercase'>
					Marketplace
				</p>
				<div className='flex items-center space-x-7 mt-4 md:nt-0 hover:cursor-pointer' onClick={() => setIsFilter(!isFilter)}>
					<h1 className='text-[#7FB5FF] font-orbitron text-base font-semibold uppercase'>
						filters
					</h1>
					{
						isFilter ? (
							<img src="./images/minusArrow.svg" width="" alt="minus arrow" />
						) : (
							<img src="./images/plusArrowBlue.svg" width="" alt="plus arrow" />
						)
					}
				</div>
			</div>
			{
				isFilter ? (
					<div className="flex flex-col items-start justify-start mt-10 space-y-10">
						<DetailLayout name="cretors" items={CREATORS} />
						<DetailLayout name="categories" items={CATEGORIES} />
					</div>
				) : null
			}

			<div className='flex flex-wrap justify-center gap-x-[20px] gap-y-[20px] mt-20'>
				{
					NFTs.map((item, index) => (
						<NFTCard key={index} index={index} id={item.id} nft={item.nft} image={item.image} avartar={false} />
					))
				}
			</div>
			{
				router.pathname !== "/marketplace" ? (
					<div className='flex justify-center flex-row space-x-6 mt-20'>
						<ButtonLayout text="Staking Info" link="staking" active={true} />
						<ButtonLayout text="See All Assets" link="all" active={false} />
					</div>
				) : null
			}

		</BaseContainer>
	)
}
export default MarketplaceSection;
