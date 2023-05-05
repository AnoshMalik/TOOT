import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/LandingPage" element={<LandingPage />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
