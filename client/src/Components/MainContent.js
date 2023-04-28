import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form, Col, Container, Row } from "react-bootstrap";

const MainContent = () => {
	const [val, setVal] = useState("");
	const [content, setContent] = useState("");
	//const [response, setResponse] = useState(""); //use state for showing the result data

	//const api = process.env.API_URL || "/api"; //for future easier routing to the routes

	const onSubmit = (e) => {
		e.preventDefault();

		if (!content) {
			alert("Add some text");
			return;
		} else if (val === content) {
			alert("update text please");
		} else {
			let x = onAdd(content);
			console.log(x);
			console.log(content);
			setContent(content);
			setVal(content);
		}
	};

	//Clear button
	const onReset = (e) => {
		e.preventDefault();
		setContent("");
		setVal("");
	};

	// async to the backend
	const onAdd = async (content) => {
		console.log(content);
		try {
			const response = await fetch("http://localhost:3100/api/corrections", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					content,
					//your expected POST request payload goes here

					//body: content,
				}),
			});
			const data = await response.json();
			//enter you logic when the fetch is successful
			console.log(data);
		} catch (error) {
			//enter your logic for when there is an error (ex. error toast)

			console.log(error);
		}
	};

	return (
		<Container style={{ marginTop: "6%" }}>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Form onSubmit={onSubmit} onReset={onReset}>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									{/* <Form.Label>Textarea 1</Form.Label> */}
									<Form.Control
										as="textarea"
										rows={10}
										placeholder="write your message here"
										value={content}
										onChange={(e) => setContent(e.target.value)}
									/>
								</Form.Group>
								<Row
									lg={2}
									xl={2}
									className="ms-auto"
									style={{ marginTop: "3%", marginRight: "1%" }}
								>
									<Button
										type="reset"
										variant="danger"
										className="ms-auto"
										style={{ width: "100px" }}
									>
										CLEAR
									</Button>
									<Button
										type="submit"
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
				<Col>
					<Card>
						<Card.Body>
							<Form>
								<Form.Group controlId="exampleForm.ControlTextarea2">
									{/* <Form.Label>Textarea 2</Form.Label> */}
									<Form.Control as="textarea" rows={10} />
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
