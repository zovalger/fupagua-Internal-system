import styles from "./AsidePanelOptions.module.scss";

import { IoLibraryOutline, IoHomeOutline } from "react-icons/io5";
import {
	BsCalendarWeek,
	BsCardText,
	BsListColumnsReverse,
	BsPeopleFill,
} from "react-icons/bs";

import { RiCustomerService2Line, RiPagesLine } from "react-icons/ri";

import { RxHamburgerMenu } from "react-icons/rx";

import ListOptionItem from "./ListOption_item";
import Nav from "../Nav";
import { useAppData } from "../../../context/AppContext";
import { AiOutlineUser, AiOutlineYoutube } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { BiLogIn, BiPhotoAlbum } from "react-icons/bi";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import UserPath from "../../../Users/routes/UserPath";
import { FaUserCircle } from "react-icons/fa";

function AsidePanelOptions() {
	const { asidePanelActive, toggleAsideActive } = useAppData();
	const { user, logout } = useContext(UserContext);

	const links = [
		{
			name: "Inicio",
			icon: <IoHomeOutline />,
			url: "/",
			topLine: true,
		},
		{
			name: (
				<>
					<div>Biblioteca</div>
					<div>"Juana Milano de Diaz"</div>
				</>
			),
			icon: <IoLibraryOutline />,
			url: "/biblioteca",
			topLine: true,
		},
		{
			name: "Fichas",
			icon: <BsCardText />,
			url: "/biblioteca/imprimir-fichas",
			permission: "bibliotecaEdit",
		},
		{
			name: "Pacientes",
			icon: <BsPeopleFill />,
			url: "/pacientes",
			permission: "patientView",
			topLine: true,
		},
		{
			name: "Editor Página",
			icon: <RiPagesLine />,
			url: "/landing-edit",
			permission: "landingView",
			topLine: true,
		},
		{
			name: "Videos",
			icon: <AiOutlineYoutube />,
			url: "/landing-edit/videos",
			permission: "landingView",
		},
		{
			name: "Servicios",
			icon: <RiCustomerService2Line />,
			url: "/landing-edit/servicios",
			permission: "landingView",
		},
		{
			name: "Empleados",
			icon: <GrUserWorker />,
			url: "/landing-edit/empleados",
			permission: "landingView",
		},
		{
			name: "Eventos y actividades",
			icon: <BiPhotoAlbum />,
			url: "/landing-edit/eventos-actividades",
			permission: "landingView",
		},
		{
			name: "Usuarios",
			icon: <AiOutlineUser />,
			url: UserPath,
			permission: "userView",
			topLine: true,
		},
		{
			name: "Bitácora",
			icon: <BsListColumnsReverse />,
			url: `${UserPath}/bitacoras`,
			permission: "bitacoraView",
		},
	];

	return (
		<div
			className={`${styles.overlay}  ${!asidePanelActive ? styles.hidden : ""}`}
			onClick={toggleAsideActive}
		>
			<div className={styles.panel} onClick={(e) => e.stopPropagation()}>
				<Nav
					leftIcon={<RxHamburgerMenu />}
					leftFuctionOnClick={toggleAsideActive}
					title={"Menu"}
				/>
				{user && (
					<div
						style={{
							padding: "1rem",
							paddingBottom: 0,
							display: "flex",
							alignItems: "center",
						}}
					>
						<FaUserCircle style={{ marginRight: "1rem" }} />
						<span>{user.name}</span>
					</div>
				)}

				{links.map((l, index) => {
					const li = (
						<div key={index}>
							{l.topLine && <hr />}
							<ListOptionItem
								url={l.url}
								icon={l.icon}
								text={l.name}
								onClick={toggleAsideActive}
							/>
						</div>
					);

					if (!l.permission) return li;

					if (user && user.permissions.includes(l.permission)) return li;

					return null;
				})}

				{user && (
					<>
						<hr />
						<ListOptionItem
							icon={<BiLogIn />}
							text={"Cerrar sesion"}
							onClick={() => {
								toggleAsideActive();
								logout();
							}}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default AsidePanelOptions;
