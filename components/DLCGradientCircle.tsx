import React from "react";

const DLCGradientCircle = (props: { children: React.ReactNode, isCircle: boolean}) => {

	return (
		<div className="relative ml-2 w-fit">
			<div className={`flex items-center justify-center relative z-20 bg-[#393637] rounded-full p-2 h-[40px] ${props.isCircle ? "w-[40px]" : "px-4"}`}>
				<div className='nft-gradient'>{props.children}</div>
			</div>
			<div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7a7575] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
		</div>
	)
}
export default DLCGradientCircle;
