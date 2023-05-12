import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const About = ({ user }) => {
	const aboutText =
		"Our all-in-one writing helper tool is designed to reduce mistake, improve grammar and suggest phrases";
	return (
		<div>
			<Header historybutton="none" text={aboutText} user={user} />
			<Footer aboutlink="none" />
		</div>
	);
};

export default About;

// const About = () => (
// 	<main role="main">
// 		<div>
// 			<h1>About</h1>
// 			<p>
// 				Starter kit for full-stack JavaScript projects. For more information,
// 				see the wiki:
// 			</p>
// 			<a href="https://github.com/textbook/starter-kit/wiki">Wiki</a>
// 		</div>
// 	</main>
// );

// export default About;
