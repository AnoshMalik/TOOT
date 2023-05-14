import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const MainContent = ({ user }) => {
	const [value, setValue] = useState(""); //use state to set the last know content value
	const [content, setContent] = useState(""); //use state to hold the content of the input
	const [response, setResponse] = useState(""); //use state for showing the result data from fetch
	const [synth, setSynth] = useState(null); //SPEECH OUTPUT FEATURE
	const [speechToggle, SetSpeechToggle] = useState(0);
	const [timeOutId, SetTimeOutId] = useState(null);
	// const [speechIcon, SetSpeechIcon] = useState("bi bi-pause-circle-fill");
	const [isIconPaused, setIsIconPaused] = useState(false);
	const [loadingResponse, SetLoadingResponse] = useState(false);

	//const api = process.env.API_URL || "/api"; //for future easier routing to the routes

	//Submit button

	// SPEECH OUTPUT FEATURE
	useEffect(() => {
		const synth = new SpeechSynthesisUtterance();
		const voices = window.speechSynthesis.getVoices();
		synth.voice = voices[0];
		synth.lang = "en-GB";
		setSynth(synth);
	}, []);

	// useEffect(() => {
	// 	// const synth = new SpeechSynthesisUtterance();
	// 	// synth.onend = () => {
	// 	// 	console.log("Not speaking");
	// 	// 	window.speechSynthesis.cancel();
	// 	// 	clearTimeout(timeOutId);
	// 	// };
	// 	if (isIconPaused) {
	// 		SetSpeechIcon("bi bi-pause-circle-fill");
	// 	} else {
	// 		SetSpeechIcon("bi bi-megaphone-fill");
	// 	}
	// }, [isIconPaused]);

	const handleSpeak = () => {
		// e.preventDefault();
		if (synth) {
			if (response == "") {
				synth.text = "Please enter your text on the left";
			} else {
				synth.text = "Here are your suggestions! " + response;
			}
			if (speechToggle % 2 == 0) {
				console.log("Stopped");
				SetSpeechToggle(speechToggle + 1);
				setIsIconPaused(false);

				window.speechSynthesis.cancel();
				clearTimeout(timeOutId);
				console.log("CLEAR TIMEOUT CALLED");
			} else {
				console.log("Playing");
				SetSpeechToggle(speechToggle + 1);
				setIsIconPaused(true);

				window.speechSynthesis.speak(synth);
				// FOLLOWING LINES ARE NEEDED TO STOP CHROME CUTTING AUDIO OFF AFTER 15 SECONDS
				window.speechSynthesis.pause();
				console.log("PAUSED");
				window.speechSynthesis.resume();
				console.log("RESUMED");

				// STOPS TEXT FROM LOOPING
				// synth.onend = () => {
				// 	console.log("Not speaking");
				// 	window.speechSynthesis.cancel();
				// 	clearTimeout(timeOutId);
				// };
				if (window.speechSynthesis.speaking == false) {
					console.log("Not speaking");
					window.speechSynthesis.cancel();
					clearTimeout(timeOutId);
				} else {
					console.log("Speaking");
					let timeId = setTimeout(handleSpeak, 10000);
					SetTimeOutId(timeId);
					console.log("SET TIMEOUT CALLED");
				}
			}
		}

		const handleBeforeUnload = (event) => {
			event.preventDefault();
			window.speechSynthesis.cancel();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
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
			/*let x = onAdd(content);
			console.log(x);*/
			onAdd(content);
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
		//console.log(content);
		SetLoadingResponse(true);
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
			//console.log(data);
			SetLoadingResponse(false);
		} catch (error) {
			//enter your logic for when there is an error (ex. error toast)

			console.log(error);
		}
	};

	// DATABASE --> SENDING
	const saveHandler = async () => {
		console.log(user.id);
		// const github_id = user.id;
		await fetch("/api/history", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				input: content,
				output: response,
				user_id: 3,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	// DATABASE --> SENDING

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
										placeholder="Write your text here..."
										value={content}
										onChange={(e) => setContent(e.target.value)}
										style={{ fontFamily: "Lato" }}
									/>
								</Form.Group>
								<Row
									lg={2}
									xl={2}
									className="ms-auto"
									style={{ marginTop: "3%", marginRight: "1%" }}
								>
									<Button
										title="Remove all Text"
										type="reset"
										variant="danger"
										className="ms-auto"
										style={{ width: "100px", fontFamily: "Lato"  }}
									>
										CLEAR
									</Button>
									<Button
										title="Generate your Text"
										type="submit"
										variant="danger"
										style={{ width: "100px", marginLeft: "2%", fontFamily: "Lato" }}
									>
										CHECK
									</Button>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col style={{ display: "contents" }}>
					{loadingResponse ? (
						<FontAwesomeIcon
							icon={faGear}
							spin
							style={{
								width: "50px",
								height: "50px",
								marginTop: "11%",
								marginLeft: "2%",
								marginRight: "2%",
							}}
						/>
					) : (
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
					)}
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
										placeholder="View suggestions here..."
										value={response}
										readOnly={true}
										style={{ fontFamily: "Lato" }}
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
										title="Hear your Suggestions"
										variant="danger"
										// className="ms-auto"
										style={{ width: "50px" }}
									>
										{isIconPaused ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="22"
												height="22"
												fill="currentColor"
												className="bi bi-pause-circle-fill"
												viewBox="0 0 16 16"
											>
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="22"
												height="22"
												fill="currentColor"
												className="bi bi-megaphone-fill"
												viewBox="0 0 16 16"
											>
												<path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
											</svg>
										)}
										{/* <svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											fill="currentColor"
											className={speechIcon}
											viewBox="0 0 16 16"
										>
											<path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
										</svg>{" "} */}
									</Button>

									<Button
										variant="danger"
										className="ms-auto"
										style={{ width: "100px", fontFamily: "Lato" }}
										onClick={saveHandler}
										title="Save in History"
									>
										SAVE
									</Button>
									<Button
										title="Copy to Clipboard"
										variant="danger"
										style={{ width: "100px", marginLeft: "2%", fontFamily: "Lato"  }}
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
