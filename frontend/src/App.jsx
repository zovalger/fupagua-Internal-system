import { Routes, Route } from "react-router-dom";
import { AppDataProvider } from "./context/AppContext";

import AsidePanelOptions from "./UI/components/AsidePanelOption/AsidePanelOptions";
import "./App.scss";

import { HomePage, Login } from "./pages";
import PatientsRoutes from "./Patients/routes/PatientsRoutes";
import BibliotecaRoutes from "./Biblioteca/routes/BibliotecaRoutes";
import LandingEditRoutes from "./LandingEdit/routes/LandingEditRoutes";
import AgendaRoutes from "./Agenda/routes/AgendaRoutes";
import { PatientProvider } from "./Patients/context/PatientContext";
import { ToastProvider } from "./context/ToastContext";
import UserRoutes from "./Users/routes/UserRoutes";
import { UserAccountProvider } from "./Users/context/UserAccountContext";
import { UserProvider } from "./context/UserContext";
// import TestRoutes from "./Test/routes/TestRoutes";

function App() {
	return (
		<ToastProvider>
			<UserProvider>
				<UserAccountProvider>
					<PatientProvider>
						<AppDataProvider>
							<div className="App">
								<div className="SectionApp">
									<Routes>
										<Route path="/" element={<HomePage />} />
										<Route path="/login" element={<Login />} />

										<Route
											path="/*"
											element={
												<>
													<AgendaRoutes />
													<PatientsRoutes />
													<BibliotecaRoutes />
													<LandingEditRoutes />
													<UserRoutes />
													{/* <TestRoutes /> */}
												</>
											}
										/>
									</Routes>
								</div>

								<AsidePanelOptions />
							</div>
						</AppDataProvider>
					</PatientProvider>
				</UserAccountProvider>
			</UserProvider>
		</ToastProvider>
	);
}

export default App;
