import React from "react";
import { Col, Navbar, Button, Card, Nav } from "react-bootstrap";
import logo from "../assets/cyf_brand.png";
import TeamLogo from "../assets/TeamLogo.png";
const About = () => {
	return (
		<div>
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
				>
					<Button href="/" variant="danger" style={{ width: "100px" }}>
						Home
					</Button>
				</Col>
			</div>
			<footer
				className="bg-danger py-3 border border-dark fixed-bottom "
				style={{
					color: "red",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Nav.Link
					href="/about/this/site"
					style={{ color: "white", textDecoration: "none", marginLeft: "2%" }}
				></Nav.Link>
				<Card.Img src={TeamLogo} style={{ width: "8%", marginRight: "1%" }} />
			</footer>
		</div>
	);
};

export default About;

// const About = () => (
// 	<main role="main">
// 		<div>
// 			<h1>About</h1>
// 			<p>
// 				Starter kit for full-stack JavaScript projects. For more information,
// 				see the wiki:
// 			</p>
// 			<a href="https://github.com/textbook/starter-kit/wiki">Wiki</a>
// 		</div>
// 	</main>
// );

// export default About;
