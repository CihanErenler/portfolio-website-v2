import React from "react";

const Code = () => {
	return (
		<div>
			<span className="mr-2 text-right w-4 ">15</span>{" "}
			<span className="text-accent-400">const </span>
			<span className="text-accent-200">developer</span>
			<span className="text-white"> = </span>
			<span>&#123;</span> <br />
			<span className="mr-2 text-right w-4 ">16</span>
			<span className=" inline-block pr-1 pl-7 text-white"> name: </span>
			<span className="text-accent-100">"Cihan"</span> <br />
			<span className="mr-2 text-right w-4 ">17</span>
			<span className=" inline-block pr-1 pl-7 text-white"> lastname: </span>
			<span className="text-accent-100">"Erenler"</span> <br />
			<span className="mr-2 text-right w-4 ">18</span>
			<span className=" inline-block pr-1 pl-7 text-white"> age: </span>
			<span className="text-accent-100">
				"{new Date().getFullYear() - 1994}"
			</span>{" "}
			<br />
			<span className="mr-2 text-right w-4 ">19</span>
			<span className=" inline-block pr-1 pl-7 text-white"> email: </span>
			<span className="text-accent-100">"cihanerenler@outlook.com"</span> <br />
			<span className="mr-2 text-right w-4 ">20</span>
			<span className=" inline-block pr-1 pl-7 text-white"> profession: </span>
			<span className="text-accent-100">"Jr front-end developer"</span> <br />
			<span className="mr-2 text-right w-4 ">21</span>
			<span className=" inline-block pr-1 pl-7 text-white">
				{" "}
				currently_working:{" "}
			</span>
			<span className="text-accent-300">true</span> <br />
			<span className="mr-2 text-right w-4 ">22</span>
			<span className=" inline-block pr-1 pl-7 text-white"> work_place: </span>
			<span className="text-accent-100">"Nokia"</span> <br />
			<span className="mr-2 text-right w-4 ">23</span>
			<span className=" inline-block pr-1 pl-7 text-white"> position: </span>
			<span className="text-accent-100">"Software developer trainee"</span>{" "}
			<br />
			<span className="mr-2 text-right w-4 ">24</span>
			<span className="ml-2">&#125;</span>
		</div>
	);
};

export default Code;
