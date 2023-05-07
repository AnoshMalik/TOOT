import React from "react";
import logo from "../assets/cyf_brand.png";
import { Navbar, Button, Col, Card } from "react-bootstrap";
import ProfileIcone from "./ProfileIcone";
//header component
const Header = ({ user }) => {
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
					className="ms-auto justify-content-end d-flex"
				>
					{user ? (
						<Card.Text style={{ marginTop: "12px" }}>{user.username}</Card.Text>
					) : null}
					<ProfileIcone user={user} />
				</Col>
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
					<Button
						href="/about/this/site"
						variant="danger"
						style={{ width: "100px" }}
					>
						Home
					</Button>
					<Button
						href="/about/this/site"
						variant="danger"
						style={{ width: "100px" }}
					>
						History
					</Button>
				</Col>
			</div>
		</>
	);
};

export default Header;
