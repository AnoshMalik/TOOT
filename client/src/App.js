import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import History from "./pages/History";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/history" element={<History />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
