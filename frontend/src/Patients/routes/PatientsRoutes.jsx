import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Patients } from "../pages/Patients";
import { PatientsDetails } from "../pages/PatientsDetails";
import { PatientsFormPatient } from "../pages/PatientsFormPatient";

const PatientsRoutes = () => {
	const { user } = useContext(UserContext);

	if (!user) return;

	return (
		<Routes>
			{user.permissions.includes("patientView") && (
				<>
					<Route path="/pacientes" element={<Patients />} />
					<Route path="/pacientes/:id" element={<PatientsDetails />} />
				</>
			)}
			{user.permissions.includes("patientEdit") && (
				<>
					<Route path="/pacientes/añadir" element={<PatientsFormPatient />} />
					<Route
						path="/pacientes/editar/:id"
						element={<PatientsFormPatient />}
					/>
				</>
			)}
		</Routes>
	);
};

export default PatientsRoutes;
