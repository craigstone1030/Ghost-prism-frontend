import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type AssetCardProps = {
  id: string,
  image: string,
  index: number
};



export default function AssetCard(props: AssetCardProps) {

  return (
    <div className="flex flex-col border-2 border-[#0F1421] rounded-[40px] p-6 z-20 relative max-w-[331px]">
      <img src={`./images/${props.image}`} width="" alt="nft" />
      <div className="flex justify-start items-center space-x-[10px] mt-6">
        <div className="relative">
          <div className="flex items-center bg-[#2b363c] rounded-[40px] px-[10px] py-[2px] h-6 relative z-20">
            <h1 className="text-xs nft-gradient uppercase">element</h1>
          </div>
          <div className="absolute -top-[1px] -left-[1px] h-full bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-[40px]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
        </div>
        <h1 className="text-base nft-gradient uppercase">Ghost celestial</h1>
      </div>
      <div className="flex justify-between font-chakraPetch text-xs text-[#7FB5FF] mt-4">
        <h1 className="">Level:</h1>
        <h2 className="">[&nbsp;1 lvl&nbsp;]</h2>
      </div>
    </div>
  );
}
