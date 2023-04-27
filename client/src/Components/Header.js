import React from "react";
import logo from "../assets/cyf_brand.png";
import { Navbar, Button, Col } from "react-bootstrap";
//header component
const Header = () => {
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
					<Button variant="danger" style={{ width: "100px" }}>
						Sign Out
					</Button>
				</Col>
			</Navbar>
			<div
				className="bg-danger py-3"
				style={{ textAlign: "center", color: "white" }}
			></div>
		</>
	);
};

export default Header;
