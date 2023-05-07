import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form, Col, Container, Row } from "react-bootstrap";

const MainContent = () => {
	const [value, setValue] = useState(""); //use state to set the last know content value
	const [content, setContent] = useState(""); //use state to hold the content of the input
	const [response, setResponse] = useState(""); //use state for showing the result data from fetch
	const [synth, setSynth] = useState(null); //SPEECH OUTPUT FEATURE

	//const api = process.env.API_URL || "/api"; //for future easier routing to the routes

	//Submit button

	// SPEECH OUTPUT FEATURE
	useEffect(() => {
		const synth = new SpeechSynthesisUtterance();
		setSynth(synth);
	}, []);

	const handleSpeak = () => {
		if (synth) {
			if (response == "") {
				synth.text = "Please enter your text on the left" ;
			} else {
				synth.text = "Here are your suggestions! " + response;
			}
			window.speechSynthesis.speak(synth);
		}
	};
	// SPEECH OUTPUT FEATURE

	const onSubmit = (e) => {
		e.preventDefault();

		if (!content) {
			alert("Add some text");
			return;
		} else if (value === content) {
			alert("update text please");
		} else {
			let x = onAdd(content);
			console.log(x);
			console.log(content);
			setContent(content);
			setValue(content);
		}
	};

	//Clear button

	const onReset = (e) => {
		e.preventDefault();
		setContent("");
		setValue("");
		setResponse("");
	};

	// async to the backend with fetch and post

	const onAdd = async (content) => {
		console.log(content);
		try {
			const response = await fetch("/api/corrections", {
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
			const result = data.msg.choices[0].message.content;
			//enter you logic when the fetch is successful
			setResponse(result);
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
									<Form.Control
										as="textarea"
										rows={10}
										placeholder="Suggestions..."
										value={response}
										readOnly={true}
									/>
								</Form.Group>
								<Row
									lg={1}
									xl={1}
									className="ms-auto"
									style={{ marginTop: "3%", marginRight: "1%" }}
								>
									<Button
										onClick={handleSpeak}
										variant="danger"
										// className="ms-auto"
										style={{ width: "50px" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											fill="currentColor"
											className="bi bi-megaphone-fill"
											viewBox="0 0 16 16"
										>
											<path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
										</svg>{" "}
									</Button>

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
