import React from "react";
import { FaReact } from "react-icons/fa";
import { useAboutContext } from "../../context/AboutContext";

const File = ({ title }) => {
	const { setCurrentPage, pages, setPages } = useAboutContext();

	const handleClick = () => {
		if (!pages.includes(title)) {
			const tempPages = [...pages, title];
			setPages(tempPages);
		}
		setCurrentPage(title);
	};
	return (
		<div
			className="pl-5 select-none flex items-center hover:bg-line cursor-pointer"
			onClick={handleClick}
		>
			<div className=" border-l border-l-secondary-100 pl-5 h-6 flex items-center">
				<FaReact className="text-react mr-1" />
			</div>
			<span className="tracking-tighter">{title}.jsx</span>
		</div>
	);
};

export default File;
