import styles from "./styles/HomePage.module.scss";

import { Link, Navigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLibraryOutline } from "react-icons/io5";
import { BsCalendarWeek, BsPeopleFill } from "react-icons/bs";

import { useAppData } from "../context/AppContext";
import { RiPagesLine } from "react-icons/ri";

export function HomePage() {
	const { toggleAsideActive } = useAppData();

	const links = [
		// {
		// 	name: "Agenda",
		// 	icon: <BsCalendarWeek />,
		// 	url: "/agenda",
		// },
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
			name: "Pacientes",
			icon: <BsPeopleFill />,
			url: "/pacientes",
		},
		{
			name: "Editor Pagina",
			icon: <RiPagesLine />,
			url: "/landing-edit",
		},
	];
	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"FUPAGUA"}
			/>
			{/* 
			<div className={styles.container}>
				<div className={styles.secciones}>
					<Link to={`/agenda`}>
						<button>
							<div className={styles.icon}>
								<BsCalendarWeek />
							</div>
							<span>Agenda</span>
						</button>
					</Link>
					<Link to={`/biblioteca`}>
						<button>
							<div className={styles.icon}>
								<IoLibraryOutline />
							</div>
							<div>Biblioteca</div>
							<div>"Juana Milano de Diaz"</div>
						</button>
					</Link>

					<Link to={`/pacientes`}>
						<button>
							<div className={styles.icon}>
								<BsPeopleFill />
							</div>
							<div>Pacientes</div>
						</button>
					</Link>
				</div>
			</div>  */}

			<div className="scrollInSpacework">
				<div className="container">
					<div className="d-flex flex-column">
						{links.map((l, index) => (
							<Link className="btn bg-light mt-3 py-4 shadow  " to={l.url}>
								<div className="fs-1">{l.icon}</div>
								<div className=" mt-2">{l.name}</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
