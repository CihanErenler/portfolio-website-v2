import React, { useEffect } from "react";
import Screw from "./Screw";
import GameFooter from "./GameFooter";
import GameContent from "./GameContent";
import { useGameContext } from "../../context/GameContext";

const Game = () => {
	const { cells, player, winner, handleClick } = useGameContext();

	const randomIndex = () => {
		const emptyIndex = cells.map((cell, index) => {
			if (cells[index] === "") {
				return index;
			}
			return cell;
		});
		const emptyCells = emptyIndex.filter((item) => !isNaN(item));
		const mark = Math.floor(Math.random() * emptyCells.length);
		return emptyCells[mark];
	};

	const playOpponent = () => {
		const check = cells.filter((cell) => cell === "");
		if (check.length === 9 || player === "X") return;

		const opponentComs = {
			top: [
				[0, 3],
				[1, 4],
				[2, 5],
			],
			bottom: [
				[3, 6],
				[4, 7],
				[5, 8],
			],
			left: [
				[0, 1],
				[3, 4],
				[6, 7],
			],
			right: [
				[1, 2],
				[4, 5],
				[7, 8],
			],
			topleft: [[0, 4]],
			topright: [[2, 4]],
			bottomleft: [[6, 4]],
			bottomright: [[8, 4]],
		};

		setTimeout(() => {
			let mark = null;
			for (let cols in opponentComs) {
				// eslint-disable-next-line no-loop-func
				opponentComs[cols].forEach((col) => {
					if (cells[col[0]] === "X" && cells[col[1]] === "X") {
						if (cols === "top" && cells[col[0] + 6] === "") {
							mark = col[0] + 6;
							return;
						}
						if (cols === "right" && cells[col[0] - 1] === "") {
							mark = col[0] - 1;
							return;
						}
						if (cols === "left" && cells[col[0] + 2] === "") {
							mark = col[0] + 2;
							return;
						}
						if (cols === "bottom" && cells[col[0] - 3] === "") {
							mark = col[0] - 3;
							return;
						}
						if (cols === "topleft" && cells[col[0] + 8] === "") {
							mark = col[0] + 8;
							return;
						}
						if (cols === "topright" && cells[col[0] + 4] === "") {
							mark = col[0] + 4;
							return;
						}
						if (cols === "bottomleft" && cells[col[0] - 4] === "") {
							mark = col[0] - 4;
							return;
						}
						if (cols === "bottomright" && cells[col[0] - 8] === "") {
							mark = col[0] - 8;
							return;
						}
					}
				});
			}

			if (mark === null) {
				mark = randomIndex();
			}

			handleClick(mark);
		}, 1000);
	};

	useEffect(() => {
		if (player === "O" && !winner) {
			playOpponent();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cells]);

	return (
		<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[450px] h-[450px] bg-accent-200/[.12] rounded-xl backdrop-blur-xl shadow-2xl p-5 px-7">
			<Screw />
			<Screw position="top-right" />
			<Screw position="bottom-right" />
			<Screw position="bottom-left" />
			<GameContent />
			<GameFooter />
		</section>
	);
};

export default Game;
