import Link from 'next/link';
import { useState } from 'react';

import Layout from '@/components/Layout'
import BaseContainer from '@/components/BaseContainer';
import Breadcrumb from '@/components/Breadcrumb';
import NFTGradientCircle from '@/components/NFTGradientCircle';
import DLCGradientCircle from '@/components/DLCGradientCircle';
import Slash from '@/components/Slash';
import AssetCard from '@/components/AssetCard';
import NFTCard from '@/components/home/NFTCard';
import FaqSection from '@/components/home/FaqSection';

const ASSET_TYPE = ["all assets", "Ghost celestial elements", "Earthly Components", "Wraith celestial elements"]

export default function Collection() {
  
  const ButtonLayout = (props: { text: string, link: string, active: boolean }) => {
    return (
      <Link href={props.link}>
        <div className="flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] w-[180px] md:w-[240px] h-[60px] space-x-3">
          {
            props.active ? (
              <NFTGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </NFTGradientCircle>
            ) : null
          }

          <h1 className={`font-chakraPetch text-xs uppercase ${props.active ? "text-[#7FB5FF]" : "text-[#FEE2C5]"}`}>
            {props.text}
          </h1>
          {
            props.active ? (
              null
            ) : (
              <DLCGradientCircle isCircle={true}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </DLCGradientCircle>
            )
          }
        </div>
      </Link>
    )
  }

  const CREATORS = [
    {
      name: "clegfx"
    },
    {
      name: "Ghost Prisms"
    },
    {
      name: "Ravel"
    },
    {
      name: "Jaiden"
    },
    {
      name: "Loopify"
    },
    {
      name: "Loopify"
    },
    {
      name: "Zoowist"
    },
    {
      name: "Williams"
    },
    {
      name: "Jonatan"
    }
  ]

  const NFTs = [
    {
      id: "0x123sdkf34kj4kj4kjk2jk34jkqjb",
      image: 'nft1.png',
      nft: true
    },
    {
      id: "0x83j4j453jkhj4jtkwerlwkelrekrl",
      image: 'nft2.png',
      nft: true
    },
    {
      id: "0xdfeklefjkdfiueifdkifklllelee",
      image: 'nft3.png',
      nft: false
    },
    {
      id: "0x2k3jkjakdjkewjdkasjdkdjfkjdfk",
      image: 'nft4.png',
      nft: false
    },
    {
      id: "0x23k4jkjsifjksdjfiusdofjldkfls",
      image: 'nft5.png',
      nft: true
    },
    {
      id: "0x2k34jkjdsfijsidfjksdjfksdjfksdjf",
      image: 'nft6.png',
      nft: true
    }
  ]

  const MYNFTs = [
    {
      id: "0x123sdkf34kj4kj4kjk2jk34jkqjb",
      image: 'nft1.png',
      nft: true
    },
    {
      id: "0x83j4j453jkhj4jtkwerlwkelrekrl",
      image: 'nft2.png',
      nft: true
    },
    {
      id: "0xdfeklefjkdfiueifdkifklllelee",
      image: 'nft3.png',
      nft: false
    },
    {
      id: "0x2k3jkjakdjkewjdkasjdkdjfkjdfk",
      image: 'nft4.png',
      nft: false
    }
  ]

  const [isAsset, setIsAsset] = useState<boolean>(true);

  return (
    <Layout>
      <BaseContainer>
        <Breadcrumb title="profile" isShare={true} />
      </BaseContainer>
      <div className='relative mt-6'>
        <img src="/images/collection_bg.png" className="w-full h-[250px]" alt="collection background" />
        <div className='absolute right-[11%] bottom-6 bg-[#0F1421] rounded-full p-5 w-fit self-end'>
          <img src="/images/camera.svg" width="" alt="camera svg" />
        </div>
      </div>
      <BaseContainer>
        <div className='-mt-24 ml-4 md:ml-0 flex flex-col md:flex-row justify-between'>
          <div className='relative w-fit'>
            <img src="/images/ghost_collection.png" className='w-[200px]' alt="collection NFT image" />
            <div className='absolute right-6 bottom-6 bg-[#0F1421] rounded-full p-5 w-fit self-end'>
              <img src="/images/camera.svg" width="" alt="camera svg" />
            </div>
          </div>
          <div className='z-20 flex flex-col justify-end mt-12'>
            <div className='flex flex-row justify-center md:justify-end space-x-6 mt-4 md:mt-6'>
              <ButtonLayout text="profile" link="profile" active={true} />
              <ButtonLayout text="create avatart(NFT)" link="createAvatar" active={false} />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='flex flex-row items-center justify-center md:justify-start space-x-6 font-chakraPetch'>
            <div className='flex flex-row items-center space-x-2'>
              <h1 className='text-[#C4E2FE] font-chakraPetch'>@</h1>
              <h1 className='text-[#C4E2FE] text-xs font-chakraPetch'>Ghost Prisms</h1>
            </div>
            <Slash />
            <div className='flex flex-row space-x-2'>
              <h1 className='text-[#C4E2FE] text-xs font-chakraPetch'>N.&nbsp;2065</h1>
            </div>
          </div>
        </div>
        <div className='mt-[31px] text-center md:text-left'>
          <h1 className='text-[48px] font-orbitron nft-gradient'>Ghost Prisms</h1>
        </div>
        <div className='mt-6 max-w-[640px] font-chakraPetch text-sm text-[#C4E2FE] tracking-wider  text-center md:text-left'>
          Italian artist focused on experimental cinema, digital animation, 3D art, new media, installation, and performance art.
        </div>
        <div className='flex flex-row mt-12 space-x-0 md:space-x-6 text-xs text-[#C4E2FE] font-chakraPetch uppercase tracking-widest'>
          <div className='flex flex-row space-x-1'>
            <h1 className='opacity-80'>level:</h1>
            <h1 className='opacity-100 font-semibold'>01</h1>
          </div>
          <Slash />
          <div className='flex flex-row space-x-1'>
            <h1 className='opacity-80'>Awakeing Date:</h1>
            <h1 className='opacity-100 font-semibold'>Aug 2022</h1>
          </div>
          <Slash />
          <div className='flex flex-row space-x-1'>
            <h1 className='opacity-80'>xp:</h1>
            <h1 className='opacity-100 font-semibold'>0000001</h1>
          </div>
          <Slash />
          <div className='flex flex-row space-x-1'>
            <h1 className='opacity-80'>Badges:</h1>
            <h1 className='opacity-100 font-semibold'>0</h1>
          </div>
        </div>

        <div className='flex flex-row m-auto w-fit rounded-[80px] border-2 border-[#0F1421] text-[#7FB5FF] p-2 mt-10 md:mt-[168px] space-x-2'>
          <button onClick={() => setIsAsset(true)} className={`${isAsset ? "bg-[#7FB5FF]/[.2]" : ""} hover:bg-[#7FB5FF]/[.2] rounded-[80px] w-[150px] md:w-[400px] py-5 text-center uppercase`}>
            my assets 3
          </button>
          <button onClick={() => setIsAsset(false)} className={`${isAsset ? "" : "bg-[#7FB5FF]/[.2]"} hover:bg-[#7FB5FF]/[.2] rounded-[80px] w-[150px] md:w-[400px] py-5 text-center uppercase`}>my avatars 4
          </button>
        </div>
        {
          isAsset ?
            (
              <>
                <div className='assets mt-20 text-center'>
                  <h1 className='nft-gradient text-[48px] uppercase'>3&nbsp;&nbsp; my Assets</h1>
                </div>
                <div className='flex flex-col md:flex-row mt-20 space-x-0 md:space-x-10'>
                  <div className='flex flex-col max-w-none md:max-w-[278px] px-2 md:px-0'>
                    <div className='w-full text-center md:text-left'>
                      <h1 className='nft-gradient text-base font-orbitron uppercase'>Level Assets:</h1>
                      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
                      <div className='mt-8 flex flex-wrap gap-4 justify-center md:justify-start'>
                        {
                          Array(5).fill(0).map((item, index) => (
                            <div key={index} className={`flex w-fit items-center justify-center text-3xl font-orbitron text-[#C4E2FE] ${index !== 0 ? "" : "bg-[#7FB5FF]/[.2]"} font-semibold border-2 border-[#0F1421] rounded-[40px] h-[48px] space-x-3 px-5 py-2"`}>
                              <h1 className={`font-chakraPetch text-xs uppercase whitespace-nowrap ${index === 0 ? "text-[#7FB5FF]" : "text-[#C4E2FE]"}`}>
                                &nbsp;&nbsp; {index === 0 ? "ALL" : `${index + 1} LVL`}
                              </h1>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className='w-full mt-20 text-center md:text-left'>
                      <h1 className='nft-gradient text-base font-orbitron uppercase'>Asset type:</h1>
                      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
                      <div className='mt-8 flex flex-wrap gap-4 justify-center md:justify-start'>
                        {
                          ASSET_TYPE.map((item, index) => (
                            <div key={index} className={`flex w-fit items-center justify-center text-3xl font-orbitron text-[#C4E2FE] ${index !== 0 ? "" : "bg-[#7FB5FF]/[.2]"} font-semibold border-2 border-[#0F1421] rounded-[40px] h-[48px] space-x-3 px-5 py-2"`}>
                              <h1 className={`font-chakraPetch text-xs uppercase whitespace-nowrap tracking-widest ${index === 0 ? "text-[#7FB5FF]" : "text-[#C4E2FE]"}`}>
                                {item}
                              </h1>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='w-full mt-12 md:mt-0'>
                    <div className='flex flex-wrap gap-[20px] justify-center md:justify-start'>
                      {
                        Array(3).fill(0).map((item, index) => (
                          <AssetCard key={index} index={index} id={item.id} image="asset.png" />
                        ))
                      }
                    </div>
                    <div className='flex flex-row items-center w-full px-12 justify-center space-x-4 border-2 border-[#0F1421] border-dashed rounded-[40px] h-[64px] mt-[30px]'>
                      <h1 className='font-chakraPetch text-xs text-[#FEE2C5] tracking-widest uppercase'>New game crafting</h1>
                      <DLCGradientCircle isCircle={true}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                      </DLCGradientCircle>
                    </div>
                  </div>
                </div>
                <div className='avatars mt-20 text-center'>
                  <h1 className='nft-gradient text-[48px] uppercase'>{NFTs.length}&nbsp;&nbsp; Purchased avatars</h1>
                </div>
                <div className='flex flex-col md:flex-row mt-20 space-x-0 md:space-x-10 justify-center md:justify-start items-center md:items-start'>
                  <div className='flex flex-col md:max-w-[278px] max-w-none px-4 md:px-0'>
                    <div className='w-full text-center md:text-left'>
                      <h1 className='nft-gradient text-base font-orbitron uppercase'>creators:</h1>
                      <div className='bg-[#0F1421] h-[2px] mt-4'></div>
                      <div className='mt-8 flex flex-wrap gap-4 justify-center md:justify-start'>
                        <div className={`flex w-fit items-center justify-center text-3xl font-orbitron text-[#C4E2FE] font-semibold border-2 border-[#0F1421] rounded-[40px] h-[48px] space-x-3 px-5 py-2"`}>
                          <h1 className={`font-chakraPetch text-xs uppercase whitespace-nowrap`}>
                            ALL
                          </h1>
                        </div>
                        {
                          CREATORS.map((item, index) => (
                            <div key={index} className={`flex w-fit items-center justify-center text-3xl font-orbitron text-[#C4E2FE] ${index !== 1 ? "" : "bg-[#7FB5FF]/[.2]"} font-semibold border-2 border-[#0F1421] rounded-[40px] h-[48px] space-x-3 px-5 py-2"`}>
                              <h1 className={`font-chakraPetch text-xs uppercase whitespace-nowrap ${index === 1 ? "text-[#7FB5FF]" : "text-[#C4E2FE]"}`}>
                                {item.name}
                              </h1>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex flex-wrap gap-[20px] justify-center md:justify-start mt-12 md:mt-0'>
                      {
                        NFTs.map((item, index) => (
                          <NFTCard key={index} index={index} id={item.id} nft={item.nft} image={item.image} avartar={true} />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='avatars mt-20 text-center'>
                  <h1 className='nft-gradient text-[48px] uppercase'>{NFTs.length}&nbsp;&nbsp; My avatars</h1>
                </div>
                <div className='flex mt-20'>
                  <div className='w-full'>
                    <div className='flex flex-wrap gap-[20px]'>
                      {
                        MYNFTs.map((item, index) => (
                          <NFTCard key={index} index={index} id={item.id} nft={item.nft} image={item.image} avartar={true} />
                        ))
                      }
                      <div className='flex flex-col justify-center items-center w-[331px] border-2 border-dashed rounded-[40px] border-[#0F1421]'>
                        <NFTGradientCircle isCircle={true}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                          </svg>
                        </NFTGradientCircle>
                        <h1 className='mt-4 font-chakraPetch text-[#7FB5FF] text-xs uppercase'>Create new Avatar (nft)</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
        }
        <FaqSection />
      </BaseContainer>
    </Layout>
  )
}
