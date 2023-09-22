import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Biblioteca } from "../pages/Biblioteca";
import { BibliotecaBook } from "../pages/BibliotecaBook";
import { BibliotecaFichaPrint } from "../pages/BibliotecaFichaPrint";
import { BibliotecaFormBook } from "../pages/BibliotecaFormBook";
import BibliotecaPath from "./BibliotecaPath";

const BibliotecaRoutes = () => {
	const { user } = useContext(UserContext);

	return (
		<Routes>
			<Route path={`${BibliotecaPath}`} element={<Biblioteca />} />

			{user && user.permissions.includes("bibliotecaEdit") && (
				<>
					<Route
						path={`${BibliotecaPath}/nuevo_libro`}
						element={<BibliotecaFormBook create={true} />}
					/>
					<Route
						path={`${BibliotecaPath}/editar/:id`}
						element={<BibliotecaFormBook />}
					/>
				</>
			)}

			<Route
				path={`${BibliotecaPath}/imprimir-fichas`}
				element={<BibliotecaFichaPrint />}
			/>
			<Route path={`${BibliotecaPath}/:id`} element={<BibliotecaBook />} />
		</Routes>
	);
};

export default BibliotecaRoutes;
