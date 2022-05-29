import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";

const ContactPage = () => {
	return (
		<motion.section
			className="bg-primary-200 flex-1"
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={transition}
		>
			ContactPage
		</motion.section>
	);
};

export default ContactPage;
