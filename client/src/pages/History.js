import React from "react";
import { BsSearch, BsSliders, BsSortDown, BsTrash3, BsX } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import "./Main.css";

const History = () => {
	const obj = [
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"THAS AS MY 3RD ENTRY INTO THE CORRECTIONZ BUX",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
		"ZIS IZ MY SECOND ANTRY INTO THE APP",
	];

	return (
		<>
			<main>
				<form className="search-input-form">
					<textarea name="" id="" cols="30" rows="10"></textarea>
					<button>
						<FaAngleDown />
					</button>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</form>
				<section className="main-history">
					<div className="main-history-header">
						<h1>History</h1>
					</div>
					<div className="input-buttons-container">
						<form className="history-sec-form">
							<button>
								<BsSearch />
							</button>
							<input type="text" />
						</form>
						<div className="history-btns">
							<button>
								<BsSliders />
							</button>
							<button>
								<BsSortDown />
							</button>
							<button>
								<BsTrash3 />
							</button>
						</div>
					</div>
					<ul className="history-list">
						{obj.map((text, index) => (
							<li key={index} className="history-list-item">
								<p>{text}</p>
								<button>
									<BsX />
								</button>
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
};

export default History;
