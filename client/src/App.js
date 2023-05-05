import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import History from "./pages/History";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => (
	<div>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/history" element={<History />} />
			<Route path="/about/this/site" element={<About />} />
		</Routes>
		<Footer />
	</div>
);

export default App;
