import { useState } from 'react';
import BaseContainer from '@/components/BaseContainer';

const ModelSection = () => {

	const [isPlay, setIsPlay] = useState<boolean>(false);

	return (
		<div className='px-4 mt-[160px]'>
			<div className='relative'>
				<img src="./images/model.png" width="100%" alt="model video" />
				<div className='absolute left-0 bottom-[20px] md:bottom-[80px] w-full px-[30px] md:px-[165px] flex justify-between'>
					<p className='dlc-gradient text-xl md:text-5xl font-orbitron uppercase'>
						Meet<br /> some of<br /> our<br /> models!
					</p>
					<div className='flex justify-center items-center relative'>
						<img src="./images/sunshine.svg" width="100%" alt="modal" className="w-[100px] md:w-full" />
						<button onClick={() => setIsPlay(!isPlay)} className='absolute flex flex-row items-center justify-center w-10 md:w-14 h-10 md:h-14 bg-[#FEE2C552] rounded-full'>
							{
								!isPlay ? (
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-play-fill" viewBox="0 0 16 16">
										<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEE2C5" className="bi bi-pause-fill" viewBox="0 0 16 16">
										<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
									</svg>
								)
							}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ModelSection;
