import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

import styles from "../styles/Biblioteca.module.scss";
import { useAppData } from "../../context/AppContext";

import Nav from "../../components/common/Nav";
import { PatientSeachForm } from "../../components/Patients/PatientSeachForm";
import { PatientListItem } from "../../components/Patients/PatientListItem";
import { getPatientsRequest } from "../../api/patients";

export function Patients() {
	const { toggleAsideActive } = useAppData();
	const [patients, setPatients] = useState([]);

	const [patientsQuery, setPatientsQuery] = useState([]);
	const [inQuery, setInQuery] = useState(false);

	const makeQuery = async (query) => {
		try {
			const myPromise = getPatientsRequest(query);

			toast.promise(
				myPromise,
				{
					id: "refreshDataPatients",
					loading: "cargando datos",
					success: (res) => {
						console.log(res);

						if (query) {
							setInQuery(true);
							setPatientsQuery(res.data);
						} else {
							setPatients(res.data);
						}

						if (res.data.length <= 0)
							return toast.error(
								query
									? "No coincide ningun elemento"
									: "no hay datos disponibles",
								{
									duration: 2500,
								}
							);
					},
					error: (err) => `This just happened: ${err.toString()}`,
				},
				{
					success: {
						duration: 10,
					},
					error: {
						duration: 4,
					},
				}
			);
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};

	useEffect(() => {
		makeQuery();
	}, []);

	const insertarItemInList = (patient) => (
		<PatientListItem data={patient} key={patient.id} />
	);

	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={<div>Pacientes</div>}
				rightButtons={
					<>
						{/* <button onClick={refreshData}>
							<AiOutlineReload />
						</button> */}

						<Link to={"/pacientes/añadir"}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link>
					</>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<div className="container scrollInSpacework">
				<PatientSeachForm
					makeQuery={makeQuery}
					setInQuery={setInQuery}
					onClearValue={setPatientsQuery}
				/>

				{inQuery && patientsQuery.length > 0
					? patientsQuery.map(insertarItemInList)
					: patients.map(insertarItemInList)}
			</div>
		</>
	);
}
