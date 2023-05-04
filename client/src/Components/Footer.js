import React from "react";
import { Card } from "react-bootstrap";
import TeamLogo from "../assets/TeamLogo.png";
const Footer = () => {
	return (
		<footer
			className="bg-danger py-3 border border-dark fixed-bottom "
			// style={{ color: "red", display: "flex", justifyContent: "flex-end" }}
		>
			<Card.Img className="card-image" src={TeamLogo} />
		</footer>
	);
};

export default Footer;
