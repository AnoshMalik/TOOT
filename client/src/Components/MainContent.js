import React, { useState, useEffect } from "react";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form, Col, Container, Row } from "react-bootstrap";
const MainContent = () => {
	// const [val, setVal] = useState("");
	const [leftMessage, setLeftMessage] = useState("");
	const [rightMessage, setRightMessage] = useState("");

	useEffect(() => {
		// setRightMessage(leftMessage);
	}, []);

	const sendRequest = () => {
		fetch("http://localhost:3100/api/corrections?grammar="+leftMessage)
			.then((response) => response.json())
			.then((data) => {
				setRightMessage(data.msg.choices[0].message["content"]);
				console.log(data.msg.choices[0].message["content"]);
			})
			.catch((error) => console.error(error));
		console.log(rightMessage);
	};

	const setGrammar = (e) => {
        setLeftMessage(e.currentTarget.value);
	};

	return (
		<Container style={{ marginTop: "6%" }}>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Form>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									{/* <Form.Label>Textarea 1</Form.Label> */}
									<Form.Control
										as="textarea"
										rows={10}
										placeholder="Enter text here.."
										onChange={setGrammar}
										value={leftMessage }
									/>
								</Form.Group>
								<Row
									lg={2}
									xl={2}
									className="ms-auto"
									style={{ marginTop: "3%", marginRight: "1%" }}
								>
									<Button
										variant="danger"
										className="ms-auto"
										style={{ width: "100px" }}
									>
										CLEAR
									</Button>
									<Button
										onClick={sendRequest}
										variant="danger"
										style={{ width: "100px", marginLeft: "2%" }}
									>
										CHECK
									</Button>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col style={{ display: "contents" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						fill="currentColor"
						className="bi bi-arrow-right-square-fill"
						viewBox="0 0 16 16"
						style={{ marginTop: "11%", marginLeft: "2%", marginRight: "2%" }}
					>
						<path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
					</svg>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Form>
								<Form.Group controlId="exampleForm.ControlTextarea2">
									{/* <Form.Label>Textarea 2</Form.Label> */}
									<Form.Control as="textarea" rows={10} placeholder="Search Results.." value={rightMessage} />
								</Form.Group>
								<Row
									lg={1}
									xl={1}
									className="ms-auto"
									style={{ marginTop: "3%", marginRight: "1%" }}
								>
									<Button
										variant="danger"
										className="ms-auto"
										style={{ width: "100px" }}
									>
										SAVE
									</Button>
									<Button
										variant="danger"
										style={{ width: "100px", marginLeft: "2%" }}
									>
										COPY
									</Button>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default MainContent;

{
	/* <p>Hello World</p>
<label htmlFor="review">Review</label>
<textarea
  value={val}
  onChange={(e) => setVal(e.target.value)}
  spellCheck={true}
  id="review"
  name="review"
  placeholder="write your message here"
  rows="10"
  cols="50"
></textarea>
<Button variant="primary">BootstrapButton</Button> */
}
