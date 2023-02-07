import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiTrash } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../components/common/Nav";

import { FormPatient } from "../../components/Patients/FormPatient";
import {
	createPatientRequest,
	deletePatientRequest,
	updatePatientRequest,
} from "../../api/patients";

export function PatientsFormPatient({ create }) {
	const navigate = useNavigate();
	const params = useParams();

	const [patientData, setPatientData] = useState({
		name: "",
		dateBirth: "",
		ci: "",
		historyNumber: "",
		age: "",

		// male female
		sex: "male",

		weight: "",
		scholarship: "",
	});

	const [representativeData, setRepresentativeData] = useState({
		name: "",
		ci: "",
		age: "",
		dateBirth: "",
		email: "",
		phoneNumber: "",
	});

	const [isSubmiting, setIsSubmitin] = useState(false);

	useEffect(() => {
		// si estamos en el modo crear no se ejecuta, si no buscamos los datos del registro
		// if (create) return;
		// const fillInputs = async () => {
		// 	const res = await getBookRequest(params.id);
		// 	setBookData(res.data);
		// 	setFichaData(res.data.bookfichas);
		// };
		// fillInputs();
	}, []);

	const onSubmit = async (e, v) => {
		e.preventDefault();

		if (isSubmiting) return;

		setIsSubmitin(true);

		const data = { patient: patientData, representative: representativeData };

		try {
			const myPromise = create
				? createPatientRequest(data)
				: await updatePatientRequest(params.id, data);

			toast.promise(myPromise, {
				loading: "guardando",
				success: (res) => {
					console.log(res);

					setTimeout(() => {
						navigate("/pacientes");
					}, 500);

					return create ? "Nuevo paciente añadido" : "cambios guardados";
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
	};

	const onInputChangePatient = ({ target: { name, value } }) =>{

		console.log(name,value);
		setPatientData({
			...patientData,
			[name]: value,
		});}

	const onInputChangeRepresentative = ({ target: { name, value } }) =>{
				console.log(name,value);

		setRepresentativeData({
			...representativeData,
			[name]: value,
		});}

	const deleteItem = async () => {
		if (!window.confirm("Seguro que quiere eliminar el libro?")) return;

		try {
			// const d = confirm("esta seguro de elminar el libro?");

			const myPromise = deletePatientRequest(params.id);

			toast.promise(myPromise, {
				loading: "eliminando",
				success: (res) => {
					console.log(res);
					setTimeout(() => {
						navigate("/biblioteca");
					}, 1000);
					// navigate("/biblioteca");
					return "libro eliminado";
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
			<Nav
				leftIcon={
					<button
						onClick={() => {
							if (
								window.confirm(
									"seguro que quiere salir? se perderan todos los cambios realizados"
								)
							)
								navigate("/pacientes");
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={create ? "Añadir paciente" : "Editar paciente"}
				// rightButtons={

				// }
			/>

			<div className="container scrollInSpacework">
				{/* {!create ? <BookImageSlider book={book} /> : null} */}

				<FormPatient
					patientData={patientData}
					representativeData={representativeData}
					create={create}
					onSubmit={onSubmit}
					onInputChangePatient={onInputChangePatient}
					onInputChangeRepresentative={onInputChangeRepresentative}
					// setBookData={setPatientData}
					deleteItem={deleteItem}
				/>
			</div>
		</>
	);
}
