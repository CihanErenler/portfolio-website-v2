import React, { useContext, useState } from "react";

const AboutContext = React.createContext();

const AboutProvider = ({ children }) => {
	const [currentPage, setCurrentPage] = useState("about_me");
	const [pages, setPages] = useState(["about_me"]);

	return (
		<AboutContext.Provider
			value={{ currentPage, setCurrentPage, pages, setPages }}
		>
			{children}
		</AboutContext.Provider>
	);
};

const useAboutContext = () => {
	return useContext(AboutContext);
};

export { AboutProvider, useAboutContext };
