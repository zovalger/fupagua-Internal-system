import { Routes, Route } from "react-router-dom";
import { AppDataProvider } from "./context/AppContext";
import { Toaster } from "react-hot-toast";

import {
	HomePage,
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
	VideoLinkList,
	VideoLinkFormVideo,
	FupaguaServiceList,
	FupaguaServiceFormService,
	FupaguaEmpleadosList,
	FupaguaEmpleadosFormEmpleados,
	BookRecommendedList,
	BookRecommendedFormBook,
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
						<Route
							path="/pacientes/editar/:id"
							element={<PatientsFormPatient />}
						/>
						<Route path="/pacientes/:id" element={<PatientsDetails />} />

						{/* **************************************************************************
																							Edicion de landing
						************************************************************************** */}

						<Route path="/landing-edit" element={<LandingEditMain />} />

						{/* *********************** videos **************************/}
						<Route path="/landing-edit/videos" element={<VideoLinkList />} />

						<Route
							path="/landing-edit/videos/añadir"
							element={<VideoLinkFormVideo create={true} />}
						/>
						<Route
							path="/landing-edit/videos/:id"
							element={<VideoLinkFormVideo />}
						/>

						{/* *********************** Fupagua Servicios **************************/}
						<Route
							path="/landing-edit/servicios"
							element={<FupaguaServiceList />}
						/>

						<Route
							path="/landing-edit/servicios/añadir"
							element={<FupaguaServiceFormService create={true} />}
						/>
						<Route
							path="/landing-edit/servicios/:id"
							element={<FupaguaServiceFormService />}
						/>

						{/* *********************** Fupagua Servicios **************************/}
						<Route
							path="/landing-edit/empleados"
							element={<FupaguaEmpleadosList />}
						/>

						<Route
							path="/landing-edit/empleados/añadir"
							element={<FupaguaEmpleadosFormEmpleados create={true} />}
						/>
						<Route
							path="/landing-edit/empleados/:id"
							element={<FupaguaEmpleadosFormEmpleados />}
						/>

						{/* *********************** libros_recomendados **************************/}
						<Route
							path="/landing-edit/libros_recomendados"
							element={<BookRecommendedList />}
						/>

						<Route
							path="/landing-edit/libros_recomendados/añadir"
							element={<BookRecommendedFormBook create={true} />}
						/>
						<Route
							path="/landing-edit/libros_recomendados/:id"
							element={<BookRecommendedFormBook />}
						/>

						{/* <Route
							path="/landing-edit/editar/:id"
							element={<PatientsFormPatient />}
						/> */}

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
