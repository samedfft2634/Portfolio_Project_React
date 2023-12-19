import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import NotFound from "../components/Error/NotFound";

const router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default router;
