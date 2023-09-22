import { BiChevronLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import ToastContext from "../../context/ToastContext";
import { useAppData } from "../../context/AppContext";
import Nav from "../../UI/components/Nav";
import { ItemListImagenTitleDescrip } from "../../UI/components/ItemListImagenTitleDescrip";
import { getAllUsersRequest, getUsersBySearchRequest } from "../../api/users";
import UserAccountContext from "../context/UserAccountContext";
import { UserSeachForm } from "../components/UserSeachForm";
import UserPath from "../routes/UserPath";

export function Users() {
	const { toggleAsideActive } = useAppData();
	const navigate = useNavigate();

	const { showErrorToast, showLoadingToast, hideAllToasts } =
		useContext(ToastContext);

	const {
		userList,
		setUserList,
		userList_By_Query,
		setUserList_By_Query,
		inQuery,
		settings,
	} = useContext(UserAccountContext);

	useEffect(() => {
		getAllUser();
	}, []);

	const getAllUser = async () => {
		try {
			showLoadingToast();

			const { data } = await getAllUsersRequest();
			data.length > 0
				? setUserList(data)
				: showErrorToast("no hay datos disponibles");

			hideAllToasts();
		} catch (error) {
			hideAllToasts();
			console.log(error);
			const { error: err, message } = error.response.data;
			let msg = err ? message : error.message;
			showErrorToast(msg);
		}
	};

	const makeQuery = async (query) => {
		try {
			const { data } = await getUsersBySearchRequest(query);
			data.length > 0
				? setUserList_By_Query(data)
				: showErrorToast("No coincide ningun registro");
		} catch (error) {
			hideAllToasts();
			console.log(error);
			const { error: err, message } = error.response.data;
			let msg = err ? message : error.message;
			showErrorToast(msg);
		}
	};

	const insertarItemInList = (user) => (
		<ItemListImagenTitleDescrip
			key={user.id}
			title={user.name}
			description={
				<>
					<div>Telefono: {user.phone}</div>
					<div>Cedula: {user.CI}</div>
					<div>Correo: {user.email}</div>
				</>
			}
			onClick={() => {
				navigate(`${UserPath}/${user.id}`);
			}}
		/>
	);

	return (
		<>
			<Nav
				leftIcon={<BiChevronLeft />}
				leftFuctionOnClick={() => navigate("/")}
				// leftIcon={<RxHamburgerMenu />}
				// leftFuctionOnClick={toggleAsideActive}
				title={<div>Usuarios</div>}
				rightButtons={
					<>
						{/* <button onClick={refreshData}>
							<AiOutlineReload />
						</button> */}

						<Link to={`${UserPath}/nuevo_usuario`}>
							<button>
								<AiOutlinePlus />
							</button>
						</Link>
					</>
				}
			/>

			{/*********************************************************************
			
												formulario para buscar libros 
				
			*********************************************************************/}

			<div className=" scrollInSpacework">
				<div className="container pt-4">
					{/* <UserSeachForm makeQuery={makeQuery} /> */}

					{inQuery && userList_By_Query.length > 0
						? userList_By_Query.map(insertarItemInList)
						: userList.map(insertarItemInList)}
				</div>
			</div>
		</>
	);
}
