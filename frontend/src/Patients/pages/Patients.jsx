import { BiChevronLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { PatientSeachForm } from "../components/PatientSeachForm";
import { PatientListItem } from "../components/PatientListItem";
import {
	getAllPatientsRequest,
	getPatientSearchLimitsRequest,
	getPatientsBySearchRequest,
	getPatientsBySearchSimpleRequest,
	getPatientsRequest,
} from "../../api/patients";
import PatientContext from "../context/PatientContext";
import ToastContext from "../../context/ToastContext";
import { useAppData } from "../../context/AppContext";
import Nav from "../../UI/components/Nav";
import UserContext from "../../context/UserContext";
import PatientStadistic from "../components/PatientStadistic";
import { Placeholder } from "reactstrap";

export function Patients() {
	const { user } = useContext(UserContext);

	const { toggleAsideActive } = useAppData();
	const navigate = useNavigate();

	const {
		
		showErrorToast,
		showLoadingToast,
		hideAllToasts,
	} = useContext(ToastContext);

	const {
		patientList,
		setPatientList,
		patientList_By_Query,
		setPatientList_By_Query,
		inQuery,
		settings,
		queryObj,
	} = useContext(PatientContext);

	const [limits, setLimits] = useState(null);

	useEffect(() => {
		getAllPatient();
	}, [patientList.length > 0]);

	const getAllPatient = async () => {
		try {
			showLoadingToast();

			const { data } = await getAllPatientsRequest();

			const { data: dataLimits } = await getPatientSearchLimitsRequest();

			hideAllToasts();

			data.length > 0
				? setPatientList(data)
				: showErrorToast("no hay datos disponibles");

			setLimits(dataLimits);
		} catch (error) {
			hideAllToasts();
			console.log(error);
			const { error: err, message } = error.response.data;
			let msg = err ? message : error.message;
			showErrorToast(msg);
		}
	};
	const makeQuery = async (query) => {
		try {
			showLoadingToast();

			const { data } = settings.querySimple
				? await getPatientsBySearchSimpleRequest(query)
				: await getPatientsBySearchRequest(query);

			hideAllToasts();

			data.length > 0
				? setPatientList_By_Query(data)
				: showErrorToast("No coincide ningun registro");
		} catch (error) {
			hideAllToasts();
			console.log(error);
			const { error: err, message } = error.response.data;
			let msg = err ? message : error.message;
			showErrorToast(msg);
		}
	};

	const insertarItemInList = (patient) => (
		<PatientListItem data={patient} key={patient.id} />
	);

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={() => navigate("/")}
				// leftIcon={<RxHamburgerMenu />}
				// leftFuctionOnClick={toggleAsideActive}
				title={<div>Pacientes</div>}
				rightButtons={
					<>
						{/* <button onClick={refreshData}>
							<AiOutlineReload />
						</button> */}

						{user && user.permissions.includes("patientEdit") && (
							<Link to={"/pacientes/añadir"}>
								<button>
									<AiOutlinePlus />
								</button>
							</Link>
						)}
					</>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<div className=" scrollInSpacework">
				<div className="container">
					{
					limits 
					// null
					? (
						<PatientSeachForm
							makeQuery={makeQuery}
							queryObj={queryObj}
							limits={limits}
						/>
					) : (
						<Placeholder animation="wave" tag="div" >
							<Placeholder xs={12} style={{height:"4.2rem",margin:"1rem 0"}} />
						</Placeholder>
					)}

					<PatientStadistic
						patients={
							inQuery && patientList_By_Query.length > 0
								? patientList_By_Query
								: patientList
						}
					/>

					{/* <div>
						<span>
							Cantidad:{" "}
							{inQuery && patientsQuery.length > 0
								? patientsQuery.length
								: patients.length}{" "}
						</span>

						<span>
							ninos {} ninas
						</span>
					</div> */}

					{inQuery && patientList_By_Query.length > 0
						? patientList_By_Query.map(insertarItemInList)
						:  patientList.map(insertarItemInList)}
				</div>
			</div>
		</>
	);
}
