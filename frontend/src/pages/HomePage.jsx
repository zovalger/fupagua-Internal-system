import styles from "./styles/HomePage.module.scss";

import { Link, Navigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";

import { useAppData } from "../context/AppContext";

export function HomePage() {
	const { toggleAsideActive } = useAppData();
	return (
		<>
			<Nav
				leftIcon={<RxHamburgerMenu />}
				leftFuctionOnClick={toggleAsideActive}
				title={"Fupagua"}
			/>

			<div className={styles.container}>
				<div className={styles.secciones}>
					<Link to={`/agenda`}>
						<button>agenda</button>
					</Link>
					<Link to={`/biblioteca`}>
						<button>Biblioteca</button>
					</Link>
				</div>
			</div>
		</>
	);
}
