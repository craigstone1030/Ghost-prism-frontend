import { Dialog } from '@headlessui/react'
import DLCGradientCircle from "@/components/DLCGradientCircle"
import NFTGradientCircle from "@/components/NFTGradientCircle"
import { MouseEventHandler, useState } from 'react'

export default function ConnectWallet() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  const ButtonLayout = (props: { text: string, isCancel: boolean, active: boolean, onClick: MouseEventHandler }) => {
    return (
      <div className="w-full hover:cursor-pointer" onClick={props.onClick}>
        <div className={`flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[60px] space-x-3 ${props.active ? "" : "opacity-40"}`}>
          {
            props.isCancel ? (
              <NFTGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </NFTGradientCircle>
            ) : null
          }

          <p className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase ${props.isCancel ? "text-[#7FB5FF]" : "text-[#FEE2C5]"}`}>
            {props.text}
          </p>

          {
            props.isCancel ? (
              null
            ) : (
              <DLCGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </DLCGradientCircle>
            )
          }
        </div>
      </div>
    )
  }

  return (
    <div className='w-full mt-8 md:mt-0'>
      <div className='border-2 border-[#0F1421] rounded-[40px] p-8 md:p-12'>
        <h1 className='dlc-gradient uppercase text-[18px] md:text-[26px]'>
          Connect wallet
        </h1>
        <div className='relative mt-12'>
          <img src="/images/bg_walletConnect.png" width="100%" alt="wallet connect" />
          <div className='absolute top-6 left-6 uppercase'>
            <h1 className='text-[#FEE2C5]'>Wallet:</h1>
            <h1 className='text-[#FEE2C5] font-semibold'>{isWalletConnected ? "Connected" : "Not connected"}</h1>
          </div>
          <div className='absolute top-6 right-6 bg-[#0F1421] rounded-full p-2 w-12 h-12'>
            <div className='flex items-center justify-center w-full h-full text-transparent border-2 border-[#FEE2C5]/[.2] rounded-full '>
              {
                isWalletConnected ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                ) : null
              }
            </div>
          </div>
        </div>
        <div className='mt-12'>
          {
            isWalletConnected ? (
              <div className="w-full hover:cursor-pointer" onClick={() => setIsWalletConnected(false)}>
                <div className={`flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[60px] space-x-3`}>                
                  <p className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#FEE2C5]`}>
                    Disconnect wallet
                  </p>
                  <DLCGradientCircle isCircle={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                  </DLCGradientCircle>
              
                </div>
              </div>
            ) : (
              <ButtonLayout text="connect wallet" isCancel={false} active={true} onClick={() => { setIsOpen(true); setIsWalletConnected(true) }} />
            )
          }
        </div>
        <div className='flex justify-center items-center text-center text-[#C4E2FE] text-xs mt-12'>
          One system for all wallets!
        </div>
      </div>
      <div className='flex flex-row w-full justify-between mt-4 md:mt-12 space-x-6'>
        <ButtonLayout text="cancel setting" isCancel={true} active={true} onClick={() => console.log('clicked')} />
        <ButtonLayout text="save settings" isCancel={false} active={false} onClick={() => console.log('clicked')} />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto p-4 bg-[#00040E] w-[200px] md:w-[320px] rounded-[40px]">
            <div className="relative w-fit m-auto">
              <div className={`flex items-center justify-center relative z-20 bg-[#00040E] rounded-full p-2 h-[40px] w-[40px]`}>
                <div className='check-gradient'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#FEE2C5]/[.2] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
            </div>
            <div className='text-[#FEE2C5] text-xs font-semibold mt-4 text-center uppercase'>
              The wallet has successfully<br /> connected to ghost prisms,<br /> thanks!
            </div>
            <div className='flex flex-row w-[240px] mt-4 md:mt-8 mx-auto space-x-6'>
              <ButtonLayout text="Thank you" isCancel={false} active={true} onClick={() => setIsOpen(false)} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

    </div>
  )
}
