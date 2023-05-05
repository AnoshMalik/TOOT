import React from "react";
import { Card } from "react-bootstrap";
import TeamLogo from "../assets/TeamLogo.png";
const Footer = () => {
	return (
		<footer
			className="bg-danger py-3 border border-dark "
			style={{ color: "red", display: "flex", justifyContent: "flex-end" }}
		>
			<Card.Img src={TeamLogo} style={{ width: "8%", marginRight: "1%" }} />
		</footer>
	);
};

export default Footer;
