import Link from 'next/link'
import { MouseEventHandler, useState } from 'react'
import BaseContainer from '@/components/BaseContainer'
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import LoginForm from '@/components/LoginForm'

export default function Login() {

  return (
    <Layout>
      <BaseContainer>
        <Breadcrumb title="login" isShare={false} />
        <div className='flex flex-col md:flex-row justify-between mt-8 md:mt-20 space-x-0 md:space-x-52'>
          <div className='flex flex-col ml-2 space-x-4 md:space-y-6 md:space-x-0 justify-center items-center md:items-start md:justify-start'>
            <h1 className='nft-gradient text-[48px] font-orbitron uppercase'>welcome back friend</h1>
            <h1 className='mt-12 text-[#C4E2FE] opacity-80 text-xs uppercase'>Not registered yet?<br /> Create account!</h1>
            <Link href="/createAccount">
              <div className={`px-8 flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[48px] space-x-3 hover:cursor-pointer mt-6`}>
                <div className="relative ml-2 w-fit">
                  <div className={`flex items-center justify-center relative z-20 bg-[#2b363c] rounded-full p-2 h-[32px] w-[32px]`}>
                    <div className='nft-gradient'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-[1px] -left-[1px] bg-gradient-to-b from-[#7FB5FF] to-[#000] z-10 rounded-full" style={{ width: "calc(100% + 2px)", height: "calc(100% + 2px)" }}></div>
                </div>
                <h1 className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase text-[#7FB5FF]`}>
                  create account
                </h1>
              </div>
            </Link>
          </div>
          <LoginForm />
        </div>
      </BaseContainer>
    </Layout>
  )
}
