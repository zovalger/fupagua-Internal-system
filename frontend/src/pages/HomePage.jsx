import styles from "./HomePage.module.scss";

import { Link, Navigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import { RxHamburgerMenu } from "react-icons/rx";

export function HomePage() {
	return (
		<>
			<Nav leftIcon={<RxHamburgerMenu />} title={"Fupagua"} />

			<div className={styles.container}>
				<div className={styles.secciones}>
					<Link to={`/agenda`}>
						<button>agenda</button>
					</Link>
					<Link to={`/agenda`}>
						<button>agenda</button>
					</Link>
					<Link to={`/agenda`}>
						<button>agenda</button>
					</Link>
					<Link to={`/agenda`}>
						<button>agenda</button>
					</Link>
				</div>
			</div>
		</>
	);
}
