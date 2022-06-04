import React from "react";
import IconBar from "./IconBar";
import FileSystem from "./FileSystem";

const Sidebar = () => {
	return (
		<div className="h-full w-[310px] border-r border-r-line flex">
			<IconBar />
			<FileSystem />
		</div>
	);
};

export default Sidebar;
