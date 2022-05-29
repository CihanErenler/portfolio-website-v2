import React from "react";

const Container = ({ children, full }) => {
	if (full) {
		return (
			<div className="container mx-auto max-w-[1260px] h-full px-8">
				{children}
			</div>
		);
	}
	return (
		<div className="container mx-auto max-w-[1260px] px-8">{children}</div>
	);
};

export default Container;
