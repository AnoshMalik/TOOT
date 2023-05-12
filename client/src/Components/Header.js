import React from "react";
import logo from "../assets/cyf_brand.png";
import { Navbar, Button, Col, Card } from "react-bootstrap";
import ProfileIcone from "./ProfileIcone";
//header component
const Header = ({ user, text, homebutton, historybutton }) => {
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
					{user ? <ProfileIcone user={user} /> : null}
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
					<h6>{text}</h6>
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
						href="/"
						variant="danger"
						style={{ width: "100px", display: homebutton }}
					>
						Home
					</Button>
					<Button
						href="history"
						variant="danger"
						style={{ width: "100px", display: historybutton }}
					>
						History
					</Button>
				</Col>
			</div>
		</>
	);
};
// Header.defaultProps={ text: "Hi there" };
export default Header;
