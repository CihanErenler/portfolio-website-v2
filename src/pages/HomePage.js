import React from "react";
import { Container } from "../components";
import blur from "../assets/blur.png";
import Game from "../components/Game";
import { motion } from "framer-motion";
import { variants, transition } from "../App";

const HomePage = () => {
	return (
		<motion.section
			className="bg-primary-200 flex-1 relative overflow-hidden"
			variants={variants}
			initial="hidden"
			animate="enter"
			exit="exit"
			transition={transition}
		>
			<Container full={true}>
				<div className="opacity-80 absolute overflow-hidden right-16 -top-32">
					<img
						className=" h-full w-full object-cover scale-75"
						src={blur}
						alt="blur"
					/>
				</div>
				<div className="h-full flex relative">
					<div className="flex flex-col items-start justify-center flex-1">
						<p className="text-pale mb-4 font-normal text-lg">Hi all. I am</p>
						<h1 className="text-6xl text-pale mb-4 font-normal">
							Cihan Erenler
						</h1>
						<h3 className="text-secondary-300 text-3xl font-normal">
							&gt; Front-end developer
						</h3>
						<div className="mt-16 text-secondary-100 text-base font-light">
							<p className="mb-2">// complete the game to continue</p>
							<p className="mb-2">// you can also see it on my Github page</p>
							<p className="text-white">
								<span className="text-secondary-300">const</span>{" "}
								<span className="text-accent-200">githubLink</span> ={" "}
								<a
									className="text-accent-100 hover:underline"
									href="https://github.com/CihanErenler?tab=repositories"
								>
									"https://github.com/CihanErenler"
								</a>
							</p>
						</div>
					</div>
					<div className="flex-1 relative">
						<Game />
					</div>
				</div>
			</Container>
		</motion.section>
	);
};

export default HomePage;
