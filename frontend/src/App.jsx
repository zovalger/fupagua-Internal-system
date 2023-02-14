import { Routes, Route } from "react-router-dom";
import { AppDataProvider } from "./context/AppContext";
import { Toaster } from "react-hot-toast";

import {
	HomePage,
	People,
	Agenda,
	AgendaActivity,
	Biblioteca,
	BibliotecaFormBook,
	BibliotecaBook,
	BibliotecaFichaPrint,
	Patients,
	PatientsFormPatient,
	PatientsDetails,
	LandingEditMain,
} from "./pages";

import AsidePanelOptions from "./components/common/AsidePanelOption/AsidePanelOptions";
import "./App.scss";

function App() {
	return (
		<AppDataProvider>
			<Toaster />
			<div className="App">
				<div className="SectionApp">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/agenda" element={<Agenda />} />
						<Route
							path="/agenda/nueva-actividad"
							element={<AgendaActivity create={true} />}
						/>
						<Route path="/agenda/:id" element={<AgendaActivity />} />

						{/* **************************************************************************
																							biblioteca
						************************************************************************** */}

						<Route path="/biblioteca" element={<Biblioteca />} />
						<Route
							path="/biblioteca/nuevo_libro"
							element={<BibliotecaFormBook create={true} />}
						/>
						<Route
							path="/biblioteca/editar/:id"
							element={<BibliotecaFormBook />}
						/>
						<Route
							path="/biblioteca/imprimir-fichas"
							element={<BibliotecaFichaPrint />}
						/>
						<Route path="/biblioteca/:id" element={<BibliotecaBook />} />

						{/* **************************************************************************
																							gestion de pacientes
						************************************************************************** */}

						<Route path="/pacientes" element={<Patients />} />
						<Route
							path="/pacientes/añadir"
							element={<PatientsFormPatient create={true} />}
						/>
						<Route path="/pacientes/editar/:id" element={<PatientsFormPatient />} />
						<Route path="/pacientes/:id" element={<PatientsDetails />} />
						<Route path="/landing-edit" element={<LandingEditMain />} />


						

						
						{/* <Route path="/:id" element={<PostForm />} />
					<Route path="*" element={<NotFoundPage />} /> */}
					</Routes>
				</div>

				<AsidePanelOptions />
			</div>
		</AppDataProvider>
	);
}

export default App;
