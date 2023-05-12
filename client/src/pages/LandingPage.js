import React from "react";
// import { Button, Card } from "react-bootstrap";
import Footer from "../Components/Footer";
// import TeamLogo from "../assets/TeamLogo.png";
// import gitIcon from "../assets/github.png";
import Header from "../Components/Header";
import LandingContent from "../Components/LandingContent";

const LandingPage = () => {
	// const github = () => {
	// 	window.open(
	// 		"/api/auth/github" ?? "http://localhost:3000/api/auth/github",
	// 		"_self"
	// 	);
	// };
	const landingText =
		"Our all-in-one writing helper tool is designed to reduce mistake, improve grammar and suggest phrases";

	return (
		<>
			<Header homebutton="none" historybutton="none" text={landingText} />
			<LandingContent />
			{/* <Card
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
						variant="outline-light"
						style={{ marginTop: "20%" }}
						onClick={github}
					>
						<img
							src={gitIcon}
							alt="Icon"
							style={{ height: "50px", borderRadius: "7px" }}
						/>
						{/* Log in with GitHub */}
			{/* </Button>
				// </Card.Body>
			</Card> */}
			<Footer />
		</>
	);
};

export default LandingPage;
