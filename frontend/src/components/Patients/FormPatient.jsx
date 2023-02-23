import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { BiTrash } from "react-icons/bi";
import { consultCI } from "../../api/utility";
import {
	calcular_edad,
	calculateAge,
	toDateInput,
	toInputDate,
} from "../../utility";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { consultPatientHistoryNumberRequest } from "../../api/patients";

export function FormPatient({
	create,
	onSubmit,
	onInputChangePatient,
	onInputChangeRepresentative,
	setRepresentativeData,
	setPatientData,
	patientData,
	representativeData,
	deleteItem,
}) {
	const [nameSugerido, setnameSugerido] = useState();
	const [historyNumberEnable, sethistoryNumberEnable] = useState(true);
	const [busquedaTimeout, setBusquedaTimeout] = useState();
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
					autoComplete="true"
					required
				/>
			</Form.Group>
			{/* *********************       Cedula        ************************/}
			<Form.Group className="mb-3" controlId="ci">
				<Form.Label>Cédula</Form.Label>
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

				<DatePicker
					className="form-control"
					selected={patientData.dateBirth}
					onChange={(date) => {
						let edad = calculateAge(date);

						if (typeof edad === "number" && edad >= 0) {
							console.log(edad);
							setPatientData({
								...patientData,
								dateBirth: date,
								age: edad,
							});
						} else {
							setPatientData({ ...patientData, dateBirth: date });
						}

						// setStartDate(date)
					}}
					peekNextMonth
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
					required
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

			{/* *********************  Escolaridad  ************************/}

			<Form.Group className="mb-3" controlId="scholarship">
				<Form.Label>Escolaridad</Form.Label>
				<Form.Control
					onChange={onInputChangePatient}
					type="text"
					name="scholarship"
					value={patientData.scholarship}
					placeholder="preescolar"
				/>
			</Form.Group>

			{/* *********************  Peso  ************************/}

			<Form.Group className="mb-3" controlId="weight">
				<Form.Label>Peso</Form.Label>

				<InputGroup className="mb-3">
					<Form.Control
						onChange={onInputChangePatient}
						type="number"
						name="weight"
						value={patientData.weight}
						placeholder="10.4"
						autoComplete="none"
					/>
					<InputGroup.Text>Kg</InputGroup.Text>
				</InputGroup>
			</Form.Group>

			<Form.Group className="mb-3" controlId="height">
				<Form.Label>Estatura</Form.Label>

				<InputGroup className="mb-3">
					<Form.Control
						onChange={onInputChangePatient}
						type="number"
						name="height"
						value={patientData.height}
						placeholder="0.5"
						autoComplete="none"
					/>
					<InputGroup.Text>m</InputGroup.Text>
				</InputGroup>
			</Form.Group>

			{/* *********************   Numero de historia   ************************/}
			<Form.Group className="mb-3" controlId="historyNumber">
				<Form.Label>Número de historia</Form.Label>
				<Form.Control
					onChange={async (e) => {
						onInputChangePatient(e);

						if (e.target.value) {
							const res = await consultPatientHistoryNumberRequest(
								e.target.value
							);

							sethistoryNumberEnable(res.data.result);
						}
					}}
					type="text"
					name="historyNumber"
					value={patientData.historyNumber}
					autoComplete="none"
					placeholder=""
					required
				/>

				{!historyNumberEnable ? (
					<Form.Text className="text-muted clic">
						Este numero de historia ya esta asignado a otra persona
					</Form.Text>
				) : null}
			</Form.Group>

			{/* *****************************************************************
													inputs para el representante
			***************************************************************** */}

			<h3 className="mt-5">Representante</h3>

			{/* *********************       Cedula        ************************/}

			<Form.Group className="my-3" controlId="ci-r">
				<Form.Label>Cédula</Form.Label>
				<Form.Control
					onChange={(e) => {
						onInputChangeRepresentative(e);

						clearTimeout(busquedaTimeout);

						setBusquedaTimeout(
							setTimeout(async () => {
								try {
									const res = await consultCI({ ci: e.target.value });
									const { data } = res;

									if (!data) return;

									if (data.id) {
										data.dateBirth = new Date(data.dateBirth);

										console.log(data);

										setnameSugerido("");

										return setRepresentativeData(data);
									}

									setnameSugerido(data);
								} catch (error) {
									setnameSugerido("");
									console.log(error);
								}
							}, 1500)
						);
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
					placeholder="Nombre y apellidos"
					autoComplete="none"
					list="nameSugerido"
					required
				/>
				<Form.Text
					className="text-muted clic"
					onClick={() =>
						onInputChangeRepresentative({
							target: { name: "name", value: nameSugerido },
						})
					}
				>
					{nameSugerido}
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="dateBirth-r">
				<Form.Label>Fecha de nacimiento</Form.Label>

				<DatePicker
					className="form-control"
					selected={representativeData.dateBirth}
					onChange={(date) => {
						let edad = calculateAge(date);

						if (typeof edad === "number" && edad >= 0) {
							console.log(edad);
							setRepresentativeData({
								...representativeData,
								dateBirth: date,
								age: edad,
							});
						} else {
							setRepresentativeData({ ...representativeData, dateBirth: date });
						}

						// setStartDate(date)
					}}
					peekNextMonth
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
					required
				/>
			</Form.Group>

			{/* *********************  edad ************************/}

			<Form.Group className="mb-3" controlId="age-r">
				<Form.Label>Edad</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="number"
					name="age"
					value={representativeData.age}
					placeholder="opcional"
					autoComplete="none"
					required
				/>
			</Form.Group>

			{/* *********************  numero de telefono ************************/}

			<Form.Group className="mb-3" controlId="phoneNumber">
				<Form.Label>Número de teléfono</Form.Label>
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
				<Form.Label>Correo electrónico</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="email"
					name="email"
					value={representativeData.email}
					placeholder="ejemplo@gmail.com"
					autoComplete="none"
				/>
			</Form.Group>

			{/* *********************  Direccion ************************/}

			<Form.Group className="mb-3" controlId="address">
				<Form.Label>Dirección</Form.Label>
				<Form.Control
					onChange={onInputChangeRepresentative}
					type="text"
					name="address"
					value={representativeData.address}
					placeholder=""
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
