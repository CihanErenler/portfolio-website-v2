import React from "react";
import GameGrid from "./GameGrid";
import GameText from "./GameText";
import { useGameContext } from "../../context/GameContext";

const GameContent = () => {
	const { winner } = useGameContext();
	return (
		<section className="bg-primary-200 h-[300px] w-full mt-3 rounded-xl flex items-center justify-center overflow-hidden relative p-10">
			{winner && <GameText />}
			<GameGrid />
		</section>
	);
};

export default GameContent;
