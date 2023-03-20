import DLCGradientCircle from "@/components/DLCGradientCircle"
import NFTGradientCircle from "@/components/NFTGradientCircle"

export default function EditProfile() {

  const ButtonLayout = (props: { text: string, active: boolean }) => {
    return (
      <div className={`w-full flex items-center justify-center text-3xl font-orbitron text-[#7FB5FF] bg-[#0F1421] rounded-[40px] h-[60px] space-x-3 ${props.active ? "" : "opacity-40"}`}>
        {
          props.active ? (
            <NFTGradientCircle isCircle={true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </NFTGradientCircle>
          ) : null
        }

        <h1 className={`font-chakraPetch font-semibold tracking-widest text-xs uppercase ${props.active ? "text-[#7FB5FF]" : "text-[#FEE2C5]"}`}>
          {props.text}
        </h1>
        {
          props.active ? (
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
    )
  }

  return (
    <div className='w-full mt-8 md:mt-0'>
      <div className='border-2 border-[#0F1421] rounded-[40px] p-12'>
        <h1 className='nft-gradient uppercase text-[26px]'>
          Edit profile
        </h1>
        <div className=''>
          <div className='mt-12'>
            <h1 className='ml-5 text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-semibold uppercase tracking-widest'>name:</h1>
            <div className='mt-2 border-2 border-[#0F1421] rounded-[30px] p-4 text-[#C4E2FE] bg-[#080B13]'>
              <input type="text" className='w-full bg-transparent ring-0 outline-0' />
            </div>
          </div>
          <div className='mt-12'>
            <h1 className='ml-5 text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-semibold uppercase tracking-widest'>user name:</h1>
            <div className='flex flex-row mt-2 border-2 border-[#0F1421] rounded-[30px] p-4 text-[#C4E2FE] bg-[#080B13] space-x-2'>
              <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch'>@</h1>
              <input type="text" className='w-full bg-transparent ring-0 outline-0' />
            </div>
            <div className='mt-12'>
              <div className='flex justify-between mx-5'>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-semibold uppercase tracking-widest'>name:</h1>
                <h1 className='text-[#C4E2FE] opacity-80 font-chakraPetch text-xs font-semibold uppercase tracking-widest'>104&nbsp;/&nbsp;200</h1>
              </div>
              <div className='mt-2 border-2 border-[#0F1421] rounded-[30px] p-4 text-[#C4E2FE] bg-[#080B13]'>
                <textarea id="message" name="message" rows={3} className="form-textarea resize-none bg-transparent outline-0 ring-0 rounded-md shadow-sm w-full"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full justify-between mt-4 md:mt-12 space-x-6'>
        <ButtonLayout text="cancel setting" active={true} />
        <ButtonLayout text="save settings" active={false} />
      </div>
    </div>
  )
}
