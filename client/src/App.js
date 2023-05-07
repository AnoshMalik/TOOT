import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import History from "./pages/History";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

const App = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/auth/login/success" ??
						"/api/auth/login/success",
					{
						method: "GET",
						credentials: "include",
						headers: {
							Accept: "application/json",
							"Content-type": "application/json",
							"Access-Control-Allow-Credentials": true,
						},
					}
				);
				const json = await response.json();
				const result = json;
				//console.log(result);
				//console.log("hey");
				setUser(result);
			} catch (error) {
				//console.log("error", error);
				return error;
			}
		};
		fetchUser();
	}, []);

	return (
		<div>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Home user={user} />} />
				<Route path="/LandingPage" element={<LandingPage />} />
				<Route path="/history" element={<History />} />
				<Route path="/about/this/site" element={<About />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
