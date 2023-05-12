import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import History from "./pages/History";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

const App = () => {
	const [user, setUser] = useState();
	const [isAuthenticated, setIsAuthenticated] = useState();
	const [loading, setLoading] = useState(true);

	const PrivateWrapper = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="LandingPage" />;
	};

	const LoginWrapper = () => {
		return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(
					"/api/auth/login/success" ??
						"http://localhost:3000/api/auth/login/success",
					{
						method: "GET",
						credentials: "include",
						headers: {
							Accept: "application/json",
							"Content-type": "application/json",
							"Access-Control-Allow-Credentials": true,
							//"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Headers": "Content-Type",
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

	//useEffect for checking authentication used to work!
	/*useEffect(() => {
		const getProfile = () => {
			user ? setIsAuthenticated(true) : setIsAuthenticated(false);
			setLoading(false);
		};
		getProfile();
	}, [user]);*/

	//!!SETTING authentication using fetch and backend! Keep here please for possible use!!
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await fetch(
					"/api/auth/login/profile" ??
						"http://localhost:3000/api/auth/login/profile",
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
				setIsAuthenticated(result);
				setLoading(false);
			} catch (error) {
				//console.log("error", error);
				return error;
			}
		};
		fetchProfile();
	}, []);

	if (loading) {
		return <div className="App">Loading...</div>;
	}

	//wrappers for different safe and default routing
	return (
		<div>
			{/* <Header /> */}
			<Routes>
				<Route element={<LoginWrapper />}>
					<Route path="/LandingPage" element={<LandingPage />} />
				</Route>
				<Route element={<PrivateWrapper />}>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/history" element={<History user={user} />} />
				</Route>
				<Route path="/about/this/site" element={<About />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
