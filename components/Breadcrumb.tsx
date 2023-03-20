import NFTGradientCircle from '@/components/NFTGradientCircle';

const Breadcrumb = (props: { title: string, isShare?: boolean }) => {

	return (
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
				<h1 className='text-[#7FB5FF] font-chakraPetch text-sm uppercase'>{props.title}</h1>
			</div>
			{
				props.isShare ? (
					<div className='flex flex-row items-center space-x-4'>
						<h1 className='text-[#7FB5FF] text-xs font-chakraPetch tracking-widest font-semibold uppercase'>share</h1>
						<NFTGradientCircle isCircle={true}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#7FB5FF" className="bi bi-box-arrow-up" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
								<path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
							</svg>
						</NFTGradientCircle>
					</div>
				) : null
			}

		</div>
	)
}
export default Breadcrumb;
