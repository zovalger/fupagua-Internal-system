import styles from "./AsidePanelOptions.module.scss";

import { IoLibraryOutline, IoHomeOutline } from "react-icons/io5";
import { BsCalendarWeek, BsCardText, BsPeopleFill } from "react-icons/bs";

import { RiCustomerService2Line, RiPagesLine } from "react-icons/ri";

import { RxHamburgerMenu } from "react-icons/rx";

import ListOptionItem from "./ListOption_item";
import Nav from "../Nav";
import { useAppData } from "../../../context/AppContext";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";

function AsidePanelOptions() {
	const { asidePanelActive, toggleAsideActive } = useAppData();

	const links = [
		{},

		{
			name: "inicio",
			icon: <IoHomeOutline />,
			url: "/",
		},
		{},
		{
			name: (
				<>
					<div>Biblioteca</div>
					<div>"Juana Milano de Diaz"</div>
				</>
			),
			icon: <IoLibraryOutline />,
			url: "/biblioteca",
		},

		{
			name: "Fichas",
			icon: <BsCardText />,
			url: "/biblioteca/imprimir-fichas",
		},
		{},

		{
			name: "Pacientes",
			icon: <BsPeopleFill />,
			url: "/pacientes",
		},
		{},

		{
			name: "Editor Pagina",
			icon: <RiPagesLine />,
			url: "/landing-edit",
		},
		{ name: "Videos", icon: <AiOutlineYoutube />, url: "/landing-edit/videos" },
		{
			name: "Servicios",
			icon: <RiCustomerService2Line />,
			url: "/landing-edit/servicios",
		},
		{
			name: "Empleados",
			icon: <GrUserWorker />,
			url: "/landing-edit/empleados",
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

				{/* <ListOptionItem
					url={"/agenda"}
					icon={<BsCalendarWeek />}
					text="Agenda"
					onClick={toggleAsideActive}
				/> */}

				{links.map((l, index) =>
					l.name ? (
						<ListOptionItem
							url={l.url}
							icon={l.icon}
							text={l.name}
							onClick={toggleAsideActive}
						/>
					) : (
						<hr />
					)
				)}
			</div>
		</div>
	);
}

export default AsidePanelOptions;
