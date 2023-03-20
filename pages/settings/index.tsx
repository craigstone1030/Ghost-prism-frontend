import { MouseEventHandler, useState } from 'react'
import BaseContainer from '@/components/BaseContainer'
import Layout from '@/components/Layout'
import Breadcrumb from '@/components/Breadcrumb'
import EditProfile from '@/components/settings/EditProfile'
import SetPassword from '@/components/settings/SetPassword'
import ConnectWallet from '@/components/settings/ConnectWallet'

export default function Index() {

  const [activeSection, setActiveSection] = useState<string>('profile');

  const ArrowText = (props: { text: string, onClick: MouseEventHandler<HTMLDivElement>, active: boolean }) => {
    return (
      <div className="flex items-center space-x-1 hover:cursor-pointer" onClick={props.onClick}>
        <h1 className={`font-chakraPetch text-xs uppercase ${props.active? "text-[#7FB5FF]" : "text-[#C4E2FE]"} whitespace-nowrap`}>
          {props.text}
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill={props.active? "#7FB5FF" : "#C4E2FE"} className="bi bi-arrow-up-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
        </svg>
      </div>
    )
  }

  return (
    <Layout>
      <BaseContainer>
        <Breadcrumb title="setting" isShare={false} />
        <div className='flex flex-col md:flex-row justify-between mt-8 md:mt-20 space-x-0 md:space-x-52'>
          <div className='flex flex-row md:flex-col ml-2 space-x-4 md:space-y-6 md:space-x-0 justify-center items-center md:items-start md:justify-start'>
            <ArrowText text="edit profile" onClick={() => setActiveSection('profile')} active={activeSection === 'profile' ? true : false} />
            <ArrowText text="password" onClick={() => setActiveSection('password')} active={activeSection === 'password' ? true : false} />
            <ArrowText text="connect wallet" onClick={() => setActiveSection('wallet')} active={activeSection === 'wallet' ? true : false} />
          </div>
          { activeSection === 'profile' && <EditProfile />}
          { activeSection ==='password' && <SetPassword />}
          { activeSection ==='wallet' && <ConnectWallet />}          
        </div>
      </BaseContainer>
    </Layout>
  )
}
