import React, { useState } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import File from "./File";

const Folder = ({ title, color, files, byDefault }) => {
	const [isOpen, setIsOpen] = useState(byDefault);
	return (
		<div className="text-secondary-100 ">
			<header
				className="flex items-center hover:bg-line cursor-pointer pl-3 select-none hover:text-white"
				onClick={() => setIsOpen(!isOpen)}
			>
				<IoIosArrowForward
					className={isOpen ? "mr-2 rotate-90 text-lg" : "mr-2 text-lg"}
				/>
				{isOpen ? (
					<FaFolderOpen className={`${color} mr-2 h-7`} />
				) : (
					<FaFolder className={`${color} mr-2 h-7`} />
				)}

				<span className={isOpen ? "text-accent-200" : null}>{title}</span>
			</header>
			{isOpen && (
				<section>
					{files.map((file, index) => {
						return <File key={index} title={file} />;
					})}
				</section>
			)}
		</div>
	);
};

export default Folder;
