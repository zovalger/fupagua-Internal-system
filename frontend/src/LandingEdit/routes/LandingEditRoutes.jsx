import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { BookRecommendedFormBook } from "../pages/BookRecommended/BookRecommendedFormBook";
import { BookRecommendedList } from "../pages/BookRecommended/BookRecommendedList";
import { EventPostFormEvent } from "../pages/EventPost/EventPostFormEvent";
import { EventPostList } from "../pages/EventPost/EventPostList";
import { FupaguaEmpleadosFormEmpleados } from "../pages/FupaguaEmpleados/FupaguaEmpleadosFormEmpleados";
import { FupaguaEmpleadosList } from "../pages/FupaguaEmpleados/FupaguaEmpleadosList";
import { FupaguaServiceFormService } from "../pages/FupaguaServicios/FupaguaServiceFormService";
import { FupaguaServiceList } from "../pages/FupaguaServicios/FupaguaServiceList";
import { LandingEditMain } from "../pages/LandingEditMain";
import { VideoLinkFormVideo } from "../pages/VideoLinks/VideoLinkFormVideo";
import { VideoLinkList } from "../pages/VideoLinks/VideoLinkList";
import LandingPath from "./LandingPath";

const LandingEditRoutes = () => {
	const { user } = useContext(UserContext);

	if (!user) return;

	if (!user.permissions.includes("landingView")) return;

	return (
		<Routes>
			<Route path={`${LandingPath}`} element={<LandingEditMain />} />
			<Route path={`${LandingPath}/videos`} element={<VideoLinkList />} />

			<Route
				path={`${LandingPath}/servicios`}
				element={<FupaguaServiceList />}
			/>
			<Route
				path={`${LandingPath}/empleados`}
				element={<FupaguaEmpleadosList />}
			/>
			<Route
				path={`${LandingPath}/libros_recomendados`}
				element={<BookRecommendedList />}
			/>
			<Route
				path={`${LandingPath}/eventos-actividades`}
				element={<EventPostList />}
			/>

			{user.permissions.includes("landingEdit") && (
				<>
					{/* *********************** videos **************************/}
					<Route
						path={`${LandingPath}/videos/añadir`}
						element={<VideoLinkFormVideo create={true} />}
					/>
					<Route
						path={`${LandingPath}/videos/:id`}
						element={<VideoLinkFormVideo />}
					/>
					{/* *********************** Fupagua Servicios **************************/}

					<Route
						path={`${LandingPath}/servicios/añadir`}
						element={<FupaguaServiceFormService create={true} />}
					/>
					<Route
						path={`${LandingPath}/servicios/:id`}
						element={<FupaguaServiceFormService />}
					/>
					{/* *********************** Fupagua Servicios **************************/}

					<Route
						path={`${LandingPath}/empleados/añadir`}
						element={<FupaguaEmpleadosFormEmpleados create={true} />}
					/>
					<Route
						path={`${LandingPath}/empleados/:id`}
						element={<FupaguaEmpleadosFormEmpleados />}
					/>
					{/* *********************** libros_recomendados **************************/}

					<Route
						path={`${LandingPath}/libros_recomendados/añadir`}
						element={<BookRecommendedFormBook create={true} />}
					/>
					<Route
						path={`${LandingPath}/libros_recomendados/:id`}
						element={<BookRecommendedFormBook />}
					/>
					{/* *********************** Eventos y actividades **************************/}

					<Route
						path={`${LandingPath}/eventos-actividades/añadir`}
						element={<EventPostFormEvent create={true} />}
					/>
					<Route
						path={`${LandingPath}/eventos-actividades/:id`}
						element={<EventPostFormEvent />}
					/>
				</>
			)}
		</Routes>
	);
};

export default LandingEditRoutes;
