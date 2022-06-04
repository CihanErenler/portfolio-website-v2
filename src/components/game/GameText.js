import React from "react";
import Button from "../Button";
import { useGameContext } from "../../context/GameContext";

const GameText = () => {
	const { winner, handleStartAgain } = useGameContext();
	return (
		<div className="absolute w-full text-center h-full flex flex-col justify-center items-center">
			<div className="w-full bg-primary-100/[.8] py-4">
				<h1 className="uppercase text-accent-200 w-full text-3xl font-thin mb-3 ">
					{winner === "X" ? "well done!" : "game over!"}
				</h1>
				<Button action={handleStartAgain}>start-again</Button>
			</div>
		</div>
	);
};

export default GameText;
