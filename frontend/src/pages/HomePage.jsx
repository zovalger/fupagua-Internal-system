import styles from "./styles/HomePage.module.scss";

import { Link, Navigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLibraryOutline } from "react-icons/io5";
import { BsCalendarWeek, BsPeopleFill } from "react-icons/bs";

import { useAppData } from "../context/AppContext";

export function HomePage() {
	const { toggleAsideActive } = useAppData();
	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"FUPAGUA"}
			/>

			<div className={styles.container}>
				<div className={styles.secciones}>
					{/* <Link to={`/agenda`}>
						<button>
							<div className={styles.icon}>
								<BsCalendarWeek />
							</div>
							<span>Agenda</span>
						</button>
					</Link> */}
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
			</div>
		</>
	);
}
