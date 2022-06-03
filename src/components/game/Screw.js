import React from "react";

const Screw = ({ position }) => {
	if (position === "top-right")
		return (
			<div className="h-[13px] w-[13px] bg-accent-200/[.2] rounded-full absolute top-2 right-2 shadow-sm flex items-center justify-center text-primary-200/[.6] text-xs">
				x
			</div>
		);

	if (position === "bottom-right")
		return (
			<div className="h-[13px] w-[13px] bg-accent-200/[.2] rounded-full absolute bottom-2 right-2 shadow-sm flex items-center justify-center text-primary-200/[.6] text-xs">
				x
			</div>
		);

	if (position === "bottom-left")
		return (
			<div className="h-[13px] w-[13px] bg-accent-200/[.2] rounded-full absolute bottom-2 left-2 shadow-sm flex items-center justify-center text-primary-200/[.6] text-xs">
				x
			</div>
		);

	return (
		<div className="h-[13px] w-[13px] bg-accent-200/[.2] rounded-full absolute top-2 left-2 shadow-sm flex items-center justify-center text-primary-200/[.6] text-xs">
			x
		</div>
	);
};

export default Screw;
