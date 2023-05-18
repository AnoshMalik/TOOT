import React, { useState, useEffect } from "react";
import { BsSortDown, BsSortUp, BsTrash2, BsTrash3, BsX } from "react-icons/bs";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Modal, Button } from "react-bootstrap";

const History = ({ user }) => {
	const [history, setHistory] = useState([]);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("");
	const [modalShow, setModalShow] = useState(false);
	const [item, setItem] = useState({});

	const sendRequest = () => {
		fetch(
			`/api/history?githubId=${user.id}&search=${search}&sort=${sort}` ??
				`http://localhost:3100/api/history?githubId=${user.id}&search=${search}&sort=${sort}`
		)
			.then((response) => response.json())
			.then((data) => {
				setHistory(data.data);
				// console.log(data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (user) {
			// console.log(user);
			sendRequest();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, sort, search]);

	// clear all
	const clearHandler = async () => {
		if (confirm("Are you sure?")) {
			await fetch("/api/histories", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					github_id: user.id,
				}),
			})
				.then(() => setHistory([]))
				.then((data) => console.log(data));
		}
	};

	// delete one item from history list
	const removeHandler = async (id) => {
		if (confirm("Are you sure?")) {
			await fetch("/api/history", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: id,
				}),
			})
				.then(() => sendRequest())
				.then((data) => console.log(data));
		}
	};
	// show shorter version of long text
	const shortenText = (content) => {
		const listOfWords = content.trim().split(" ");
		const truncatedContent = listOfWords.slice(0, 10).join(" ");
		const shortVersion = truncatedContent + "...";
		return listOfWords.length > 20 ? shortVersion : content;
	};

	function PopUp(props) {
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				{/* modal is pop up */}
				<Modal.Header closeButton style={{ boxShadow: "0px 5px 10px grey " }}>
					<Modal.Title
						id="contained-modal-title-vcenter"
						style={{ fontFamily: "Lato", fontWeight: "bold" }}
					>
						Saved Suggestion
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5 style={{ fontFamily: "Lato", fontWeight: "bold" }}>Input Text</h5>
					<p style={{ fontFamily: "Lato" }}>{item.input}</p>
					<hr />
					<h5 style={{ fontFamily: "Lato", fontWeight: "bold" }}>
						Output Text
					</h5>
					<p style={{ fontFamily: "Lato" }}>{item.output}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={props.onHide}
						variant="danger"
						style={{ boxShadow: "0px 5px 10px grey ", width: "100px" }}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	const handleModal = (item) => {
		setItem(item);
		setModalShow(true);
	};

	return (
		<>
			<Header
				user={user}
				text="Refresh your memory with all your saved corrections"
			/>
			<Container style={{ paddingBottom: "75px" }}>
				<Row
					className="m-0 my-5 d-flex justify-content-center"
					style={{ backgroundColor: "#f2eff0" }}
				>
					<div className="px-5 p-2 text-white d-block bg-danger">
						<h3 style={{ fontFamily: "Lato" }}>History</h3>
					</div>
					<div
						className="p-5 d-flex justify-content-between flex-sm-row flex-column align-items-center gap-2 "
						style={{ backgroundColor: "#f2eff0" }}
					>
						<form className="d-flex justify-content-start align-items-center">
							<button
								onClick={(e) => {
									e.preventDefault();
									setSearch("");
								}}
								className="h3 px-3 align-items-center py-1 border-0 text-white"
								style={{
									backgroundColor: "#ee4344",
									borderTopLeftRadius: "8px",
									borderBottomLeftRadius: "8px",
									boxShadow: "0px 5px 10px grey",
								}}
							>
								<BsTrash2 />
							</button>
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="h3 py-1 px-3 border-0 "
								type="text"
								style={{ maxWidth: "200px", boxShadow: "0px 5px 10px grey" }}
							/>
						</form>
						<div className="d-flex">
							<button
								className="h3 px-3 mx-auto border-0"
								onClick={() =>
									setSort((sort) => {
										return sort === "DESC" ? "ASC" : "DESC";
									})
								}
							>
								{sort === "ASC" ? <BsSortDown /> : <BsSortUp />}
							</button>
							<button
								className="h3 px-3 mx-auto border-0"
								onClick={clearHandler}
							>
								<BsTrash3 />
							</button>
						</div>
					</div>
					<ul
						className="p-4 m-0"
						style={{ backgroundColor: "#f2eff0", overflowY: "auto" }}
					>
						{history &&
							history.map((item, index) => (
								<div
									key={index}
									style={{
										display: "block",
										width: "100%",
										textAlign: "start",
										boxShadow: "0px 5px 10px grey",
									}}
									className="h6 list-unstyled border p-1 mb-2 rounded-1"
								>
									<div className="d-flex justify-content-between w-100">
										<p
											className="m-4 fs-5 w-50"
											style={{
												paddingRight: "30px",
												fontFamily: "Lato",
												fontWeight: "550",
											}}
										>
											{shortenText(item.input)}
										</p>
										<p
											className="m-4 fs-5 w-50 "
											style={{
												paddingRight: "30px",
												fontFamily: "Lato",
												fontWeight: "500",
											}}
										>
											{shortenText(item.output)}
										</p>
									</div>
									<div className="d-flex justify-content-end align-items-center w-100">
										<button
											onClick={() => handleModal(item)}
											className="btn btn-outline-secondary"
										>
											Show more
										</button>
										<span
											className="fs-6 mx-2"
											style={{ fontWeight: "bold", fontFamily: "Lato" }}
										>
											{new Date(item.timestamp).toLocaleString()}
										</span>
										<button
											className="py-2 px-0 d-inline-flex align-items-center flex-column justify-content-center m-0 border-0"
											style={{ color: "#ee4344" }}
											onClick={() => removeHandler(item.id)}
										>
											<BsX style={{ fontSize: "44px" }} />
										</button>
									</div>
								</div>
							))}
					</ul>
					<PopUp show={modalShow} onHide={() => setModalShow(false)} />
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default History;
