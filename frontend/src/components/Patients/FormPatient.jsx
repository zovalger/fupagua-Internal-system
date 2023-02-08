import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { BiTrash } from "react-icons/bi";
import { consultCI } from "../../api/utility";
import { calcular_edad, toDateInput, toInputDate } from "../../utility";

export function FormPatient({
	create,
	onSubmit,
	onInputChangePatient,
	onInputChangeRepresentative,
	setRepresentativeData,
	patientData,
	representativeData,
	deleteItem,
}) {
	const [nameSugerido, setnameSugerido] = useState();

	return (
		<Form className="mt-3" onSubmit={onSubmit}>
			<h3>Paciente</h3>
			{/* *****************************************************************
											inicio del formulario
			***************************************************************** */}
			{/* *********************   Nombre completo   ************************/}
			<Form.Group className="mb-3" controlId="name">
				<Form.Label>Nombre completo</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="text"
					name="name"
					placeholder="Nombres y apellidos"
					value={patientData.name}
					required
				/>
			</Form.Group>
			{/* *********************       Cedula        ************************/}
			<Form.Group className="mb-3" controlId="ci">
				<Form.Label>Cedula</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="number"
					name="ci"
					placeholder="opcional"
					value={patientData.ci}
					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  Fecha de nacimiento  ************************/}

			<Form.Group className="mb-3" controlId="dateBirth">
				<Form.Label>Fecha de nacimiento</Form.Label>
				<Form.Control
					onChange={(e) => {
						console.log(e);
						onInputChangePatient(e);

						let edad = calcular_edad(toDateInput(e.target.value));

						if (!edad) return;
						onInputChangePatient({ target: { name: "age", value: edad } });
					}}
					type="date"
					name="dateBirth"
					value={toInputDate(patientData.dateBirth)}
					required
					// placeholder=
				/>
			</Form.Group>

			{/* *********************  Edad  ************************/}
			<Form.Group className="mb-3" controlId="age">
				<Form.Label>Edad</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="number"
					name="age"
					value={patientData.age}
					placeholder="00"
					autoComplete="none"
					readOnly
					required
				/>
			</Form.Group>

			{/* *********************  Sexo  ************************/}

			<Form.Group className="mb-3" controlId="sex">
				<Form.Label>Sexo</Form.Label>

				<Form.Select
					onChange={onInputChangePatient}
					name="sex"
					value={patientData.sex}
				>
					<option value="male">Masculino</option>
					<option value="female">Femenino</option>
				</Form.Select>
			</Form.Group>

			{/* *********************  Peso  ************************/}

			<Form.Group className="mb-3" controlId="weight">
				<Form.Label>Peso</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="number"
					name="weight"
					value={patientData.weight}
					placeholder="10.4"
					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  Escolaridad  ************************/}

			<Form.Group className="mb-3" controlId="scholarship">
				<Form.Label>Escolaridad</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="text"
					name="scholarship"
					value={patientData.scholarship}
					placeholder="preescolar"
					required
				/>
			</Form.Group>

			{/* *********************   Numero de historia   ************************/}
			<Form.Group className="mb-3" controlId="historyNumber">
				<Form.Label>Numero de historia</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="text"
					name="historyNumber"
					value={patientData.historyNumber}
					autoComplete="none"
					placeholder="00-00-00"
					required
				/>
			</Form.Group>

			{/* *****************************************************************
													inputs para el representante
			***************************************************************** */}

			<h3>Representante</h3>

			{/* *********************       Cedula        ************************/}

			<Form.Group className="mb-3" controlId="ci-r">
				<Form.Label>Cedula</Form.Label>
				<Form.Control
					onChange={(e) => {
						onInputChangeRepresentative(e);

						consultCI({ ci: e.target.value })
							.then(({ data: name }) => {
								if (!name) return;

								setnameSugerido(name);
							})
							.catch((error) => console.log(error));
					}}
					type="number"
					name="ci"
					value={representativeData.ci}
					placeholder="12345678"
					autoComplete="none"
					required
				/>
			</Form.Group>

			{/* *********************   Nombre completo   ************************/}

			<Form.Group className="mb-3" controlId="name-r">
				<Form.Label>Nombre completo</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="text"
					name="name"
					value={representativeData.name}
					placeholder="nombre y apellidos"
					autoComplete="none"
					list="nameSugerido"
					required
				/>
			</Form.Group>

			{/* *********************  edad ************************/}

			<Form.Group className="mb-3" controlId="age-r">
				<Form.Label>edad</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="number"
					name="age"
					value={representativeData.age}
					placeholder="opcional"
					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  numero de telefono ************************/}

			<Form.Group className="mb-3" controlId="phoneNumber">
				<Form.Label>Numero de telefono</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="text"
					name="phoneNumber"
					value={representativeData.phoneNumber}
					placeholder="+58 4241234567"
					autoComplete="none"
					required
				/>
			</Form.Group>

			{/* *********************  email ************************/}

			<Form.Group className="mb-3" controlId="email">
				<Form.Label>Correo electronico</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="email"
					name="email"
					value={representativeData.email}
					placeholder="ejemplo@gmail.com"
					autoComplete="none"
				/>
			</Form.Group>

			<Button variant="primary" type="submit" className="w-100">
				Guardar
			</Button>

			{!create ? (
				<Button
					variant="danger"
					type="button"
					onClick={deleteItem}
					className="w-100 mt-3"
				>
					<BiTrash />
				</Button>
			) : null}

			<datalist id="nameSugerido">
				<option value={nameSugerido} />
			</datalist>
		</Form>
	);
}
