import { Navbar, Footer, Routes } from "./components";

export const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
};
// export const variants = {
// 	hidden: { opacity: 0, y: 300 },
// 	enter: { opacity: 1, y: 0 },
// 	exit: { opacity: 0, y: 300 },
// };

export const transition = { type: "linear", duration: 0.4 };

function App() {
	return (
		<main className="h-screen flex flex-col bg-primary-200 overflow-hidden">
			<Navbar />
			<Routes />
			<Footer />
		</main>
	);
}

export default App;
