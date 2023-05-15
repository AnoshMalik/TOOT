import React from "react";
import { Button, Card } from "react-bootstrap";
import TeamLogo from "../assets/TeamLogo.png";
import gitIcon from "../assets/github.png";

const LandingContent = () => {
	const github = () => {
		window.open(
			"/api/auth/github" ?? "http://localhost:3000/api/auth/github",
			"_self"
		);
	};
	return (
		<div>
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
					<Card.Title
						style={{ marginTop: "10%", fontFamily: "Lato", fontWeight: "bold" }}
					>
						Welcome to TOOT
					</Card.Title>
					<Card.Text style={{ fontFamily: "Lato" }}>
						Log in with your GitHub account to <br /> continue
					</Card.Text>
					<Button
						className="github-login-button"
						type="submit"
						//href="/about/this/site"
						variant="outline-light"
						style={{ marginTop: "20%" }}
						onClick={github}
					>
						<img
							src={gitIcon}
							alt="Icon"
							style={{
								height: "50px",
								borderRadius: "7px",
								boxShadow: "0px 5px 10px grey",
							}}
						/>
						{/* Log in with GitHub */}
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default LandingContent;
