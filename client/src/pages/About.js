import { FaSpinner } from "react-icons/fa";
import "./Animate.css";

const About = () => (
	<main role="main">
		<div>
			<h1>About</h1>
			<p>
				Starter kit for full-stack JavaScript projects. For more information,
				see the wiki:
			</p>
			{/* <FaLoader spin /> */}
			<FaSpinner className="animate" />
			<a href="https://github.com/textbook/starter-kit/wiki">Wiki</a>
		</div>
	</main>
);

export default About;
