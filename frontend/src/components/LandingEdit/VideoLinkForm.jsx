import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import styles from "./VideoLinkForm.module.scss";

export function VideoLinkForm({ data }) {
	// const navigate = useNavigate();
	// const { id, name, representative } = data;

	// const {name,age,representative} = data

	return (
		<>


<h1>
  en construccion
</h1>

			<div>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/dWFBlfZSkak"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="name">
					<Form.Label>Titulo</Form.Label>
					<Form.Control
						// onChange={onInputChangePatient}
						type="text"
						name="title"
						placeholder="titulo"
						// value={patientData.name}
						autoComplete="none"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="name">
					<Form.Label>Descripcion</Form.Label>
					<Form.Control
						// onChange={onInputChangePatient}
						type="text"
						name="description"
						placeholder="descripcion"
						// value={patientData.name}
						autoComplete="none"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="name">
					<Form.Label>link de youtube</Form.Label>
					<Form.Control
						// onChange={onInputChangePatient}
						type="text"
						name="url"
						placeholder="link de youtube"
						// value={patientData.name}
						autoComplete="none"
						required
					/>
				</Form.Group>
			</Form>
		</>
	);
}
