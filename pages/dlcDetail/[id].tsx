import { useRouter } from 'next/router'

import BaseContainer from '@/components/BaseContainer';
import Layout from '@/components/Layout'
import NFTGradientCircle from '@/components/NFTGradientCircle';
import { recudeAddress } from '@/utils/helpers';
import DLCGradientCircle from '@/components/DLCGradientCircle';
import Breadcrumb from '@/components/Breadcrumb';

export default function NftDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <BaseContainer>
        <Breadcrumb title={typeof id === 'string' ? recudeAddress(id) : ''} isShare={true} />
      
        <div className='flex flex-col md:flex-row space-x-0 md:space-x-[30px] mt-10'>
          <div className='w-1/2 flex md:block justify-center md:justify-start'>
            <img src="/images/nft1.png" className='w-[300px] md:w-full' width="100%" alt="nft" />
          </div>
          <div className='flex flex-col w-full md:w-1/2 mt-10 md:mt-0'>
            <div className='border-2 border-[#0F1421] rounded-[40px] p-12'>
              <div className='flex justify-between'>
                <div className='flex flex-row items-center space-x-2'>
                  <h1 className='text-[#C4E2FE] font-chakraPetch'>@</h1>
                  <h1 className='text-[#C4E2FE] text-xs font-chakraPetch'>Ghost Prisms</h1>
                </div>
                <div className='flex flex-row items-center space-x-6 font-chakraPetch'>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='text-[#C4E2FE] text-xs'>Views</h1>
                    <h1 className='text-[#C4E2FE] text-xs'>:</h1>
                  </div>
                  <div className='text-[#c4e2fe] opacity-[0.2]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-slash" viewBox="0 0 16 16">
                      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='text-[#C4E2FE] text-xs'>1</h1>
                    <h1 className='text-[#C4E2FE] text-xs uppercase'>of</h1>
                    <h1 className='text-[#C4E2FE] text-xs'>1</h1>
                  </div>
                </div>
              </div>
              <div className='mt-10 flex justify-center md:justify-start'>
                <DLCGradientCircle isCircle={false}>
                  <h1 className='font-orbitron dlc-gradient text-sm uppercase'>dlc</h1>
                </DLCGradientCircle>
              </div>
              <h1 className='flex justify-center md:justify-start font-orbitron text-[26px] uppercase dlc-gradient mt-4'>cyberpunk women</h1>
              <div className='flex flex-col bg-[#080B13] rounded-[40px] mt-8 p-6'>
                <h1 className='text-[#C4E2FE] text-xs font-chakraPetch'>Current Price:</h1>
                <div className='flex justify-between mt-2'>
                  <h1 className='text-[#FEE2C5] text-[16px] sm:text-[22px] font-orbitron uppercase'>free</h1>
                  <h1 className='text-[#FEE2C5] text-xs font-orbitron'>(&nbsp;&nbsp;$0,00&nbsp;&nbsp;)</h1>
                </div>
              </div>
              <div className='flex justify-center items-center mt-6 bg-[#0F1421] rounded-[40px] py-3 uppercase space-x-4'>
                <h1 className='font-chakraPetch text-[#FEE2C5] font-semibold uppercase'>download</h1>
                <DLCGradientCircle isCircle={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </DLCGradientCircle>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-4 bg-[#0F1421] rounded-[40px] h-[80px] mt-6'>
              <DLCGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-arrows-move" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                </svg>
              </DLCGradientCircle>
              <h1 className='font-chakraPetch text-xs text-[#FEE2C5] tracking-widest uppercase'>open in ar</h1>
            </div>            
            <div className='flex flex-col p-12 border-2 border-[#0F1421] rounded-[40px] mt-12'>
              <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>description:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <p className='text-xs text-[#C4E2FE] opacity-80 mt-6'>
                Mila Lolli&apos;s &apos;Creature House&apos; is a playable 3D metaverse asset that is derived from 
                the original &apos;Creatures of the Night&apos; collection that she created in 2021. 
                The collection is inspired by the American rock band Kiss, and their playful 
                identities and face paints. Each individual piece within the &apos;Creatures of the Night&apos; 
                collection was audio reactive, and following that collection, the &apos;Creature House&apos; 
                was created. It challenges traditional architecture through its incorporation of 
                characteristics of wild nocturnal animal faces. Mila&apos;s intention behind the &apos;Creature House&apos; 
                is for it to be utilized as an entertainment venue by serving as a celebratory stage 
                for musicians and performers, across the metaverse.
              </p>
            </div>
            <div className='flex flex-col p-12 border-2 border-[#0F1421] rounded-[40px] mt-6'>
              <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>How to use:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div className='flex flex-row items-center mt-6 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <div className='text-[#c4e2fe] opacity-[0.2]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-slash" viewBox="0 0 16 16">
                      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>01</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>The ultimate venue for experiencing music in the metaverse.</h1>
              </div>
              <div className='flex flex-row items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <div className='text-[#c4e2fe] opacity-[0.2]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-slash" viewBox="0 0 16 16">
                      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>02</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>Rent out the space to be used for events by other organizations.</h1>
              </div>
              <div className='flex flex-row items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <div className='text-[#c4e2fe] opacity-[0.2]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-slash" viewBox="0 0 16 16">
                      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>03</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>Use this space as a creative realm for bringing artists together.</h1>
              </div>
              <div className='flex flex-row items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <div className='text-[#c4e2fe] opacity-[0.2]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-slash" viewBox="0 0 16 16">
                      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>04</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs'>Can be used in Unity or Unreal Engine 5 environments.</h1>
              </div>
            </div>
            <div className='flex flex-col p-12 border-2 border-[#0F1421] rounded-[40px] mt-6'>
              <div className='flex flex-row justify-between'>
                <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>Metaverse Compatibility:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div className='flex flex-row mt-7 space-x-6'>
                <img src="/images/hyperfy.svg" width="" alt="" />
                <img src="/images/unity.svg" width="" alt="" />
                <img src="/images/oncyber.svg" width="" alt="" />
                <img src="/images/ravel.svg" width="" alt="" />
                <img src="/images/spatial.svg" width="" alt="" />
              </div>
            </div>
            <div className='flex flex-col p-12 border-2 border-[#0F1421] rounded-[40px] mt-6'>
              <div className='flex flex-row justify-between'>
                <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>File Formats:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div className='flex flex-row justify-between text-[#C4E2FE] font-chakraPetch text-xs mt-6'>
                <h1 className='opacity-40 text-xs uppercase'>GLB&nbsp;:</h1>
                <div className='flex flex-col'>
                  <h1 className='uppercase'>lower fidelity</h1>
                  <h1 className='uppercase'>highest fidelity</h1>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='opacity-20'>/</h1>
                    <h1 className='uppercase'>35.5MB</h1>
                  </div>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='opacity-20'>/</h1>
                    <h1 className='uppercase'>48.2MB</h1>
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-between text-[#C4E2FE] font-chakraPetch text-xs mt-6'>
                <h1 className='opacity-40 text-xs uppercase'>vox&nbsp;&nbsp;/&nbsp;&nbsp;vxr&nbsp;:</h1>
                <div className='flex flex-col'>
                  <h1 className='uppercase'>lower fidelity</h1>                  
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='opacity-20'>/</h1>
                    <h1 className='uppercase'>35.5MB</h1>
                  </div>                  
                </div>
              </div>
              <div className='flex flex-row justify-between text-[#C4E2FE] font-chakraPetch text-xs mt-6'>
                <h1 className='opacity-40 text-xs uppercase'>fbx&nbsp;:</h1>
                <div className='flex flex-col'>
                  <h1 className='uppercase'>lower fidelity</h1>
                  <h1 className='uppercase'>highest fidelity</h1>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='opacity-20'>/</h1>
                    <h1 className='uppercase'>5.5MB</h1>
                  </div>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='opacity-20'>/</h1>
                    <h1 className='uppercase'>48.2MB</h1>
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-between text-[#C4E2FE] font-chakraPetch text-xs mt-6'>
                <h1 className='opacity-40 text-xs uppercase'>usd&nbsp;:</h1>
                <div className='flex flex-col'>
                  <h1 className='uppercase'>lower fidelity</h1>                  
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row space-x-2'>
                    <h1 className='opacity-20'>/</h1>
                    <h1 className='uppercase'>884.5MB</h1>
                  </div>                  
                </div>
              </div>
            </div>
            <div className='flex flex-col p-12 border-2 border-[#0F1421] rounded-[40px] mt-6'>
              <div className='flex flex-row justify-between items-center'>
                <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>details:</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <div className='flex flex-row justify-between items-center mt-6 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Contract address</h1>
                </div>
                {
                  typeof id === 'string' &&
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>{recudeAddress(id)}</h1>
                }

              </div>
              <div className='flex flex-row justify-between items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Token Standard:</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>ERC-721</h1>
              </div>
              <div className='flex flex-row justify-between items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Chain:</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Ethereum</h1>
              </div>
              <div className='flex flex-row justify-between items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Views:</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>61</h1>
              </div>
              <div className='flex flex-row justify-between items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Last Updated:</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>1 day ago</h1>
              </div>
              <div className='flex flex-row justify-between items-center mt-4 space-x-[30px]'>
                <div className='flex flex-row space-x-2'>
                  <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>Create:</h1>
                </div>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs uppercase'>11 dec, 2022</h1>
              </div>
            </div>
          </div>
        </div>       

      </BaseContainer>
    </Layout>
  )
}