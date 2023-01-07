import styles from "./ActivityNote.module.scss";

import { BiNote } from "react-icons/bi";

export default function ActivityNote() {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>
				<BiNote />
			</div>
			<textarea
				name=""
				id=""
				// rows='5'
		
				placeholder="nota de la actividad"
			></textarea>
		</div>
	);
}
