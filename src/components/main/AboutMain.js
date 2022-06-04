import React from "react";
import About from "./About";

const AboutMain = () => {
	return (
		<main className="flex-1 grid grid-cols-2">
			<div className="border-r border-r-line">
				<About />
			</div>
			<div></div>
		</main>
	);
};

export default AboutMain;
