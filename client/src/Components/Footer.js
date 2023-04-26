import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
	return (
		<footer
			className="bg-danger py-3 border border-dark fixed-bottom "
			style={{ color: "red" }}
		>
			<Card.Img variant="top" src="holder.js/200px160" />
		</footer>
	);
};

export default Footer;
