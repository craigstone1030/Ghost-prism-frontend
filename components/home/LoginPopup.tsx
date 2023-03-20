import Link from "next/link";

export default function LoginPopup() {

  return (
    <div className="absolute w-[280px] top-[144%] -left-[300%] bg-[#00040E] rounded-[40px] border-2 border-[#0F1421] p-6 z-[1000]">
      <div className="flex space-x-4">
        <img width="16px" src="../images/user.svg" alt="user" />
        <p className="text-[#7FB5FF] text-xs font-semibold uppercase">profile</p>
      </div>
      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
      <div className="mt-12 space-y-6">
        <Link href="/login">
          <div className={`w-full flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[48px] space-x-3 hover:cursor-pointer`}>
            <div className="relative ml-2 w-fit">
              <div className={`flex items-center justify-center relative z-20 bg-[#2b363c] rounded-full p-2 h-[32px] w-[32px]`}>
                <div className='nft-gradient'>
                  <img width="16px" src="../images/user.svg" alt="wallet" />
                </div>
              </div>
              <div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
            </div>
            <h1 className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#7FB5FF]`}>
              login
            </h1>
          </div>
        </Link>
        <div className={`w-full flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[48px] space-x-3`}>
          <div className="relative ml-2 w-fit">
            <div className={`flex items-center justify-center relative z-20 bg-[#393637] rounded-full p-2 h-[32px] w-[32px]`}>
              <div className='nft-gradient'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7a7575] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
          </div>
          <h1 className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#FEE2C5]`}>
            create account
          </h1>
        </div>
      </div>
    </div>
  );
}
