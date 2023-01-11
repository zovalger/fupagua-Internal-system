import styles from "./ListOption_item.module.scss";

import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

function ListOptionItem({ icon, text, url, onClick }) {
	return (
		<Link to={url} onClick={onClick}>
			<div className={styles.container}>
				<span className={styles.icon}>{icon ? icon : <FaBeer />}</span>
				<span className={styles.text}>{text}</span>
			</div>
		</Link>
	);
}

export default ListOptionItem;
