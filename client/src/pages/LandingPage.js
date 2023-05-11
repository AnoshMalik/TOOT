import React from "react";
import { Button, Card, Col, Navbar } from "react-bootstrap";
import logo from "../assets/cyf_brand.png";
import Footer from "../Components/Footer";
import TeamLogo from "../assets/TeamLogo.png";
import gitIcon from "../assets/github.png";
// import Header from "../Components/Header";
const LandingPage = () => {
	const github = () => {
		window.open(
			"/api/auth/github" ?? "http://localhost:3000/api/auth/github",
			"_self"
		);
	};

	return (
		<>
			<Navbar bg="light" expand="md" className="px-4">
				<Col xs={4} md={3} lg={3} xl={3} xxl={2}>
					<img src={logo} alt="logo" style={{ width: "100%" }} />
				</Col>
				<Col>
					<h3 className="text-center font-weight-bold text-danger">TOOT</h3>
				</Col>
				<Col
					xs={4}
					md={3}
					lg={3}
					xl={3}
					xxl={2}
					// className="ms-auto justify-content-end d-flex"
				></Col>
			</Navbar>
			<div
				className="bg-danger py-3 text-center"
				style={{
					color: "white",
					display: "grid",
					gridTemplateColumns: "1fr 4fr 1fr",
				}}
			>
				<Col></Col>
				<Col>
					<div>
						<h6>
							Our all-in-one writing helper tool is designed to reduce mistake,
							improve grammar and suggest phrases
						</h6>
					</div>
				</Col>
				<Col
					xs={4}
					md={3}
					lg={3}
					xl={3}
					xxl={2}
					className="justify-content d-flex"
				></Col>
			</div>
			{/* <Header /> */}
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
					</Button>
				</Card.Body>
			</Card>
			<Footer />
		</>
	);
};

export default LandingPage;
