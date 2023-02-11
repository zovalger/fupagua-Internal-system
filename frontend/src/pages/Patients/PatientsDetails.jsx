import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import toast from "react-hot-toast";

import Nav from "../../components/common/Nav";
import { MdOutlineEdit } from "react-icons/md";
import { getPatientRequest } from "../../api/patients";
import { calculateAge } from "../../utility";

export function PatientsDetails() {
	const navigate = useNavigate();
	const params = useParams();
	const [patientData, setPatientData] = useState("");
	const [representativeData, setRepresentativeData] = useState("");

	const getData = async () => {
		try {
			const res = await getPatientRequest(params.id);

			console.log(res);

			const patient = res.data;

			const { representative } = patient;

			if (patient.dateBirth) patient.dateBirth = new Date(patient.dateBirth);
			setPatientData(patient);

			if (representative) {
				if (representative.dateBirth)
					representative.dateBirth = new Date(representative.dateBirth);

				setRepresentativeData(representative);
			}
		} catch (error) {
			navigate({ to: "/pacientes" });
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Nav
				leftIcon={
					<button
						onClick={() => {
							navigate("/pacientes");
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={
					patientData
						? `numero de historia: ${patientData.historyNumber}`
						: `0000000`
				}
				rightButtons={
					<Link to={`/pacientes/editar/${params.id}`}>
						<button>
							<MdOutlineEdit />
						</button>
					</Link>
				}
			/>

			<div className="container scrollInSpacework">
				{patientData ? (
					<>
						<h3>{patientData.name}</h3>
						<div>
							Fecha de nacimiento: {patientData.dateBirth.toLocaleDateString()}
						</div>
						<div>Edad: {calculateAge(patientData.dateBirth)}</div>
						<div>Cedula: {patientData.ci ? patientData.ci : "No posee"}</div>
						<div>Numero de Historia: {patientData.historyNumber}</div>
						<div>
							Sexo: {patientData.sex === "male" ? "Masculino" : "Femenino"}
						</div>
						<div>
							Peso:{" "}
							{patientData.weight ? `${patientData.weight} Kg` : "No medido"}
						</div>
						<div>
							Estatura:{" "}
							{patientData.height ? `${patientData.height} m` : "No medido"}
						</div>
						<div>
							Escolaridad:{" "}
							{patientData.scholarship
								? patientData.scholarship
								: "No Indicado"}
						</div>

						{/* datos del representante */}
						<h5 className="mt-4">Representante</h5>

						{representativeData ? (
							<>
								{representativeData.name}
								<div>Cedula: {representativeData.ci}</div>
								<div>
									Fecha de nacimiento:{" "}
									{representativeData.dateBirth.toLocaleDateString()}
								</div>
								<div>Edad: {calculateAge(representativeData.dateBirth)}</div>
								<div>Numero Telefonico: {representativeData.phoneNumber}</div>
								<div>
									Correo electronico:{" "}
									{representativeData.email
										? representativeData.email
										: "No indicado"}
								</div>

								<div>
									Dirección:{" "}
									{representativeData.address
										? representativeData.address
										: "No indicado"}{" "}
								</div>
							</>
						) : (
							<div>No asignado</div>
						)}
					</>
				) : null}
			</div>
		</>
	);
}
