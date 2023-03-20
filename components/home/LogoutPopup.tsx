
export default function LogoutPopup(props: { setUserLogin: Function }) {

  return (
    <div className="absolute w-[280px] top-[144%] -left-[300%] bg-[#00040E] rounded-[40px] border-2 border-[#0F1421] p-6 z-[1000]">
      <div className="flex flex-row justify-between">
        <div className="flex space-x-4">
          <img width="16px" src="../images/user.svg" alt="user" />
          <p className="text-[#7FB5FF] text-xs font-semibold uppercase">profile</p>
        </div>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#7FB5FF" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
          </svg>
        </div>
      </div>
      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
          <p className="text-[#FEE2C5] text-xs font-semibold uppercase">create avatar&nbsp;(nft)</p>
        </div>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FEE2C5" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
          </svg>
        </div>
      </div>
      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
          </svg>
          <p className="text-[#7FB5FF] text-xs font-semibold uppercase">setting</p>
        </div>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#7FB5FF" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
          </svg>
        </div>
      </div>
      <div className="mt-12 space-y-6">
        <div className={`w-full flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[48px] space-x-3 hover:cursor-pointer`} onClick={() => props.setUserLogin(false)}>
          <div className="relative ml-2 w-fit">
            <div className={`flex items-center justify-center relative z-20 bg-[#2b363c] rounded-full p-2 h-[32px] w-[32px]`}>
              <div className='nft-gradient'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
            </div>
            <div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
          </div>
          <h1 className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#7FB5FF]`}>
            log out
          </h1>
        </div>
      </div>
    </div>
  );
}
