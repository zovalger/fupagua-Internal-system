import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";

export function PatientSeachForm({ makeQuery, setInQuery, onClearValue }) {
	const [inputValue, setInputValue] = useState("");
	const [numH, setNumH] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (inputValue.match(/\D/)) setNumH(false);

		const query = {};

		if (numH) {
			query.historyNumber = inputValue;
		} else {
			query.name = inputValue;
			query.ci = inputValue;
		}

		makeQuery(query);
	};

	return (
		<Form className="my-3" onSubmit={onSubmit}>
			<InputGroup controlId="searchinput">
				<Form.Control
					placeholder="Buscar"
					aria-label="Buscar"
					type="search"
					onChange={(e) => {
						const v = e.target.value;

						if (v.match(/\D/)) setNumH(false);

						setInputValue(v);

						if (v) return setInQuery(true);

						setInQuery(false);
						onClearValue([]);
					}}
					value={inputValue}
					// aria-describedby="basic-addon2"
				/>

				<Button type="submit">
					<AiOutlineSearch />
				</Button>
			</InputGroup>

			<InputGroup>
				<Form.Check
					type="checkbox"
					id={`defaultcheck`}
					label={`Número de historia`}
					checked={numH}
					onChange={() => {
						setNumH(!numH);

						if (!numH && inputValue.match(/\D/)) {
							setInputValue("0");
						}
					}}
				/>
			</InputGroup>
		</Form>
	);
}
