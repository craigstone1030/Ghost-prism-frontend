import Link from 'next/link'
import BaseContainer from '@/components/BaseContainer'
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import LoginForm from '@/components/LoginForm'
import CreateAccountForm from '@/components/CreateAccountForm'

export default function CreateAccount() {

  return (
    <Layout>
      <BaseContainer>
        <Breadcrumb title="create account" isShare={false} />
        <div className='flex flex-col md:flex-row justify-between mt-8 md:mt-20 space-x-0 md:space-x-52'>
          <div className='flex flex-col ml-2 space-x-4 md:space-y-6 md:space-x-0 justify-center items-center md:items-start md:justify-start'>
            <h1 className='nft-gradient text-[48px] font-orbitron uppercase'>welcome back friend</h1>
            <h1 className='mt-12 text-[#C4E2FE] opacity-80 text-xs uppercase'>Already registered?<br /> To come in!</h1>
            <Link href="/login">
              <div className={`px-16 flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[48px] space-x-3 hover:cursor-pointer mt-6`}>
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
          </div>
          <CreateAccountForm />
        </div>
      </BaseContainer>
    </Layout>
  )
}
