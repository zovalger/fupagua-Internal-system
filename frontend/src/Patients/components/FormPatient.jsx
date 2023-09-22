import { useEffect, useState } from "react";
// import Button from "react-bootstrap/esm/Button";
import { BiTrash } from "react-icons/bi";
import { calculateAge } from "../../utility";
import "react-datepicker/dist/react-datepicker.css";
import {
	consultPatientHistoryNumberRequest,
	createPatientRequest,
	deletePatientRequest,
	getAllHistoryNumbersRegistedRequest,
	getPatientRequest,
	setAntFamiliarOfPatient,
	setAntParanatalOfPatient,
	setAntPostnatalOfPatient,
	setAntPrenatalesOfPatient,
	updatePatientRequest,
} from "../../api/patients";

// *******************************
// 					formik
// *******************************
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "reactstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormPatientPatientPart } from "./FormPatient_PatientPart";
import { FormPatientRepresentativePart } from "./FormPatient_RepresentativePart";

export function FormPatient({ id, create }) {
	const navigate = useNavigate();

	const [isSubmiting, setIsSubmitin] = useState(false);
	const [listHistoryNumbers, setListHistoryNumbers] = useState([]);
	const [representativeOptional, setRepresentativeOptional] = useState(false);

	useEffect(() => {
		getAllHistoryNumbersRegistedRequest()
			.then(({ data }) => setListHistoryNumbers(data))
			.catch((error) => console.log(error));

		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		if (!id) return;

		getPatientRequest(id).then((res) => restoreDataInInputs(res.data));
	}, []);

	const patientValidationPart = {
		name: Yup.string()
			.required("El nombre es obligatorio")
			.min(7, "El nombre es muy corto, Intente colocando también el apellido"),
		ci: Yup.number().positive("La cedula no debe ser un numero negativo o '0'"),
		dateBirth: Yup.date().max(
			new Date(Date.now()),
			"La fecha no debe ser mayor a la fecha de hoy"
		),
		age: Yup.number()
			.required("La edad es obligatoria")
			.positive("La edad no puede ser un numero negativo"),
		scholarship: Yup.string(),
		historyNumber: Yup.number()
			.required("El numero de historia es obligatorio")
			.positive("No debe ser negativo o cero")
			.test(
				"number",
				"Este numero de historia ya esta siendo usado por otro paciente",
				(value) => {
					let p = true;
					value = value ? value.toString() : "";

					listHistoryNumbers.map((item) => {
						if (item.historyNumber === value)
							if (item.id !== formik.values.id) p = false;

						return p;
					});

					return p;
				}
			),
	};

	// formik
	const formik = useFormik({
		initialValues: {
			name: "",
			ci: "",
			dateBirth: new Date(Date.now()),
			age: 1,
			sex: "male",
			scholarship: "",
			historyNumber: "",

			procedencia: "",
			diagnostico: "",
			// posiblemente quitarlo
			weight: "",
			height: "",

			antFamiliar: [],
			antParanatal: [],
			antPostnatal: [],
			antPrenatal: [],

			address: {
				id_estado: "",
				id_municipio: "",
				id_parroquia: "",
				id_ciudad: "",
				dir: "",
			},

			procedenciaType: "",
			procedenciaDiagnostico: "",
			phoneNumberPatient: "",

			// representante
			name_Representative: "",
			ci_Representative: "",
			dateBirth_Representative: new Date(Date.now()),
			age_Representative: 1,
			email: "",
			phoneNumber: "",

			// address: "",
		},
		validationSchema: representativeOptional
			? Yup.object(patientValidationPart)
			: Yup.object({
					...patientValidationPart,

					// validaciones del representante
					name_Representative: Yup.string()
						.required("El nombre es obligatorio")
						.min(
							7,
							"El nombre es muy corto, Intenta colocando también el apellido"
						),
					ci_Representative: Yup.number()
						.required("La cedula del representante es obligatora")
						.positive("La cedula no debe ser un numero negativo o '0'"),
					dateBirth_Representative: Yup.date().max(
						new Date(Date.now()),
						"La fecha no debe ser mayor a la fecha de hoy"
					),
					age_Representative: Yup.number()
						.required("La edad es obligatoria")
						.positive("La edad no puede ser un numero negativo"),
					email: Yup.string().email(
						"El texto introducido no tiene el formato de un correo electrónico"
					),
					phoneNumber: Yup.string(),
			  }),
		onSubmit: (formData) => {
			console.log(formData);

			const data = estructureDataToSend(formData);
			const { antParanatal, antPostnatal, antPrenatal, antFamiliar } = formData;

			console.log(data);

			if (isSubmiting) return;

			setIsSubmitin(true);

			try {
				const saveData = async () => {
					const res = id
						? await updatePatientRequest(id, data)
						: await createPatientRequest(data);

					await setAntFamiliarOfPatient(res.data.id, antFamiliar);
					await setAntParanatalOfPatient(res.data.id, antParanatal);
					await setAntPostnatalOfPatient(res.data.id, antPostnatal);
					await setAntPrenatalesOfPatient(res.data.id, antPrenatal);
				};
				const myPromise = saveData();

				toast.promise(myPromise, {
					loading: "Guardando",
					success: (res) => {
						setTimeout(() => {
							navigate("/pacientes");
						}, 500);
						return id ? "cambios guardados" : "Nuevo paciente añadido";
					},
					error: (err) => {
						setIsSubmitin(false);
						return `This just happened: ${err.toString()}`;
					},
				});
			} catch (error) {
				setIsSubmitin(false);
				console.log(error);
			}
		},
	});

	const onChangeDate = (date, { from, to }) => {
		let edad = calculateAge(date);

		if (typeof edad === "number" && edad >= 0)
			return formik.setValues({ ...formik.values, [from]: date, [to]: edad });

		formik.setFieldValue(from, date);
	};

	const restoreDataInInputs = (patient) => {
		if (!patient.id) return;
		// formateamos la fecha para que date picker la entienda
		patient.dateBirth = new Date(patient.dateBirth);

		// si no tenemos datos del representante solo ponemos el del paciente
		if (!patient.representative) {
			setRepresentativeOptional(true);
			return formik.setValues({ ...patient });
		}

		// destructuramos los datos del representante
		const { id, name, ci, age, dateBirth, email, phoneNumber, address } =
			patient.representative;

		// asignamos los datos del paciente junto con los del representante en formik
		formik.setValues({
			...patient,
			id_Representative: id,
			name_Representative: name,
			ci_Representative: ci,
			age_Representative: age,
			dateBirth_Representative: new Date(dateBirth),
			email,
			phoneNumber,
			address: patient.address || address,
		});
	};

	const estructureDataToSend = (d) => {
		// extraemos los datos del representante
		const {
			id_Representative,
			name_Representative,
			ci_Representative,
			age_Representative,
			dateBirth_Representative,
			email,
			phoneNumber,
			// address,
		} = d;

		// lo colocamos en un objeto aparte

		const representative = {
			id: id_Representative,
			name: name_Representative,
			ci: ci_Representative,
			age: age_Representative,
			dateBirth: dateBirth_Representative,
			email,
			phoneNumber,
			// address,
		};

		// formateamos para enviarlo al servidor
		return {
			patient: d,
			representative: representativeOptional ? null : representative,
		};
	};

	const deleteItem = async () => {
		if (!window.confirm("Seguro que quiere eliminar el registro?")) return;

		try {
			const myPromise = deletePatientRequest(id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/pacientes");
					}, 1000);
					// navigate("/biblioteca");
					return "Registro eliminado";
				},
				error: (err) => `This just happened: ${err.toString()}`,
			});
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};

	return (
		<>
			<Form onSubmit={formik.handleSubmit}>
				<FormPatientPatientPart formik={formik} onChangeDate={onChangeDate} />

				<FormPatientRepresentativePart
					formik={formik}
					onChangeDate={onChangeDate}
					representativeOptional={representativeOptional}
					setRepresentativeOptional={setRepresentativeOptional}
				/>

				{/* *********************   controles   ************************/}

				<Button color="primary" type="submit" className="w-100 mt-4">
					Guardar
				</Button>

				{id && (
					<Button
						color="danger"
						type="button"
						onClick={deleteItem}
						className="w-100 mt-3"
					>
						<BiTrash />
					</Button>
				)}
			</Form>
		</>
	);
}
