import React from "react";
import { Button, Card } from "react-bootstrap";
import Footer from "../Components/Footer";
import TeamLogo from "../assets/TeamLogo.png";
import Header from "../Components/Header";
const LandingPage = () => {
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
						<h6>
							Log in with your GitHub account to <br /> continue
						</h6>
					</Card.Text>
					<Button
						href="/about/this/site"
						variant="danger "
						style={{ marginTop: "20%" }}
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

