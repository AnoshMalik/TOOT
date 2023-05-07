import React from "react";
import { Button, Card } from "react-bootstrap";
import Footer from "../Components/Footer";
import TeamLogo from "../assets/TeamLogo.png";
import Header from "../Components/Header";
const LandingPage = () => {
	const github = () => {
		window.open("http://localhost:3000/api/auth/github", "_self");
	};

	return (
		<>
			<Header />
			<Card
				className="text-center"
				style={{
					width: "40rem",
					alignItems: "center",
					marginTop: "5%",
					marginLeft: "29%",
					height: "50%",
					border: "none",
				}}
			>
				<Card.Img src={TeamLogo} style={{ width: "40%" }} />
				<Card.Body>
					<Card.Title style={{ marginTop: "10%" }}>Welcome to TOOT</Card.Title>
					<Card.Text>
						Log in with your GitHub account to <br /> continue
					</Card.Text>
					<Button
						type="submit"
						//href="/about/this/site"
						variant="danger "
						style={{ marginTop: "20%" }}
						onClick={github}
					>
						Log in with GitHub
					</Button>
				</Card.Body>
			</Card>
			<Footer />
		</>
	);
};

export default LandingPage;
