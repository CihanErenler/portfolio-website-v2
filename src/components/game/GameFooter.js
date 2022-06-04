import React from "react";
import { useGameContext } from "../../context/GameContext";

const GameFooter = () => {
	const { winner, player } = useGameContext();
	return (
		<div className="bg-primary-200/[.6] p-2 mt-3 rounded-xl">
			<p className="text-secondary-100 ">// tic tac toe</p>
			<p className="text-secondary-100 ">// click one of the cells to start</p>
			<p className="text-white">
				<span className="text-secondary-300">let </span>
				<span className="text-accent-200">
					{winner === "X" || winner === "O"
						? "winner"
						: winner === "draw"
						? "draw"
						: "currentPlayer"}{" "}
				</span>
				=
				<span className={winner === "draw" ? "text-true" : "text-accent-100"}>
					{" "}
					{winner === "draw" ? "true" : `"${player}"`}
				</span>
			</p>
		</div>
	);
};

export default GameFooter;
