import React from "react";
import AboutHeader from "./AboutHeader";
import Code from "./Code";
import { useAboutContext } from "../../context/AboutContext";

const text = [
	"/**",
	"* About me",
	"* I am ambitious young person who has interested in",
	"* fron-end development besides have strong work ethic",
	"* and professional attitude towards work. I am very sociable",
	"* person who has wide range of friends all over the world.",
	"* in additionally, as a personal level I would love to call",
	"* myself enthusiastic, openminded and talented to",
	"* solve any problem given. During summer, I have gained",
	"* tremendeous amount of valuable skills about front-end",
	"* development while was working as a front-end developer",
	"* trainee, and right now I am doing my second internship",
	"* at Nokia to go beyond my limits.",
	"**/",
];

const About = () => {
	const { currentPage } = useAboutContext();
	return (
		<div>
			<AboutHeader title={currentPage} />
			<div className="p-8 text-secondary-100 text-sm">
				{text.map((t, index) => {
					return (
						<div key={index}>
							<p className="flex">
								<span className="mr-4 block text-right w-4">{index + 1}</span>
								{t}
							</p>
						</div>
					);
				})}
				<Code />
			</div>
		</div>
	);
};

export default About;
