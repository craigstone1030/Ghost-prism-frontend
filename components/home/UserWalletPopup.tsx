
export default function UserWalletPopup() {

  return (
    <div className="absolute w-[280px] top-[144%] -left-[359%] md:-left-[300%] bg-[#00040E] rounded-[40px] border-2 border-[#0F1421] p-6 z-[1000]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <h1 className="text-[#FEE2C5]">@</h1>
          <p className="text-[#FEE2C5] text-xs font-semibold font-chakraPetch tracking-widest">ghost prisms</p>
        </div>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FEE2C5" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
          </svg>
        </div>
      </div>
      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-row justify-between text-xs font-chakraPetch font-semibold text-[#FEE2C5]">
          <h1 className="">Total:</h1>
          <h1 className="">8U75...64GS</h1>
        </div>
        <div className="mt-6 flex flex-row items-end text-[#FEE2C5] font-chakraPetch space-y-1">
          <h1 className="text-[22px]">0,066</h1>
          <h1 className="text-xs uppercase">eth</h1>
        </div>
        <div className="mt-1 flex flex-row items-end text-[#FEE2C5] font-chakraPetch space-y-1">
          <h1 className="text-sm">(&nbsp;$12 643,435&nbsp;)</h1>          
        </div>
      </div>
      <div className="mt-12 space-y-6">
        <div className={`w-full flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[48px] space-x-3 hover:cursor-pointer`}>
          <div className="relative ml-2 w-fit">
            <div className={`flex items-center justify-center relative z-20 bg-[#393637] rounded-full p-2 h-[32px] w-[32px]`}>
              <div className='nft-gradient'>
                <img width="16px" src="../images/wallet.svg" alt="wallet" />
              </div>
            </div>
            <div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7a7575] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
          </div>
          <h1 className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#FEE2C5]`}>
            setting wallet
          </h1>
        </div>
      </div>
    </div>
  );
}
