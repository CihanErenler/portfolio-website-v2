import React, { useState } from "react";
import Folder from "./Folder";
import { RiArrowDownSFill, RiMailFill } from "react-icons/ri";

const Folders = ({ title, isFolder, byDefault }) => {
	const [isOpen, setIsOpen] = useState(byDefault);
	return (
		<div className="w-full mb-2">
			<header
				className="text-white font-normal flex items-center justify-start w-full h-10 border-b border-b-line cursor-pointer select-none pl-5"
				onClick={() => setIsOpen(!isOpen)}
			>
				<RiArrowDownSFill
					className={isOpen ? "mr-1 text-2xl" : "mr-1 text-2xl -rotate-90 "}
				/>
				<span className="uppercase text-sm">{title}</span>
			</header>
			{isOpen && isFolder && (
				<section className="pt-3 font-medium text-sm">
					<Folder
						title="bio"
						color="text-accent-300"
						files={["about_me"]}
						byDefault={true}
					/>
					<Folder
						title="education"
						color="text-accent-200"
						files={["university"]}
						byDefault={false}
					/>
					<Folder
						title="skills"
						color="text-accent-100"
						files={["my_skills"]}
						byDefault={false}
					/>
				</section>
			)}
			{isOpen && !isFolder && (
				<section className="flex item-center pl-4 pt-5">
					<RiMailFill className="mr-1 text-secondary-100" />
					<p className="text-xs text-secondary-100">cihanerenler@outlook.com</p>
				</section>
			)}
		</div>
	);
};

export default Folders;
