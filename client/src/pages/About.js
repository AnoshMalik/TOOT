import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import aboutImg from "../assets/T-shirt.png";

const About = ({ user }) => {
	const aboutText =
		"Our all-in-one writing helper tool is designed to reduce mistake, improve grammar and suggest phrases";
	return (
		<div>
			<Header historybutton="none" text={aboutText} user={user} />
			<Container style={{ backgroundColor: "#fff" }} fluid>
				<Row style={{ padding: "2% 12% 8% 20%" }}>
					<Col>
						<img
							src={aboutImg}
							alt="about"
							style={{ width: "300px", marginTop: "30px" }}
						/>
					</Col>
					<Col>
						<Card className="p-4 rounded bg-light mt-4">
							<p
								style={{
									fontSize: "16px",
									lineHeight: "1.6em",
									fontFamily: "Lato",
									fontWeight: "500",
								}}
							>
								TOOT project addresses a critical aspect of communicating Code
								Your Future between mentors and students. With the
								implementation of the Open AI (Chat GPT) API to TooT project,
								the web app creates written interaction for people with
								receiving suggestions and corrections words / sentences. From
								now, do not worry about conveying your ideas and words on
								feedback forms, chat and emails. With authorization, users
								journey have been secured the Git Hub log in account while using
								the app.
							</p>
						</Card>
					</Col>
				</Row>
			</Container>
			<Footer aboutlink="none" />
		</div>
	);
};

export default About;
