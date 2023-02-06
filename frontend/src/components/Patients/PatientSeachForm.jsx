import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export function PatientSeachForm({ onSubmit }) {
	return (
		<Form>
			<InputGroup className="my-3">
				<Form.Control
					placeholder="Buscar"
					aria-label="Buscar"
					type="search"
					// aria-describedby="basic-addon2"
				/>

				<Button>
					<AiOutlineSearch />
				</Button>
			</InputGroup>
		</Form>
	);
}
