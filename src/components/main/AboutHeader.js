import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useAboutContext } from "../../context/AboutContext";

const AboutHeader = () => {
	const { pages, setPages, currentPage, setCurrentPage } = useAboutContext();

	const handleClose = (p) => {
		const tempPages = [...pages].filter((page) => page !== p);
		setPages(tempPages);
	};

	useEffect(() => {
		setCurrentPage(pages[pages.length - 1]);
	}, [pages]);

	return (
		<div className="h-[40px] border-b border-b-line flex">
			{pages.map((page) => {
				return (
					<div
						key={page}
						className={`${
							currentPage === page
								? 'relative before:content-[""] before:absolute before:w-full before:h-[1px] before:left-0 before:bottom-0 before:bg-accent-200 bg-line'
								: ""
						} w-52 border-r border-r-line h-full flex items-center justify-between px-5 text-secondary-100 cursor-pointer`}
						onClick={() => setCurrentPage(page)}
					>
						<span>{page}</span>
						<FaTimes
							className="hover:text-white"
							onClick={() => handleClose(page)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default AboutHeader;
