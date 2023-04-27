import React from "react";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form, Col, Container, Row } from "react-bootstrap";

const MainContent = () => {
	// const [val, setVal] = useState("");
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
										placeholder="write your message here"
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
