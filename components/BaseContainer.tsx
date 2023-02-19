import React from "react";

type LayoutProps = {
	children: React.ReactNode
}

const BaseContainer = ({ children }: LayoutProps) => {
	return (
		<>
			<div className="w-full mx-auto max-w-[1050px]">
				{ children }
			</div>
		</>
	)
}
export default BaseContainer;
