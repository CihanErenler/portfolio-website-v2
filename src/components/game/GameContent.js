import React from "react";
import GameGrid from "./GameGrid";
import GameText from "./GameText";

const GameContent = ({ winner, cells, handleStartAgain, handleClick }) => {
	return (
		<section className="bg-primary-200 h-[300px] w-full mt-3 rounded-xl flex items-center justify-center overflow-hidden relative p-10">
			{winner && (
				<GameText winner={winner} handleStartAgain={handleStartAgain} />
			)}
			<GameGrid cells={cells} handleClick={handleClick} />
		</section>
	);
};

export default GameContent;
