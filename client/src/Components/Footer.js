import React from "react";
import { Card } from "react-bootstrap";
import TeamLogo from "../assets/TeamLogo.png";
const Footer = () => {
	return (
		<footer
			className="bg-danger py-3 border border-dark fixed-bottom "
			style={{ color: "red", display: "flex", justifyContent: "space-between" }}
		>
			<a href="/about/this/site" style={{ color:"white", textDecoration:"none", marginLeft:"2%" }} ><h5>About</h5></a>
			<Card.Img src={TeamLogo} style={{ width: "8%", marginRight: "1%" }} />
		</footer>
	);
};

export default Footer;
