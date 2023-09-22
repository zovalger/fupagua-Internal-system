import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../../context/UserContext";
import UserDetails from "../pages/UserDetails";
import UserForm from "../pages/UserForm";
import { Users } from "../pages/Users";
import UsersLogs from "../pages/UsersLogs";
import UserPath from "./UserPath";

const UserRoutes = () => {
	const { user } = useContext(UserContext);

	if (!user) return;

	return (
		<Routes>
			{user.permissions.includes("userView") && (
				<>
					<Route path={`${UserPath}`} element={<Users />} />
					<Route path={`${UserPath}/:id`} element={<UserDetails />} />
				</>
			)}

			{user.permissions.includes("userEdit") && (
				<>
					<Route path={`${UserPath}/nuevo_usuario`} element={<UserForm />} />
					<Route path={`${UserPath}/editar/:id`} element={<UserForm />} />
				</>
			)}

			{user.permissions.includes("bitacoraView") && (
				<>
					<Route path={`${UserPath}/bitacoras`} element={<UsersLogs />} />
				</>
			)}
		</Routes>
	);
};

export default UserRoutes;
