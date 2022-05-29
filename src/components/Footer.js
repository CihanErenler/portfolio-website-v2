import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-primary-200 h-12 w-full border-t border-t-line relative z-50">
			<div className="flex h-full text-secondary-100">
				<div className="w-36 border-r border-r-line flex items-center justify-center">
					find me in:
				</div>
				<div className="px-5 border-r border-r-line flex items-center">
					<ImLinkedin />
				</div>
				<div className="px-5 border-r border-r-line flex items-center">
					<FaFacebookF />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
