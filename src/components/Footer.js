import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-primary-200 h-12 w-full border-t border-t-line relative z-50 flex justify-between text-secondary-100">
			<div className="flex h-full ">
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
			<div className="px-5 border-l border-l-line flex items-center">
				<a
					className="flex items-center"
					href="https://github.com/CihanErenler?tab=repositories"
					target="_blank"
					rel="noreferrer"
				>
					@cihanerenler
					<BsGithub className="ml-2 text-lg" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
