import React, { useState, useEffect } from "react";
import Screw from "./Screw";

const Game = () => {
	const [cells, setCells] = useState(Array(9).fill(""));
	const [player, setPlayer] = useState("X");
	const [isGameOver, setIsGameOver] = useState({ isOver: false, winner: null });

	const combinations = {
		row: [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
		],
		cols: [
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
		],
		cross: [
			[0, 4, 8],
			[2, 4, 6],
		],
	};

	const handleClick = (num) => {
		if (cells[num] !== "") return;
		// if (player !== "x") return;
		changePlayer();
		setCells((current) => {
			const newCells = [...current];
			newCells[num] = player;
			return newCells;
		});
	};

	const changePlayer = () => {
		if (player === "X") {
			setPlayer("O");
		} else {
			setPlayer("X");
		}
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
			const emptyIndex = cells.map((cell, index) => {
				if (cells[index] === "") {
					return index;
				}
				return cell;
			});

			for (let cols in opponentComs) {
				let mark = null;
				opponentComs[cols].forEach((col) => {
					if (cells[col[0]] === "X" && cells[col[1]] === "X") {
						console.log("girdi");
						if (cols === "top" && cells[col[0] + 6] === "") mark = col[0] + 6;
						if (cols === "right" && cells[col[0] - 1] === "") mark = col[0] - 1;
						if (cols === "bottom" && cells[col[0] - 3] === "")
							mark = col[0] - 3;
						if (cols === "topleft" && cells[col[0] + 8] === "")
							mark = col[0] + 8;
						if (cols === "topright" && cells[col[0] + 4] === "")
							mark = col[0] + 4;
						if (cols === "bottomleft" && cells[col[0] - 4] === "")
							mark = col[0] - 4;
						if (cols === "bottomright" && cells[col[0] - 8] === "")
							mark = col[0] - 8;
					} else if (player === "O") {
						const emptyCells = emptyIndex.filter((item) => !isNaN(item));
						const randomNum = Math.floor(Math.random() * emptyCells.length);
						setCells((current) => {
							const newCells = [...current];
							newCells[emptyCells[randomNum]] = player;
							return newCells;
						});
						changePlayer();
						return;
					}
					setCells((current) => {
						const newCells = [...current];
						newCells[mark] = "O";
						return newCells;
					});
					changePlayer();
					return;
				});
			}

			if (player === "X") {
				setPlayer("O");
			} else {
				setPlayer("X");
			}
		}, 1000);
	};

	const gameOver = (p) => {
		console.log("Game Over", player);
		setIsGameOver({ isGameOver: true, winner: p });
	};

	const checkWinner = () => {
		for (let cols in combinations) {
			combinations[cols].forEach((col) => {
				if (
					cells[col[0]] === "" &&
					cells[col[1]] === "" &&
					cells[col[2]] === ""
				) {
					return;
				}
				if (
					cells[col[0]] === cells[col[1]] &&
					cells[col[1]] === cells[col[2]]
				) {
					gameOver(player);
				}
			});
		}
	};

	useEffect(() => {
		checkWinner();
		playOpponent();
	}, [cells]);

	return (
		<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[400px] h-[440px] bg-accent-200/[.12] rounded-xl backdrop-blur-xl shadow-2xl p-5">
			<Screw />
			<Screw position="top-right" />
			<Screw position="bottom-right" />
			<Screw position="bottom-left" />
			<section className="bg-primary-200 h-[300px] w-full mt-3 rounded-xl flex items-center justify-center overflow-hidden relative p-10">
				<div className="w-full h-full flex flex-col justify-center items-center text-white">
					<section className="flex">
						<div
							className="border-b border-r border-b-secondary-200 border-r-secondary-200 game-cell"
							onClick={() => handleClick(0)}
						>
							{cells[0]}
						</div>
						<div
							className="border-b border-r border-b-secondary-200 border-r-secondary-200 game-cell"
							onClick={() => handleClick(1)}
						>
							{cells[1]}
						</div>
						<div
							className="border-b border-b-secondary-200 game-cell"
							onClick={() => handleClick(2)}
						>
							{cells[2]}
						</div>
					</section>
					<section className="flex">
						<div
							className="border-b border-r border-b-secondary-200 border-r-secondary-200 game-cell"
							onClick={() => handleClick(3)}
						>
							{cells[3]}
						</div>
						<div
							className="border-b border-r border-b-secondary-200 border-r-secondary-200 game-cell"
							onClick={() => handleClick(4)}
						>
							{cells[4]}
						</div>
						<div
							className="border-b border-b-secondary-200 game-cell"
							onClick={() => handleClick(5)}
						>
							{cells[5]}
						</div>
					</section>
					<section className="flex">
						<div
							className="border-r border-r-secondary-200 game-cell"
							onClick={() => handleClick(6)}
						>
							{cells[6]}
						</div>
						<div
							className="border-r border-r-secondary-200 game-cell"
							onClick={() => handleClick(7)}
						>
							{cells[7]}
						</div>
						<div className="game-cell" onClick={() => handleClick(8)}>
							{cells[8]}
						</div>
					</section>
				</div>
			</section>
			<div className="bg-primary-200/[.6] p-2 mt-3 rounded-xl">
				<p className="text-secondary-100 ">// Use mouse to click cells</p>
				<p className="text-secondary-100">
					<span className="text-secondary-300">const </span>
					<span className="text-accent-200">currentPlayer </span>=
					<span className="text-accent-100"> "{player}"</span>
				</p>
			</div>
		</section>
	);
};

export default Game;
