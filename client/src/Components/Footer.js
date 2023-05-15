import React from "react";
import { Card, Nav } from "react-bootstrap";
import TeamLogo from "../assets/TeamLogo.png";
const Footer = ({ aboutlink }) => {
	return (
		<footer
			className="bg-danger py-3 border border-dark fixed-bottom "
			style={{ color: "red", display: "flex", justifyContent: "space-between" }}
		>
			<div style={{ marginLeft: "2%" }}>
				<Nav.Link
					href="/about/this/site"
					style={{
						color: "white",
						textDecoration: "none",
						marginLeft: "2%",
						display: aboutlink,
						fontFamily: "Lato",
					}}
				>
					About
				</Nav.Link>
			</div>
			<Card.Img src={TeamLogo} style={{ width: "8%", marginRight: "1%" }} />
		</footer>
	);
};

export default Footer;
