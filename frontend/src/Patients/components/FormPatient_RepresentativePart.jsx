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
	FormText,
	Button,
} from "reactstrap";
import es from "date-fns/locale/es";
import { ListItemTextAndInput } from "./ListItemTextAndInput";
import { consultCI } from "../../api/utility";
import { useState } from "react";

export function FormPatientRepresentativePart({
	formik,
	onChangeDate,
	representativeOptional,
	setRepresentativeOptional,
}) {
	const [nameSugerido, setnameSugerido] = useState();

	const [busquedaTimeout, setBusquedaTimeout] = useState();

	const onChangeCIRepresentative = ({ target: { name, value } }) => {
		formik.setFieldValue("ci_Representative", value);

		clearTimeout(busquedaTimeout);

		setBusquedaTimeout(
			setTimeout(async () => {
				try {
					const { data } = await consultCI({ ci: value });

					if (!data) return;

					if (data.id) {
						console.log(data);

						setnameSugerido("");

						return destructureRepresentativeData(data);
					}

					setnameSugerido(data);
				} catch (error) {
					setnameSugerido("");
					console.log(error);
				}
			}, 1500)
		);
	};

	const destructureRepresentativeData = (d) => {
		// si no tenemos datos no hacemos nada
		if (!d) return;

		console.log("destructurando representante: ", d);

		const { id, name, ci, age, dateBirth, email, phoneNumber, address } = d;

		formik.setValues({
			...formik.values,
			id_Representative: id,
			name_Representative: name,
			ci_Representative: ci,
			age_Representative: age,
			dateBirth_Representative: new Date(dateBirth),
			email,
			phoneNumber,
			address,
		});
	};

	const blur = (e) => e.target.blur();

	return (
		<>
			<h3>
				Representante{" "}
				<Button
					type="button"
					className=""
					onClick={() => setRepresentativeOptional(!representativeOptional)}
				>
					Opcional
				</Button>
			</h3>

			{representativeOptional || (
				<>
					{/* *********************       Cedula        ************************/}
					<FormGroup>
						<Label>Cédula</Label>
						<Input
							name="ci_Representative"
							value={formik.values.ci_Representative}
							onChange={onChangeCIRepresentative}
							placeholder="0000000"
							invalid={!!formik.errors.ci_Representative}
							type="number"
							autoComplete="none"
							onWheel={blur}
						/>
						<FormFeedback>{formik.errors.ci_Representative}</FormFeedback>
					</FormGroup>
					{/* *********************   Nombre completo   ************************/}
					<FormGroup>
						<Label>Nombre completo</Label>
						<Input
							name="name_Representative"
							value={formik.values.name_Representative}
							onChange={formik.handleChange}
							invalid={!!formik.errors.name_Representative}
							autoComplete="none"
							list="nameSugerido"
						/>
						<FormText
							onClick={() =>
								formik.setFieldValue("name_Representative", nameSugerido)
							}
						>
							{nameSugerido}
						</FormText>
						<FormFeedback>{formik.errors.name_Representative}</FormFeedback>
					</FormGroup>
					{/* *********************  Fecha de nacimiento  ************************/}
					<FormGroup>
						<Label>Fecha de nacimiento</Label>
						<DatePicker
							locale={es}
							className="form-control"
							selected={formik.values.dateBirth_Representative}
							onChange={(date) =>
								onChangeDate(date, {
									from: "dateBirth_Representative",
									to: "age_Representative",
								})
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
							invalid={!!formik.errors.dateBirth_Representative}
							hidden
						/>

						<FormFeedback>
							{formik.errors.dateBirth_Representative}
						</FormFeedback>
					</FormGroup>
					{/* *********************  edad ************************/}
					<FormGroup>
						<Label>Edad</Label>
						<Input
							name="age_Representative"
							value={formik.values.age_Representative}
							onChange={formik.handleChange}
							placeholder="00"
							invalid={!!formik.errors.age_Representative}
							type="number"
							readOnly
						/>
						<FormFeedback>{formik.errors.age_Representative}</FormFeedback>
					</FormGroup>
					{/* *********************  numero de telefono ************************/}
					<FormGroup>
						<Label>Número de teléfono</Label>
						<Input
							name="phoneNumber"
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
							invalid={!!formik.errors.phoneNumber}
							type="text"
							autoComplete="none"
							placeholder="0000-000.00.00"
						/>
						<FormFeedback>{formik.errors.phoneNumber}</FormFeedback>
					</FormGroup>
					{/* *********************  email ************************/}
					<FormGroup>
						<Label>Correo electrónico</Label>
						<Input
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							invalid={!!formik.errors.email}
							type="text"
							autoComplete="none"
							placeholder="ejemplo@gmail.com"
						/>
						<FormFeedback>{formik.errors.email}</FormFeedback>
					</FormGroup>
					{/* *********************  Direccion ************************/}
					{/* <FormGroup>
						<Label>Dirección</Label>
						<Input
							name="address"
							value={formik.values.address}
							onChange={formik.handleChange}
							invalid={!!formik.errors.address}
							type="textarea"
							autoComplete="none"
						/>
						<FormFeedback>{formik.errors.address}</FormFeedback>
					</FormGroup> */}
					<datalist id="nameSugerido">
						<option value={nameSugerido} />
					</datalist>
				</>
			)}
		</>
	);
}
