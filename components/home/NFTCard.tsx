import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type NFTCardProps = {
  id: string,
  image: string,
  nft: boolean,
  index: number
};



export default function NFTCard(props: NFTCardProps) {

  return (
    <Link href={`/${props.nft ? "nftDetail" : "dlcDetail"}/${props.id}`}>
      <div className="relative">
        <div className="flex flex-col bg-[#080B13] rounded-[40px] p-6 z-20 relative">
          <img src={`./images/${props.image}`} width="" alt="nft" />
          <div className="flex justify-start items-center space-x-[18px] mt-6">
            {
              props.nft ? (
                <div className="relative">
                  <div className="bg-[#2b363c] rounded-[40px] px-[10px] py-[2px] h-6 relative z-20">
                    <h1 className="text-sm nft-gradient uppercase">NFT</h1>
                  </div>
                  <div className="absolute -top-[1px] -left-[1px] h-full bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-[40px]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)"}}></div>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-[#393637] rounded-[40px] px-[10px] py-[2px] h-6 relative z-20">
                    <h1 className="text-sm dlc-gradient uppercase">DLC</h1>
                  </div>
                  <div className="absolute -top-[1px] -left-[1px] h-full bg-gradient-to-b from-[#7a7575] to-[#000] z-10 rounded-[40px]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)"}}></div>
                </div>
              )
            }

            <h1 className="text-xs nft-gradient uppercase">name model</h1>
          </div>
          <div className="flex justify-between font-chakraPetch text-xs text-[#C4E2FE] uppercase mt-4">
            <h1 className="">{props.index + 1} of 5</h1>
            <h2 className="">@&nbsp;&nbsp;Ghost Prisms</h2>
          </div>
        </div>
        <div className="absolute -top-[1px] -left-[1px] h-full bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-[40px]" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)"}}></div>
      </div>
    </Link>
  );
}
