import styles from "./ListOption_item.module.scss";

import { FaBeer } from "react-icons/fa";

function ListOptionItem({ icon, text }) {
	return (
		<div className={styles.container}>
			<span className={styles.icon}>{icon ? icon : <FaBeer />}</span>
			<span className={styles.text}>{text}</span>
		</div>
	);
}

export default ListOptionItem;
