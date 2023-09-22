import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

import Nav from "../../UI/components/Nav";
import { MdOutlineEdit } from "react-icons/md";
import UserPath from "../routes/UserPath";
import { getUserRequest } from "../../api/users";
import permissionsSystem from "../../config/permissionsSystem";
import { getUserLogs_by_userId_Request } from "../../api/usersLogs";
import UserLogItemList from "../components/UserLogItemList";
import UserContext from "../../context/UserContext";

const UserDetails = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	const params = useParams();
	const [userData, setUserData] = useState("");
	const [userLogs, setUserlogs] = useState([]);

	const getData = async () => {
		try {
			const { data } = await getUserRequest(params.id);

			if (data.dateBirth) data.dateBirth = new Date(data.dateBirth);
			setUserData(data);
		} catch (error) {
			navigate({ to: UserPath });
		}
	};

	const getLogs = async () => {
		try {
			console.log("obtener usuario");
			const { data } = await getUserLogs_by_userId_Request(params.id);
			setUserlogs(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();

		if (user && user.permissions.includes("bitacoraView")) getLogs();
	}, [params.id]);

	return (
		<>
			<Nav
				leftIcon={
					<button
						onClick={() => {
							navigate(`${UserPath}`);
						}}
					>
						<BiChevronLeft />
					</button>
				}
				// leftFuctionOnClick={toggleAsideActive}
				title={userData ? `${userData.name.slice(0, 14)}...` : `Usuario`}
				rightButtons={
					<>
						{user && user.permissions.includes("userEdit") && (
							<Link to={`${UserPath}/editar/${params.id}`}>
								<button>
									<MdOutlineEdit />
								</button>
							</Link>
						)}
					</>
				}
			/>

			<div className="scrollInSpacework">
				<div className="container pt-3">
					<h3>{userData.name} </h3>
					<div>
						<strong>Correo</strong>: {userData.email}
					</div>
					<div>
						<strong>Telefono</strong>: {userData.phone}
					</div>
					<div>
						<strong>Direccion</strong>: {userData.address}
					</div>
					<div>
						<strong>Fecha de nacimiento</strong>:{" "}
						{new Date(userData.birthdate).toLocaleDateString()}
					</div>
					<div>
						<strong>Permisos</strong>:
						<ul>
							{userData &&
								userData.permissions.map((p) => {
									const permiso = permissionsSystem[p];
									return permiso && <li>{permissionsSystem[p]}</li>;
								})}
						</ul>
					</div>

					{user && userLogs.length > 0 && <h5>Historial de acciones</h5>}
				</div>

				{user && userLogs.length > 0 && <UserLogItemList data={userLogs} />}
			</div>
		</>
	);
};

export default UserDetails;
