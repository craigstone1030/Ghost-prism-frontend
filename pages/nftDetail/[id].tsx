// import MarketplaceSection from '@/components/home/MarketplaceSection'
import { useRouter } from 'next/router'

import BaseContainer from '@/components/BaseContainer';
import Layout from '@/components/Layout'
import NFTGradientCircle from '@/components/NFTGradientCircle';
import { recudeAddress } from '@/utils/helpers';
import DLCGradientCircle from '@/components/DLCGradientCircle';

export default function NftDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <BaseContainer>
        <div className='w-full flex justify-between mt-24'>
          <div className='flex flex-row items-center space-x-6'>
            <NFTGradientCircle isCircle={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#7FB5FF" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </NFTGradientCircle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-slash-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
            </svg>
            {
              typeof id === 'string' &&
              <h1 className='text-[#7FB5FF] font-chakraPetch text-sm'>{recudeAddress(id)}</h1>
            }
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <h1 className='text-[#7FB5FF] text-xs font-chakraPetch tracking-widest font-semibold uppercase'>share</h1>
            <NFTGradientCircle isCircle={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
              </svg>
            </NFTGradientCircle>
          </div>
        </div>

        <div className='flex flex-col md:flex-row space-x-0 md:space-x-[30px] mt-10'>
          <div className='w-full flex md:block justify-center md:justify-start'>
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
                <NFTGradientCircle isCircle={false}>
                  <h1 className='font-orbitron nft-gradient text-sm uppercase'>avatar&nbsp;(nft)</h1>
                </NFTGradientCircle>
              </div>
              <h1 className='flex justify-center md:justify-start font-orbitron text-[26px] uppercase nft-gradient mt-4'>cyberpunk women</h1>
              <div className='flex flex-col bg-[#080B13] rounded-[40px] mt-8 p-6'>
                <h1 className='text-[#C4E2FE] text-xs font-chakraPetch'>Current Price:</h1>
                <div className='flex justify-between mt-2'>
                  <h1 className='text-[#C4E2FE] text-[16px] sm:text-[22px] font-orbitron'>0,066&nbsp;ETH</h1>
                  <h1 className='text-[#C4E2FE] text-[16px] sm:text-[22px] font-orbitron'>(&nbsp;&nbsp;$12,643,49&nbsp;&nbsp;)</h1>
                </div>
              </div>
              <div className='flex justify-center items-center mt-6 bg-[#0F1421] rounded-[40px] py-3 uppercase space-x-4'>
                <h1 className='font-chakraPetch text-[#FEE2C5]'>Buy now</h1>
                <DLCGradientCircle isCircle={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </DLCGradientCircle>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-4 bg-[#0F1421] rounded-[40px] h-[80px] mt-6'>
              <NFTGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-arrows-move" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                </svg>
              </NFTGradientCircle>
              <h1 className='font-chakraPetch text-xs text-[#7FB5FF] tracking-widest uppercase'>open in ar</h1>
            </div>
            <div className='flex flex-row items-center justify-center space-x-4 bg-[#0F1421] rounded-[40px] h-[80px] mt-6'>
              <DLCGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </DLCGradientCircle>
              <h1 className='font-chakraPetch text-xs text-[#7FB5FF] tracking-widest uppercase'>view Additional content (DLC):</h1>
            </div>
            <div className='flex flex-row justify-between items-center p-12 border-2 border-[#0F1421] rounded-[40px] mt-12'>
              <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>description:</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
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
            <div className='flex flex-row justify-between items-center p-12 border-2 border-[#0F1421] rounded-[40px] mt-6'>
              <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>Metaverse Compatibility:</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <div className='flex flex-row justify-between items-center p-12 border-2 border-[#0F1421] rounded-[40px] mt-6'>
              <h1 className='text-xs font-chakraPetch text-[#C4E2FE] tracking-widest uppercase'>File Formats:</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C4E2FE" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
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

        <div className='flex flex-col md:flex-row bg-[#080B13] rounded-[160px] p-12 mt-10 md:mt-[160px] space-x-0 md:space-x-12'>
          <div className='flex justify-center md:justify-start'>
            <img src="/images/nft1.png" className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:max-w-[400px]' width="100%" alt="nft" />
          </div>
          <div className='flex flex-col justify-center items-center md:justify-start mt-20 md:mt-0'>
            <NFTGradientCircle isCircle={false}>
              <h1 className='font-orbitron nft-gradient text-sm uppercase'>Creators</h1>
            </NFTGradientCircle>
            <h1 className='nft-gradient text-[40px] mt-2'>Ghost Prisms</h1>
            <p className='text-xs font-chakraPetch text-[#C4E2FE] mt-10'>
              Italian artist focused on experimental cinema, digital animation, 3D art, new media, installation, and performance art.
            </p>
            <div className='flex flex-row items-center w-fit px-12 justify-center space-x-4 bg-[#0F1421] rounded-[40px] h-[64px] mt-10'>
              <h1 className='font-chakraPetch text-xs text-[#7FB5FF] tracking-widest uppercase'>view profile</h1>
              <NFTGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </NFTGradientCircle>
            </div>
          </div>
        </div>

      </BaseContainer>
    </Layout>
  )
}