import {
	Form,
	Button,
	InputGroup,
	Label,
	Input,
	FormFeedback,
	FormGroup,
} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClear, AiOutlineSearch } from "react-icons/ai";
import { CiSliderHorizontal } from "react-icons/ci";
import { BiFilterAlt } from "react-icons/bi";

import PatientContext from "../context/PatientContext";
import RangeSlider from "../../UI/components/RangeSlider";

import style from "./PatientSeachForm.module.scss";
import { getPatientSearchLimitsRequest } from "../../api/patients";
import { AddressInputs } from "./AddressInputs";

export function PatientSeachForm({ makeQuery, queryObj, limits }) {
	const {
		setPatientList_By_Query,
		setQueryObj,
		setInQuery,
		settings,
		setSettings,
	} = useContext(PatientContext);

	const initialValues = {
		search: "",
		age: "",
		minAge: limits.age.min,
		maxAge: limits.age.max,

		historyNumber: "",
		minHistoryNumber: limits.historyNumber.min,
		maxHistoryNumber: limits.historyNumber.max,

		height: "",
		minHeight: limits.height.min,
		maxHeight: limits.height.max,

		weight: "",
		minWeight: limits.weight.min,
		maxWeight: limits.weight.max,

		address: {
			id_estado: "",
			id_municipio: "",
			id_parroquia: "",
			id_ciudad: "",
			dir: "",
		},
	};

	const formik = useFormik({
		initialValues: queryObj || initialValues,

		validationSchema: Yup.object({
			search: Yup.string(),
		}),
	});

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = formik.values;

		console.log(formData);

		const query = settings.querySimple
			? simpleQuery(formData)
			: avanzadeQuery(formData);

		setInQuery(true);
		setQueryObj(formik.values);
		makeQuery(query);
	};

	const simpleQuery = (formData) => {
		const query = {};
		if (settings.byHistoryNumber) {
			query.historyNumber = formData.search;
		} else {
			query.name = formData.search;
			query.ci = formData.search;
		}

		return query;
	};

	const avanzadeQuery = (formData) => {
		const query = { ...formData, search: undefined };
		if (settings.ageRange) query.age = undefined;
		if (settings.heightRange) query.height = undefined;
		if (settings.weightRange) query.weight = undefined;
		if (settings.historyNumberRange) query.historyNumber = undefined;

		// todo verificar que los valores exactos no sean "" vacio

		return query;
	};

	const resetForm = () => {
		formik.resetForm({ values: initialValues });
		setSettings({ ...settings, querySimple: true });

		setQueryObj(null);
		setInQuery(false);
		setPatientList_By_Query([]);
	};

	return (
		<>
			<Form onSubmit={onSubmit} className="my-3">
				{/* busqueda simple */}
				<FormGroup>
					<InputGroup>
						<Input
							placeholder="Buscar"
							aria-label="Buscar"
							name="search"
							value={formik.values.search}
							onChange={(e) => {
								const v = e.target.value;

								if (v.match(/\D/))
									setSettings({
										...settings,
										byHistoryNumber: false,
									});

								formik.handleChange(e);
							}}
							invalid={!!formik.errors.search}
							type="text"
							autoComplete="none"
						/>
						<Button type="button" onClick={() => resetForm()}>
							<AiOutlineClear />
						</Button>
						<Button
							type="button"
							onClick={() =>
								setSettings({ ...settings, querySimple: !settings.querySimple })
							}
						>
							<BiFilterAlt />
						</Button>
						<Button color="primary" type="submit">
							<AiOutlineSearch />
						</Button>
					</InputGroup>
					<FormFeedback>{formik.errors.search}</FormFeedback>
				</FormGroup>
				{settings.querySimple && (
					<FormGroup check inline>
						{/* toggle para buscar numero de historia en especifico */}
						<Input
							type="checkbox"
							name="byHistoryNumber"
							id="byHistoryNumber"
							checked={settings.byHistoryNumber}
							onChange={() => {
								setSettings({
									...settings,
									byHistoryNumber: !settings.byHistoryNumber,
								});

								if (
									!settings.byHistoryNumber &&
									formik.values.search.match(/\D/)
								)
									formik.setFieldValue("search", "0");
							}}
						/>
						<Label check for="byHistoryNumber">
							Número de historia
						</Label>
					</FormGroup>
				)}

				{!settings.querySimple && (
					<>
						{/* sexo */}
						<FormGroup>
							<Label>Sexo</Label>

							<Input
								bsSize={"sm"}
								name="sex"
								value={formik.values.sex}
								onChange={formik.handleChange}
								invalid={!!formik.errors.sex}
								type="select"
							>
								<option value="">Ambos</option>
								<option value="male">Masculino</option>
								<option value="female">Femenino</option>
							</Input>
						</FormGroup>
						{/* Edad */}
						<FormGroup>
							<div className={style.espaciado}>
								<Label>Edad</Label>
								<Button
									size="sm"
									type="button"
									onClick={() => {
										setSettings({ ...settings, ageRange: !settings.ageRange });
									}}
								>
									<CiSliderHorizontal />
								</Button>
							</div>
							{!settings.ageRange ? (
								<Input
									name="age"
									type="number"
									bsSize={"sm"}
									value={formik.values.age}
									onChange={formik.handleChange}
									placeholder="Escriba aqui"
									invalid={!!formik.errors.age}
									autoComplete="none"
								/>
							) : (
								<RangeSlider
									min={limits.age.min}
									max={limits.age.max}
									start={[formik.values.minAge, formik.values.maxAge]}
									step={1}
									onChange={(values) => {
										console.log(values);

										formik.setValues({
											...formik.values,
											minAge: values[0],
											maxAge: values[1],
										});
									}}
								/>
							)}
						</FormGroup>
						{/* Número de historia */}
						<FormGroup>
							<div className={style.espaciado}>
								<Label> Número de historia</Label>
								<Button
									size="sm"
									type="button"
									onClick={() => {
										setSettings({
											...settings,
											historyNumberRange: !settings.historyNumberRange,
										});
									}}
								>
									<CiSliderHorizontal />
								</Button>
							</div>
							{!settings.historyNumberRange ? (
								<Input
									name="historyNumber"
									type="number"
									bsSize={"sm"}
									value={formik.values.historyNumber}
									onChange={formik.handleChange}
									placeholder="Escriba aqui"
									invalid={!!formik.errors.historyNumber}
									autoComplete="none"
								/>
							) : (
								<RangeSlider
									min={limits.historyNumber.min}
									max={limits.historyNumber.max}
									start={[
										formik.values.minHistoryNumber,
										formik.values.maxHistoryNumber,
									]}
									step={1}
									onChange={(values) => {
										console.log(values);

										formik.setValues({
											...formik.values,
											minHistoryNumber: values[0],
											maxHistoryNumber: values[1],
										});
									}}
								/>
							)}
						</FormGroup>
						{/* Altura */}
						<FormGroup>
							<div className={style.espaciado}>
								<Label>Altura</Label>
								<Button
									size="sm"
									type="button"
									onClick={() => {
										setSettings({
											...settings,
											heightRange: !settings.heightRange,
										});
									}}
								>
									<CiSliderHorizontal />
								</Button>
							</div>
							{!settings.heightRange ? (
								<Input
									name="height"
									type="number"
									bsSize={"sm"}
									value={formik.values.height}
									onChange={formik.handleChange}
									placeholder="Escriba aqui"
									invalid={!!formik.errors.height}
									autoComplete="none"
								/>
							) : (
								<RangeSlider
									min={limits.height.min}
									max={limits.height.max}
									start={[formik.values.minHeight, formik.values.maxHeight]}
									step={1}
									onChange={(values) => {
										console.log(values);

										formik.setValues({
											...formik.values,
											minHeight: values[0],
											maxHeight: values[1],
										});
									}}
								/>
							)}
						</FormGroup>
						{/* peso */}
						<FormGroup>
							<div className={style.espaciado}>
								<Label>Peso</Label>
								<Button
									size="sm"
									type="button"
									onClick={() => {
										setSettings({
											...settings,
											weightRange: !settings.weightRange,
										});
									}}
								>
									<CiSliderHorizontal />
								</Button>
							</div>
							{!settings.weightRange ? (
								<Input
									name="weight"
									type="number"
									bsSize={"sm"}
									value={formik.values.weight}
									onChange={formik.handleChange}
									placeholder="Escriba aqui"
									invalid={!!formik.errors.weight}
									autoComplete="none"
								/>
							) : (
								<RangeSlider
									min={limits.weight.min}
									max={limits.weight.max}
									start={[formik.values.minWeight, formik.values.maxWeight]}
									step={1}
									onChange={(values) => {
										console.log(values);

										formik.setValues({
											...formik.values,
											minWeight: values[0],
											maxWeight: values[1],
										});
									}}
								/>
							)}
						</FormGroup>
						{/* Procedencia */}
						<FormGroup>
							<Label>Procedencia</Label>
							<Input
								name="procedenciaType"
								type="select"
								bsSize={"sm"}
								value={formik.values.procedenciaType}
								onChange={formik.handleChange}
								placeholder="Escriba aqui"
								invalid={!!formik.errors.procedenciaType}
								autoComplete="none"
							>
								<option value="">Todos</option>
								{limits.procedenciaType.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</Input>
						</FormGroup>

						{/* procedenciaDiagnostico */}
						<FormGroup>
							<Label>Diagnóstico de procedencia</Label>
							<Input
								name="procedenciaDiagnostico"
								type="select"
								bsSize={"sm"}
								value={formik.values.procedenciaDiagnostico}
								onChange={formik.handleChange}
								placeholder="Escriba aqui"
								invalid={!!formik.errors.procedenciaDiagnostico}
								autoComplete="none"
							>
								<option value="">Todos</option>
								{limits.procedenciaDiagnostico.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</Input>
						</FormGroup>

						{/* diagnostico */}

						<FormGroup>
							<Label>Diagnóstico de FUPAGUA</Label>
							<Input
								name="diagnostico"
								type="select"
								bsSize={"sm"}
								value={formik.values.diagnostico}
								onChange={formik.handleChange}
								placeholder="Escriba aqui"
								invalid={!!formik.errors.diagnostico}
								autoComplete="none"
							>
								<option value="">Todos</option>
								{limits.diagnostico.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</Input>
						</FormGroup>

						<AddressInputs
							onHanddleChange={(value) =>
								formik.setFieldValue("address", value)
							}
							value={formik.values.address}
							search={true}
						/>
					</>
				)}
			</Form>
		</>
	);
}
