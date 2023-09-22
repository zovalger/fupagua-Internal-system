import { Route, Routes } from "react-router-dom";
import { Agenda } from "../pages/Agenda";
import { AgendaActivity } from "../pages/AgendaActivity";

const AgendaRoutes = () => (
	<Routes>
		<Route path="/agenda" element={<Agenda />} />
		<Route
			path="/agenda/nueva-actividad"
			element={<AgendaActivity create={true} />}
		/>
		<Route path="/agenda/:id" element={<AgendaActivity />} />
	</Routes>
);

export default AgendaRoutes;
