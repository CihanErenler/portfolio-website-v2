import React, { useState, useEffect } from "react";
import Button from "./Button";
import Screw from "./Screw";

const Game = () => {
	const [cells, setCells] = useState(Array(9).fill(""));
	const [player, setPlayer] = useState("X");
	const [winner, setWinner] = useState(null);

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

	const handleStartAgain = () => {
		setCells(Array(9).fill(""));
		setWinner(null);
		setPlayer("X");
	};

	const handleClick = (num) => {
		if (cells[num] !== "") return;
		const newCells = [...cells];
		if (player === "X") {
			newCells[num] = "X";
			setPlayer("O");
		} else {
			newCells[num] = "O";
			setPlayer("X");
		}
		checkWinner(newCells);
		setCells(newCells);
	};

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

	const checkWinner = (newCells) => {
		let decided = false;
		for (let cols in combinations) {
			// eslint-disable-next-line no-loop-func
			combinations[cols].forEach((col) => {
				if (
					newCells[col[0]] === "" ||
					newCells[col[1]] === "" ||
					newCells[col[2]] === ""
				) {
					return;
				} else if (
					newCells[col[0]] === newCells[col[1]] &&
					newCells[col[1]] === newCells[col[2]]
				) {
					console.log("girdi 1");
					setWinner(newCells[col[0]]);
					setPlayer(newCells[col[0]]);
					decided = true;
					return;
				}
			});
		}
		const check = newCells.filter((cell) => {
			return cell === "";
		});

		if (check.length === 0 && !decided) {
			setWinner("draw");
			return;
		}
	};

	useEffect(() => {
		if (player === "O" && !winner) {
			playOpponent();
		}
	}, [cells]);

	return (
		<section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[450px] h-[450px] bg-accent-200/[.12] rounded-xl backdrop-blur-xl shadow-2xl p-5 px-7">
			<Screw />
			<Screw position="top-right" />
			<Screw position="bottom-right" />
			<Screw position="bottom-left" />
			<section className="bg-primary-200 h-[300px] w-full mt-3 rounded-xl flex items-center justify-center overflow-hidden relative p-10">
				{winner && (
					<div className="absolute w-full text-center h-full flex flex-col justify-center items-center">
						<div className="w-full bg-primary-100/[.8] py-4">
							<h1 className="uppercase text-accent-200 w-full text-3xl font-thin mb-3 ">
								{winner === "X" ? "well done!" : "game over!"}
							</h1>
							<Button action={handleStartAgain}>start-again</Button>
						</div>
					</div>
				)}
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
				<p className="text-secondary-100 ">// tic tac toe</p>
				<p className="text-secondary-100 ">
					// click one of the cells to start
				</p>
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
		</section>
	);
};

export default Game;
