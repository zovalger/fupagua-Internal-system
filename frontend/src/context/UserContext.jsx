import moment from "moment";
import { login_Request, logout_Request, profile_Request } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { getUserLogoutTimeRequest } from "../api/users";
import ToastContext from "./ToastContext";

const { createContext, useState, useEffect, useContext } = require("react");

const UserContext = createContext();

// ****************************************************************************
// 									datos y autenticacion del usuario
// ****************************************************************************

export const UserProvider = ({ children }) => {
	const { showInfoToast, hideAllToasts } = useContext(ToastContext);

	const [auth, setAuth] = useState(false);
	const [user, setUser] = useState(null);
	const [logoutDate, setLogoutDate] = useState(null);
	const [reference, setReference] = useState(null);
	const [inter, setInter] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (user === null)
			getDataUser()
				.then((profile) => {
					if (!profile) return;
					setAuth(true);
					setUser(profile);
				})
				.catch((error) => console.log(error));

		if (user) {
			setInter(
				setInterval(() => {
					console.log("referencia");
					setReference(new Date());
					if (user.id > 0) {
						getUserLogoutTimeRequest(user.id)
							.then(({ data }) => {
								setLogoutDate(new Date(data.logout_date));
							})
							.catch((error) => {});
					}
				}, 60000)
			);
		} else if (inter) {
			clearTimeout(inter);
		}

		return () => {
			clearTimeout(inter);
		};
	}, [user]);

	const login = async (credentials) => {
		// try {
		const resAuth = await login_Request(credentials);
		console.log("peticion de login");

		if (!resAuth.data.auth) throw new Error("No Autenticado");

		setAuth(true);

		const profile = await getDataUser();

		return profile;
	};

	const getDataUser = async () => {
		const { data: userData } = await profile_Request();
		console.log("obteniendo perfil");

		if (moment(userData.logout_date).isBefore(moment())) return;
		
		if (userData.error) throw new Error(userData.error.message);

		setUser(userData);

		setLogoutDate(new Date(userData.logout_date));

		return userData;
	};

	const logout = async () => {
		const { data } = await logout_Request();

		if (data.error) throw new Error(data.error.message);

		const { success } = data;

		if (!success) throw new Error("Error innesperado");

		navigate("/login");

		setAuth(false);
		setUser(null);
	};

	useEffect(() => {
		if (!user) return;

		const m = moment(logoutDate);

		if (m.isBefore(moment())) closeSessionByLogic();
		if (moment(m).subtract(2, "minutes").isBefore(moment())) {
			console.log("advertencia de cierre");
			hideAllToasts();
			showInfoToast(`La sesion se cerrara en ${m.diff(moment(), "seconds")}`);
		}
	}, [logoutDate, reference]);

	const closeSessionByLogic = async () => {
		if (!user) return;

		console.log("Cierre automatico");

		setAuth(false);
		setUser(null);
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{
				auth,
				setAuth,
				user,
				setUser,
				login,
				logout,
				getDataUser,
				closeSessionByLogic,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
