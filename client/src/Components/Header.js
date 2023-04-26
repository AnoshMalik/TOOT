import React from "react";
import logo from "../assets/cyf_brand.png";
import { Navbar, Button, Nav, Col } from "react-bootstrap";
//header component
const Header = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Col xs={8}>
					<img src={logo} alt="logo" style={{ width: "14em" }} />
				</Col>
				<Col xs="auto">
					<Nav>
						<Button variant="outline-danger">Sign Out</Button>
					</Nav>
				</Col>
			</Navbar>
			<div className="bg-danger py-2"></div>
		</>
	);
};

export default Header;
