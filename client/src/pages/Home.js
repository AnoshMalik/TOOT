/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";*/
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "react-bootstrap/Button";

import "./Home.css";
// import logo from "./logo.svg";

export function Home() {
	/*const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);*/

	return (
		<div>
			<Header />
			<p>Hello World</p>
			{/* this the label */}
			<label htmlFor="review">Review</label>
			<textarea
				id="review"
				name="review"
				placeholder="write your message here"
				rows="10"
				cols="50"
			></textarea>
			<Button variant="primary" className="mb-2">
				bootstrap button
			</Button>

			<Footer />
		</div>
		/*<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
			</div>
		</main>*/
	);
}

export default Home;
