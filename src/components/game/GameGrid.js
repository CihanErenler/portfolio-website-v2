import React from "react";

const GameGrid = ({ cells, handleClick }) => {
	return (
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
	);
};

export default GameGrid;
