import AnimatedRoutes from "./components/AnimatedRoutes";
import { Navbar, Footer } from "./components";

export const variants = {
	hidden: { opacity: 0, y: 300 },
	enter: { opacity: 1, y: 0 },
	// exit: { opacity: 0, y: 300 },
};

export const transition = { type: "linear", duration: 0.7 };

function App() {
	return (
		<main className="h-screen flex flex-col bg-primary-200 overflow-hidden">
			<Navbar />
			<AnimatedRoutes />
			<Footer />
		</main>
	);
}

export default App;
