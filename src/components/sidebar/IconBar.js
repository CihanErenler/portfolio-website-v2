import React from "react";
import { VscSearch, VscGitMerge, VscFiles } from "react-icons/vsc";

const IconBar = () => {
	return (
		<div className="w-[68px] border-r border-r-line h-full">
			<div className='w-full h-[60px] flex items-center justify-center relative before:content-[""] before:absolute before:h-full before:w-[3px] before:left-0 before:bottom-0 before:bg-secondary-100'>
				<VscFiles className="fill-secondary-100 text-3xl" />
			</div>
			<div className="w-full h-[60px] flex items-center justify-center">
				<VscSearch className="fill-secondary-100 text-3xl" />
			</div>
			<div className="w-full h-[60px] flex items-center justify-center">
				<VscGitMerge className="fill-secondary-100 text-3xl" />
			</div>
		</div>
	);
};

export default IconBar;
