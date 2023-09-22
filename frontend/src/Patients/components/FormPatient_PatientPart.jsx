import { calculateAge } from "../../utility";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
	Input,
	Label,
	FormGroup,
	FormFeedback,
	InputGroup,
	InputGroupText,
	Row,
	Col,
} from "reactstrap";
import es from "date-fns/locale/es";
import { ListItemTextAndInput } from "./ListItemTextAndInput";
import { useEffect, useState } from "react";
import {
	getAntFamiliarList,
	getAntParanatalList,
	getAntPostnatalList,
	getAntPrenatalesList,
} from "../../api/patients";
import { ListItemTextAndTwoInputs } from "./ListItemTextAndTwoInputs";
import { AddressInputs } from "./AddressInputs";
import procedenciaCategory from "../../config/procedenciaCategory";

export function FormPatientPatientPart({ formik }) {
	const [autocompleteAnt, setAutocompleteAnt] = useState({
		antFamiliar: { incidencias: [], parientes: [] },
		antPrenatal: [],
		antParanatal: [],
		antPostnatal: [],
	});

	useEffect(() => {
		getAutocompleteLists();
	}, []);

	const getAutocompleteLists = async () => {
		try {
			const { data: antFamiliar } = await getAntFamiliarList();
			const { data: antPrenatal } = await getAntParanatalList();
			const { data: antParanatal } = await getAntPostnatalList();
			const { data: antPostnatal } = await getAntPrenatalesList();

			setAutocompleteAnt({
				antFamiliar,
				antPrenatal,
				antParanatal,
				antPostnatal,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeDate = (date, { from, to }) => {
		let edad = calculateAge(date);

		if (typeof edad === "number" && edad >= 0)
			return formik.setValues({ ...formik.values, [from]: date, [to]: edad });

		formik.setFieldValue(from, date);
	};

	const blur = (e) => e.target.blur();

	return (
		<>
			<h3>Paciente</h3>
			{/* *********************   Nombre completo   ************************/}
			<FormGroup>
				<Label>Nombre completo</Label>
				<Input
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					placeholder="Nombres y apellidos"
					invalid={!!formik.errors.name}
					autoComplete="none"
				/>
				<FormFeedback>{formik.errors.name}</FormFeedback>
			</FormGroup>
			{/* *********************       Cedula        ************************/}
			<FormGroup>
				<Label>Cédula</Label>
				<Input
					name="ci"
					value={formik.values.ci}
					onChange={formik.handleChange}
					placeholder="opcional"
					invalid={!!formik.errors.ci}
					type="number"
					autoComplete="none"
					onWheel={blur}
				/>
				<FormFeedback>{formik.errors.ci}</FormFeedback>
			</FormGroup>
			{/* *********************  Fecha de nacimiento  ************************/}
			<FormGroup>
				<Label>Fecha de nacimiento</Label>
				<DatePicker
					locale={es}
					className="form-control"
					selected={formik.values.dateBirth}
					onChange={(date) =>
						onChangeDate(date, { from: "dateBirth", to: "age" })
					}
					// peekNextMonth
					showMonthDropdown
					showYearDropdown
					dropdownMode="select"
					dateFormat="dd/MM/yyyy"
				/>

				{/* input para poner la funcionalidad de feedback de boostrap */}
				<Input
					// value={formik.values.dateBirth}
					invalid={!!formik.errors.dateBirth}
					hidden
				/>

				<FormFeedback>{formik.errors.dateBirth}</FormFeedback>
			</FormGroup>
			{/* *********************  Edad  ************************/}
			<FormGroup>
				<Label>Edad</Label>
				<Input
					name="age"
					value={formik.values.age}
					onChange={formik.handleChange}
					placeholder="00"
					invalid={!!formik.errors.age}
					type="number"
					readOnly
				/>
				<FormFeedback>{formik.errors.age}</FormFeedback>
			</FormGroup>
			{/* *********************  Sexo  ************************/}
			<FormGroup>
				<Label>Sexo</Label>
				<Input
					name="sex"
					value={formik.values.sex}
					onChange={formik.handleChange}
					invalid={!!formik.errors.sex}
					type="select"
				>
					<option value="male">Masculino</option>
					<option value="female">Femenino</option>
				</Input>
				<FormFeedback>{formik.errors.sex}</FormFeedback>
			</FormGroup>
			{/* *********************  Escolaridad  ************************/}
			<FormGroup>
				<Label>Escolaridad</Label>
				<Input
					name="scholarship"
					value={formik.values.scholarship}
					onChange={formik.handleChange}
					invalid={!!formik.errors.scholarship}
					placeholder="preescolar"
				/>
				<FormFeedback>{formik.errors.scholarship}</FormFeedback>
			</FormGroup>
			{/* *********************  Peso  ************************/}
			<FormGroup>
				<Label>Peso</Label>
				<InputGroup>
					<Input
						name="weight"
						value={formik.values.weight}
						onChange={formik.handleChange}
						invalid={!!formik.errors.weight}
						placeholder="00.0"
						step="any"
						type="number"
						onWheel={blur}
					/>
					<InputGroupText>Kg</InputGroupText>
				</InputGroup>
				<FormFeedback>{formik.errors.weight}</FormFeedback>
			</FormGroup>
			{/* *********************  Estatura  ************************/}
			<FormGroup>
				<Label>Estatura</Label>

				<InputGroup>
					<Input
						name="height"
						value={formik.values.height}
						onChange={formik.handleChange}
						invalid={!!formik.errors.height}
						placeholder="00.0"
						step="any"
						type="number"
						onWheel={blur}
					/>
					<InputGroupText>cm</InputGroupText>
				</InputGroup>
				<FormFeedback>{formik.errors.height}</FormFeedback>
			</FormGroup>
			{/* *********************   Numero de historia   ************************/}
			<FormGroup>
				<Label>Número de historia</Label>
				<Input
					name="historyNumber"
					value={formik.values.historyNumber}
					onChange={formik.handleChange}
					invalid={!!formik.errors.historyNumber}
					type="number"
					autoComplete="none"
					placeholder="000"
					onWheel={blur}
				/>
				<FormFeedback>{formik.errors.historyNumber}</FormFeedback>
			</FormGroup>

			<ListItemTextAndTwoInputs
				onHanddleChange={(value) => formik.setFieldValue("antFamiliar", value)}
				title={"Antecedentes Familiares"}
				value={formik.values.antFamiliar}
				autoCompleteData={autocompleteAnt.antFamiliar}
			/>
			<ListItemTextAndInput
				onHanddleChange={(value) => formik.setFieldValue("antPrenatal", value)}
				title={"Antecedentes Prenatales"}
				value={formik.values.antPrenatal}
				autoCompleteData={autocompleteAnt.antPrenatal}
			/>
			<ListItemTextAndInput
				onHanddleChange={(value) => formik.setFieldValue("antParanatal", value)}
				title={"Antecedentes Paranatal"}
				value={formik.values.antParanatal}
				autoCompleteData={autocompleteAnt.antParanatal}
			/>
			<ListItemTextAndInput
				onHanddleChange={(value) => formik.setFieldValue("antPostnatal", value)}
				title={"Antecedentes Postnatal"}
				value={formik.values.antPostnatal}
				autoCompleteData={autocompleteAnt.antPostnatal}
			/>

			<Row>
				<Col md={6} sm={6}>
					<FormGroup>
						<Label>Categoria de Procedencia </Label>
						<Input
							name="procedenciaType"
							value={formik.values.procedenciaType}
							onChange={(e) => {
								console.log(e.target.value);
								formik.handleChange(e);
							}}
							invalid={!!formik.errors.procedenciaType}
							type="select"
						>
							<option value="">Seleccione uno</option>
							{procedenciaCategory.map((i) => (
								<option key={i}>{i}</option>
							))}
						</Input>
						<FormFeedback>{formik.errors.procedenciaType}</FormFeedback>
					</FormGroup>
				</Col>
				<Col md={6} sm={6}>
					<FormGroup>
						<Label>Procedencia</Label>
						<Input
							name="procedencia"
							value={formik.values.procedencia}
							onChange={formik.handleChange}
							invalid={!!formik.errors.procedencia}
							type="text"
						/>
						<FormFeedback>{formik.errors.procedencia}</FormFeedback>
					</FormGroup>
				</Col>

				<Col md={12} sm={12}>
					<FormGroup>
						<Label>Diagnóstico de procedencia</Label>
						<Input
							name="procedenciaDiagnostico"
							value={formik.values.procedenciaDiagnostico}
							onChange={formik.handleChange}
							invalid={!!formik.errors.procedenciaDiagnostico}
							type="text"
						/>
						<FormFeedback>{formik.errors.procedenciaDiagnostico}</FormFeedback>
					</FormGroup>
				</Col>

				<Col md={12} sm={12}>
					<FormGroup>
						<Label>Diagnóstico de Fupagua</Label>
						<Input
							name="diagnostico"
							value={formik.values.diagnostico}
							onChange={formik.handleChange}
							invalid={!!formik.errors.diagnostico}
							type="text"
						/>
						<FormFeedback>{formik.errors.diagnostico}</FormFeedback>
					</FormGroup>
				</Col>
			</Row>

			<AddressInputs
				onHanddleChange={(value) => formik.setFieldValue("address", value)}
				value={formik.values.address}
			/>

			<FormGroup>
				<Label>Número de teléfono</Label>
				<Input
					name="phoneNumberPatient"
					value={formik.values.phoneNumberPatient}
					onChange={formik.handleChange}
					invalid={!!formik.errors.phoneNumberPatient}
					type="text"
					autoComplete="none"
					placeholder="0000-000.00.00"
				/>
				<FormFeedback>{formik.errors.phoneNumberPatient}</FormFeedback>
			</FormGroup>
		</>
	);
}
