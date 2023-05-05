import React from "react";
import { Card, Nav } from "react-bootstrap";
import TeamLogo from "../assets/TeamLogo.png";
const Footer = () => {
	return (
		<footer
			className="bg-danger py-3 border border-dark fixed-bottom "
			style={{ color: "red", display: "flex", justifyContent: "space-between" }}
		>
			<Nav.Link
				href="/about/this/site"
				style={{ color: "white", textDecoration: "none", marginLeft: "2%" }}
			>
				About
			</Nav.Link>
			<Card.Img src={TeamLogo} style={{ width: "8%", marginRight: "1%" }} />
		</footer>
	);
};

export default Footer;
