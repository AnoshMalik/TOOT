import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import icon from "../assets/Icon.png";
const ProfileIcone = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<Button
				onClick={() => setShow(true)}
				style={{ background: "transparent", border: "none" }}
			>
				<img
					src={icon}
					alt="Icon"
					style={{ width: "35px", height: "35px", borderRadius: "100%" }}
				/>
			</Button>

			<Modal
				size="sm"
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						Profile
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Button>Sign Out</Button>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ProfileIcone;
