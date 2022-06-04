import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import { Sidebar, About } from "../components";

const AboutPage = () => {
	return (
		<motion.section
			className="bg-primary-200 flex-1"
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={transition}
		>
			<section className="h-full flex">
				<Sidebar />
				<About />
			</section>
		</motion.section>
	);
};

export default AboutPage;
