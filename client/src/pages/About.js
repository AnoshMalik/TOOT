// import { FaSpinner } from "react-icons/fa";
// import "./Animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const About = () => (
	<main role="main">
		<div>
			<h1>About</h1>
			<p>
				Starter kit for full-stack JavaScript projects. For more information,
				see the wiki:
			</p>
			{/* <FaLoader spin /> */}
			{/* <FaSpinner className="animate" /> */}
			<FontAwesomeIcon icon={faGear} spin />
			<a href="https://github.com/textbook/starter-kit/wiki">Wiki</a>
		</div>
	</main>
);

export default About;
