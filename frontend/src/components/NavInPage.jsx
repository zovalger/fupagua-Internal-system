import styles from "./NavBar.module.scss";
// import { AiOutlineMenu } from "react-icons/ai";

export default function NavInPage({ children }) {
	return <div className={styles.container}>{children}</div>;
}
