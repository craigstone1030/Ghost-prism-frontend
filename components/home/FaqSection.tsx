import BaseContainer from "@/components/BaseContainer";
import FaqItem from "@/components/home/FaqItem";

const FaqSection = () => {

	const FAQ_CONTENTS = [
		{
			title: "Combat Creates Staking?",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			title: "My account is blocked, what should I do?",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			title: "How to contact?",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		}
	];

	return (
		<BaseContainer>
			<div className="flex flex-col items-center justify-center mt-32 md:mt-[400px]">
				<div className="relative">
					<div className="w-fit z-20 rounded-[40px] bg-[#7FB5FF]/[.2] uppercase text-base font-orbitron py-2 px-3">
						<h1 className="nft-gradient">Faq</h1>
					</div>
					{/* <div className="absolute  rounded-[40px] z-10 -left-1 -top-1 btn-outline-gradient h-full w-full"></div> */}
				</div>

				<h1 className="mt-10 font-orbitron text-[40px] text-center uppercase nft-gradient">
					Answers to your<br /> questions
				</h1>

				<div className="w-full flex flex-col justify-center items-center space-y-5 my-20">					
					<div className="w-full px-5 flex flex-col space-y-6">
						{FAQ_CONTENTS.map((faq, index) => {
							return (
								<FaqItem
									key={index}
									title={faq.title}
									description={faq.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</BaseContainer>
	)
}
export default FaqSection;
