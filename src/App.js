import Router from "./router/router";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Router />
			<Footer />
		</div>
	);
}

export default App;
