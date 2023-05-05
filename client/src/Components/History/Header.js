import React from "react";
import CyfLogo from "../../assets/cyf_brand.png";
import { BiUserCircle } from "react-icons/bi";
import "./Header.css";
const Header = () => {
	return (
		<header>
			<div className="navbar">
				<a href="https://codeyourfuture.io/">
					<img src={CyfLogo} alt="logo"></img>
				</a>
				<h1>TOOT</h1>
				<div className="singout-container">
					<button>
						<p>ANOSH</p>
						<BiUserCircle />
					</button>
				</div>
			</div>
			<div className="header-red-div">
				<div className="slogan-container">
					<h5>Refresh your memory with all your saved corrections</h5>
					<button>Home</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
