import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

import Nav from "../../UI/components/Nav";
import { MdOutlineEdit } from "react-icons/md";
import { getPatientRequest } from "../../api/patients";
import { calculateAge } from "../../utility";
import UserContext from "../../context/UserContext";

export function PatientsDetails() {
	const { user } = useContext(UserContext);

	const navigate = useNavigate();
	const params = useParams();
	const [patientData, setPatientData] = useState("");
	const [antPatient, setAntPatient] = useState({
		antFamiliar: [],
		antParanatal: [],
		antPostnatal: [],
		antPrenatal: [],
	});
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
						? `Número de historia: ${patientData.historyNumber}`
						: `0000000`
				}
				rightButtons={
					<>
						{user && user.permissions.includes("patientEdit") && (
							<Link to={`/pacientes/editar/${params.id}`}>
								<button>
									<MdOutlineEdit />
								</button>
							</Link>
						)}
					</>
				}
			/>

			<div className="scrollInSpacework">
				<div className="container">
					{patientData && (
						<>
							<h3 className="mt-4">{patientData.name}</h3>
							<div>
								Fecha de nacimiento:{" "}
								{patientData.dateBirth.toLocaleDateString()}
							</div>
							<div>Edad: {calculateAge(patientData.dateBirth)}</div>
							<div>Cedula: {patientData.ci ? patientData.ci : "No posee"}</div>
							<div>Número de historia: {patientData.historyNumber}</div>
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
							<div>
								Procedencia:{" "}
								{`${patientData.procedenciaType} ${patientData.procedencia}`}
							</div>
							<div>
								Diagnóstico de procedencia: {patientData.procedenciaDiagnostico}
							</div>
							<div>Diagnóstico de FUPAGUA: {patientData.diagnostico}</div>

							<hr />
							<div>Numero Telefonico: {patientData.phoneNumberPatient}</div>
							<div>
								Dirección:{" "}
								{patientData.address
									? (() => {
											const { dir, ciudade, estado, parroquia, municipio } =
												patientData.address;

											return `Estado ${estado.estado}, Municipio ${municipio.municipio}, Parroquia ${parroquia.parroquia}, Ciudad ${ciudade.ciudad}, ${dir}`;
									  })()
									: representativeData.address
									? representativeData.address
									: "No indicado"}
							</div>
							<hr />
							<h6>Antecedente Familiares</h6>
							<ul>
								{patientData.antFamiliar.map((ant) => (
									<li key={ant.id}>
										{ant.pariente.name}: {ant.incidencia.name}
									</li>
								))}
							</ul>
							<h6>Antecedente Paranatal</h6>
							<ul>
								{patientData.antParanatal.map((ant) => (
									<li key={ant.id}> {ant.name} </li>
								))}
							</ul>
							<h6>Antecedente Prenatal</h6>
							<ul>
								{patientData.antPrenatal.map((ant) => (
									<li key={ant.id}> {ant.name} </li>
								))}
							</ul>
							<h6>Antecedente Postnatal</h6>
							<ul>
								{patientData.antPostnatal.map((ant) => (
									<li key={ant.id}> {ant.name} </li>
								))}
							</ul>
							{/* **************************************************************
																datos del representante
						**************************************************************  */}
							<hr />
							<h5 className="">Representante</h5>
							{representativeData ? (
								<>
									{representativeData.name}
									<div>Cedula: {representativeData.ci}</div>
									<div>
										Fecha de nacimiento:
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
								</>
							) : (
								<div>No asignado</div>
							)}
						</>
					)}
				</div>
			</div>
		</>
	);
}
