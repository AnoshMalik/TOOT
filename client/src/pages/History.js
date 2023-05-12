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
			.then((data) => setHistory(data.data))
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (user) {
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
	// how to create summery of string for ...//
	const excerpt = (content) => {
		const listOfWords = content.trim().split(" ");
		const truncatedContent = listOfWords.slice(0, 10).join(" ");
		const excerpt = truncatedContent + "...";
		return listOfWords.length > 20 ? excerpt : content;
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
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Input Text</h4>
					<p>{item.input}</p>
					<hr />
					<h4>Output Text</h4>
					<p>{item.output}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
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
					<div className="p-5 text-white d-block bg-danger">
						<h1>History</h1>
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
								}}
							>
								<BsTrash2 />
							</button>
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="h3 py-1 px-3 border-0 "
								type="text"
								style={{ maxWidth: "200px" }}
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
								<button
									onClick={() => handleModal(item)}
									key={index}
									style={{
										display: "block",
										width: "100%",
										textAlign: "start",
									}}
									className="h6 list-unstyled border p-1 mb-2 rounded-1"
								>
									<div className="d-flex justify-content-between w-100">
										<p
											className="m-0 fs-5 w-50"
											style={{ paddingRight: "30px" }}
										>
											{excerpt(item.input)}
										</p>
										<p
											className="m-0 fs-5 w-50 "
											style={{ paddingRight: "30px" }}
										>
											{excerpt(item.output)}
										</p>
									</div>
									<div className="d-flex justify-content-end align-items-center w-100">
										<span className="fs-6 mx-2">
											{new Date(
												"2023-05-11 09:26:06.587153+00"
											).toLocaleString()}
										</span>
										<button
											className="py-2 px-0 d-inline-flex align-items-center flex-column justify-content-center m-0 border-0"
											style={{ color: "#ee4344" }}
											onClick={() => removeHandler(item.id)}
										>
											<BsX style={{ fontSize: "44px" }} />
										</button>
									</div>
								</button>
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
