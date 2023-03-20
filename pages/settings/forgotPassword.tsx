import { MouseEventHandler, useState } from "react"
import { Dialog } from '@headlessui/react'
import DLCGradientCircle from "@/components/DLCGradientCircle"
import NFTGradientCircle from "@/components/NFTGradientCircle"
import Logo from "@/components/home/logo";

export default function ForgotPassword() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const checkEmail = (input: string) => {
    // Regular expression for checking email addresses
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(input)) {
      setEmail(input);
    }
  }

  const PasswordInput = (props: { title: string, type: string }) => {
    const [onEye, setOnEye] = useState<boolean>(false);

    return (
      <>
        <div className='mt-12'>
          <h1 className='ml-5 text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-semibold uppercase tracking-widest'>{props.title}:</h1>
          <div className='flex flex-row items-center mt-2 border-2 border-[#0F1421] rounded-[30px] p-4 text-[#C4E2FE] bg-[#080B13] space-x-2'>
            <input type={onEye ? "text" : "password"} className='w-full bg-transparent ring-0 outline-0' />
            <div className='text-[#C4E2FE] opacity-80 font-chakraPetch hover:cursor-pointer' onClick={() => setOnEye(!onEye)}>
              {
                onEye ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                )
              }
            </div>
          </div>
          {
            props.type === 'new' &&
            <h1 className='ml-5 mt-2 text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-normal uppercase tracking-widest'>*Minimum 8 characters</h1>
          }
        </div>
      </>
    )
  }

  const ButtonLayout = (props: { text: string, active: boolean, onClick: MouseEventHandler }) => {
    return (
      <div className="w-full hover:cursor-pointer" onClick={props.onClick}>
        <div className={`flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[60px] space-x-3 ${props.active ? "" : "opacity-40"}`}>
          <p className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#FEE2C5]`}>
            {props.text}
          </p>

          <DLCGradientCircle isCircle={true}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </DLCGradientCircle>

        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center flex-col mx-auto md:max-w-[640px] mt-8 md:mt-10'>
      <div className='border-2 border-[#0F1421] rounded-[40px] p-12'>
        <h1 className='nft-gradient uppercase text-[26px]'>
          New password
        </h1>
        <div>
          <PasswordInput title="new password" type="new" />
          <PasswordInput title="repeat new password" type="repeat" />
        </div>
        <div className='flex flex-row w-full justify-between mt-4 md:mt-12 space-x-6'>
          <ButtonLayout text="Savings new password" active={true} onClick={() => console.log('clicked')} />
        </div>
      </div>

      <div className="flex mt-5 justify-center">
        <Logo />
      </div>
    </div>
  )
}
