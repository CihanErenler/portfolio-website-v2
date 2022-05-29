import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Projects, Contact } from "../pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route exec path="/" element={<Home />} />
				<Route exec path="/about" element={<About />} />
				<Route exec path="/projects" element={<Projects />} />
				<Route exec path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
