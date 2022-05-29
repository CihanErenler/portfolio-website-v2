import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";

const activeStyle =
	"h-full flex items-center justify-center px-8 border-r border-r-line";

const Navbar = () => {
	return (
		<nav className="h-[56px] bg-primary-200  border-b border-b-line flex">
			<div className=" w-[310px] border-r border-r-line flex items-center h-full">
				<Link to="/" className="text-secondary-100 text-base px-5">
					cihan-erenler
				</Link>
			</div>
			<div className="w-full">
				<nav className="h-full flex justify-between">
					<div className="flex h-full ">
						{navLinks.map((link) => {
							return (
								<NavLink
									key={link.name}
									to={link.to}
									className={({ isActive }) =>
										isActive
											? `${activeStyle} text-white relative before:content-[""] before:absolute before:w-full before:h-[3px] before:left-0 before:bottom-0 before:bg-accent-100`
											: `${activeStyle} text-secondary-100`
									}
								>
									{link.name}
								</NavLink>
							);
						})}
					</div>
					<div>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive
									? `${activeStyle} text-white relative before:content-[""] before:absolute before:w-full before:h-[3px] before:left-0 before:bottom-0 before:bg-accent-100 border-l border-l-line`
									: `${activeStyle} text-secondary-100 border-l border-l-line`
							}
						>
							_contact-me
						</NavLink>
					</div>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
