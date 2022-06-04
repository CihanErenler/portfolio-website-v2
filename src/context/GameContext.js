import React, { useContext, useState } from "react";

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
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

	const handleStartAgain = () => {
		setCells(Array(9).fill(""));
		setPlayer("X");
		setWinner(null);
	};
	return (
		<GameContext.Provider
			value={{
				cells,
				setCells,
				player,
				setPlayer,
				winner,
				setWinner,
				handleClick,
				checkWinner,
				handleStartAgain,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

const useGameContext = () => {
	return useContext(GameContext);
};

export { GameProvider, useGameContext };
