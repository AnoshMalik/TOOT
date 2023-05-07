//import { useEffect, useState } from "react";
// import { useState } from "react";
//import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MainContent from "../Components/MainContent";
//import Button from "react-bootstrap/Button";
//import App from "../App";

import "./Home.css";
// import logo from "./logo.svg"; //import for a logo

export function Home({ user }) {
	/* const [val, setVal] = useState("");
	const [content, setContent] = useState("");*/
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
	/*const onSubmit = (e) => {
		e.preventDefault(content);

		if (!content) {
			alert("Add some text");
			return;
		} else if (val === content) {
			alert("update text please");
		} else {
			onAdd(content);
			console.log(onAdd);
			console.log(content);
			setContent(content);
			setVal(content);
		}
	};*/

	/*const onAdd = async ({ content }) => {
		const result = await (
			await fetch("http://localhost:3100/api/corrections", {
				//const result = await(await fetch(`${ api }/corrections`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					content,
				}),
				//body: JSON.stringify(item),
			})
		).json();

		if (!result.error) {
			console.log(result);
			//navigate("/About");
			//window.location.reload();
		} else {
			console.log(result.error);
		}
	};*/

	return (
		<div>
			<Header user={user} />
			{/* <p>Hello World</p>
			 this the label
			<form id="inputForm" onSubmit={onSubmit}>
				<div>
					<label htmlFor="review">Review</label>
					<textarea
						//spellCheck={true}
						id="review"
						name="review"
						placeholder="write your message here"
						rows="10"
						cols="50"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></textarea>
					<input type="submit" value="Submit" />
				</div>
			</form>
			<Button variant="primary">BootstrapButton</Button> */}
			<MainContent />

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
