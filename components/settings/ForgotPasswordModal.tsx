import { MouseEventHandler, useState } from "react"
import { Dialog } from '@headlessui/react'
import DLCGradientCircle from "@/components/DLCGradientCircle"
import NFTGradientCircle from "@/components/NFTGradientCircle"

export default function ForgotPasswordModal(props: {isOpen: boolean, setOpen: Function}) {
  const [isForgotPasswordEmailSent, setIsForgotPasswordSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const checkEmail = (input: string) => {
    // Regular expression for checking email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(input)) {
      setEmail(input);
    }
  }

  const sentForgotPasswordEmail = () => {
    setIsForgotPasswordSent(true);
    setEmail('')
  }

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
    <Dialog
      open={props.isOpen}
      onClose={() => props.setOpen(false)}
      className="relative z-50"
    >     
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto border-2 border-[#0F1421] p-12 rounded-[40px] bg-[#00040E] w-[400px] md:w-[520px]">
          <Dialog.Title>
            <p className='nft-gradient uppercase text-[26px]'>
              forgot password?
            </p>
          </Dialog.Title>
          <div className='mt-12'>
            <p className='ml-5 text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-semibold uppercase tracking-widest'>your email:</p>
            <div className='mt-2 border-2 border-[#0F1421] rounded-[30px] p-4 text-[#C4E2FE] bg-[#080B13]'>
              <input type="text" className='w-full bg-transparent ring-0 outline-0' onChange={(e) => checkEmail(e.target.value)} />
            </div>
          </div>
          {
            isForgotPasswordEmailSent ? (
              <div className=" mt-12 space-x-5 tracking-widest flex flex-row justify-center text-center text-[#7FB5FF] font-semibold font-chakraPetch text-xs bg-[#080B13] py-3 rounded-[20px] w-full uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <p>sent! send again 30sec.</p>
              </div>
            ) : null
          }

          <div className='flex flex-row w-full justify-between mt-4 md:mt-12 space-x-6'>
            <ButtonLayout text="cancel" isCancel={true} active={true} onClick={() => props.setOpen(false)} />
            <ButtonLayout text="send" isCancel={false} active={email ? true : false} onClick={() => sentForgotPasswordEmail()} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
