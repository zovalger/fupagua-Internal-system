import styles from "./NavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
	return (
		<div className={styles.container}>
			<span className={styles.icon}>
				<AiOutlineMenu />
			</span>
			<span className={styles.nameSection}>Personas</span>
		</div>
	);
}
